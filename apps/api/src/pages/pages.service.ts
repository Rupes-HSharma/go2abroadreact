import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Page, Prisma } from "@prisma/client";
import { randomUUID } from "node:crypto";
import {
  defaultTheme,
  documentSchema,
  metadataSchema,
  PageDocument,
  SectionNode,
} from "@go2abroad/page-builder";
import { PrismaService } from "../prisma.service";
import { CMS_ROLES, CmsActor } from "../auth/cms.guard";
import { SiteService } from "./site.service";
import {
  createPageSchema,
  createSectionSchema,
  reorderSchema,
  revisionSchema,
  saveDraftSchema,
  updatePageSchema,
  updateSectionSchema,
  validate,
} from "./pages.dto";

const json = (value: unknown): Prisma.InputJsonValue =>
  JSON.parse(JSON.stringify(value)) as Prisma.InputJsonValue;
type Tx = Prisma.TransactionClient;

@Injectable()
export class PagesService {
  private readonly publishedCache = new Map<
    string,
    { revision: number; document: PageDocument }
  >();
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly site: SiteService,
  ) {}

  async list(search: string, offset: number) {
    const where = {
      title: {
        contains: search.slice(0, 100),
        mode: Prisma.QueryMode.insensitive,
      },
    };
    const [items, total] = await this.prisma.$transaction([
      this.prisma.page.findMany({
        where,
        skip: offset,
        take: 20,
        orderBy: { updatedAt: "desc" },
        select: {
          id: true,
          title: true,
          slug: true,
          status: true,
          updatedAt: true,
          revision: true,
          _count: { select: { sections: true } },
        },
      }),
      this.prisma.page.count({ where }),
    ]);
    return { items, total, offset, limit: 20 };
  }

  private async requirePage(db: Tx, id: string) {
    const page = await db.page.findUnique({ where: { id } });
    if (!page) throw new NotFoundException("Page not found.");
    return page;
  }

  private async document(db: Tx, page: Page): Promise<PageDocument> {
    const nodes = await db.pageSection.findMany({
      where: { pageId: page.id },
      orderBy: [{ order: "asc" }, { id: "asc" }],
    });
    const metadata = Object.fromEntries(
      Object.keys(metadataSchema.shape).map((key) => [
        key,
        page[key as keyof Page] ?? "",
      ]),
    );
    return {
      ...metadata,
      sections: nodes.map((s, order) => ({
        id: s.id,
        type: s.type,
        order,
        data: s.data ?? {},
        settings: s.settings ?? {},
        isVisible: s.isVisible,
      })),
      theme: page.draftTheme ?? defaultTheme,
      navigation: page.draftNavigation ?? [],
    } as PageDocument;
  }

  async get(id: string) {
    const page = await this.requirePage(this.prisma, id);
    return {
      id,
      status: page.status,
      revision: page.revision,
      updatedAt: page.updatedAt,
      document: await this.document(this.prisma, page),
    };
  }

  private async mutate<T>(
    id: string,
    actor: CmsActor,
    action: string,
    fn: (tx: Tx, page: Page) => Promise<T>,
  ) {
    try {
      return await this.prisma.$transaction(
        async (tx) => {
          await tx.$queryRaw`SELECT id FROM pages WHERE id = ${id} FOR UPDATE`;
          const page = await this.requirePage(tx, id);
          const result = await fn(tx, page);
          await tx.auditLog.create({
            data: { actorId: actor.id, action, pageId: id },
          });
          return result;
        },
        { timeout: 15000 },
      );
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === "P2002"
      )
        throw new ConflictException(
          "This path or section ID is already in use.",
        );
      throw e;
    }
  }

  private checkRevision(page: Page, revision: number) {
    if (revision !== page.revision)
      throw new ConflictException(
        "This page changed in another editor. Reload before saving.",
      );
  }

  private async writeDraft(
    tx: Tx,
    page: Page,
    doc: PageDocument,
    preserveDesign = false,
  ) {
    const { sections, theme, navigation, ...metadata } = doc;
    const existing = preserveDesign
      ? await tx.pageSection.findMany({ where: { pageId: page.id } })
      : [];
    const existingById = new Map(existing.map((section) => [section.id, section]));
    if (
      preserveDesign &&
      existing.length > 0 &&
      (sections.length !== existing.length ||
        sections.some(
          (section, order) =>
            existing[order]?.id !== section.id ||
            existing[order]?.type !== section.type ||
            section.order !== order,
        ))
    )
      throw new BadRequestException(
        "The page structure is managed by the development team.",
      );
    const foreign = await tx.pageSection.findFirst({
      where: {
        id: { in: sections.map((s) => s.id) },
        pageId: { not: page.id },
      },
    });
    if (foreign)
      throw new BadRequestException("A section belongs to another page.");
    await tx.pageSection.deleteMany({ where: { pageId: page.id } });
    if (sections.length)
      await tx.pageSection.createMany({
        data: sections.map((s) => ({
          ...s,
          pageId: page.id,
          data: json(s.data),
          settings: json(
            preserveDesign
              ? existingById.get(s.id)?.settings ?? {}
              : s.settings,
          ),
          isVisible: preserveDesign
            ? existingById.get(s.id)?.isVisible ?? true
            : s.isVisible,
        })),
      });
    return tx.page.update({
      where: { id: page.id },
      data: {
        ...metadata,
        draftTheme: json(preserveDesign ? page.draftTheme ?? defaultTheme : theme),
        draftNavigation: json(
          preserveDesign ? page.draftNavigation ?? [] : navigation,
        ),
        revision: { increment: 1 },
      },
    });
  }

  async create(body: unknown, actor: CmsActor) {
    const values = validate(createPageSchema, body);
    const design = await this.site.get();
    try {
      const page = await this.prisma.page.create({
        data: {
          ...values,
          draftTheme: json(design.theme),
          draftNavigation: json(design.navigation),
        },
      });
      await this.prisma.auditLog.create({
        data: { actorId: actor.id, action: "page.create", pageId: page.id },
      });
      return this.get(page.id);
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === "P2002"
      )
        throw new ConflictException("Page path already exists.");
      throw e;
    }
  }

  async save(id: string, body: unknown, actor: CmsActor) {
    const input = validate(saveDraftSchema, body);
    return this.mutate(id, actor, "page.save", async (tx, page) => {
      this.checkRevision(page, input.revision);
      const updated = await this.writeDraft(
        tx,
        page,
        input.document as PageDocument,
        true,
      );
      return {
        id,
        status: updated.status,
        revision: updated.revision,
        updatedAt: updated.updatedAt,
        document: input.document,
      };
    });
  }

  async update(id: string, body: unknown, actor: CmsActor) {
    const input = validate(updatePageSchema, body);
    await this.mutate(id, actor, "page.update", (tx, page) =>
      tx.page.update({
        where: { id: page.id },
        data: { ...input, revision: { increment: 1 } },
      }),
    );
    return this.get(id);
  }

  async remove(id: string, actor: CmsActor) {
    await this.mutate(id, actor, "page.delete", (tx) =>
      tx.page.delete({ where: { id } }),
    );
    return { deleted: true };
  }

  async sections(id: string) {
    return (await this.get(id)).document.sections;
  }

  private async editSections(
    id: string,
    actor: CmsActor,
    action: string,
    edit: (sections: SectionNode[]) => SectionNode[],
  ) {
    await this.mutate(id, actor, action, async (tx, page) => {
      const doc = await this.document(tx, page);
      doc.sections = edit(doc.sections).map((s, order) => ({ ...s, order }));
      const validated = validate(documentSchema, doc);
      return this.writeDraft(tx, page, validated as PageDocument);
    });
    return this.get(id);
  }

  async createSection(id: string, body: unknown, actor: CmsActor) {
    const input = validate(createSectionSchema, body);
    return this.editSections(id, actor, "section.create", (sections) => {
      const node = {
        id: randomUUID(),
        type: input.type,
        data: input.data,
        settings: input.settings ?? {},
        isVisible: input.isVisible ?? true,
        order: input.order ?? sections.length,
      } as SectionNode;
      if (node.order > sections.length)
        throw new BadRequestException("Invalid section position.");
      sections.splice(node.order, 0, node);
      return sections;
    });
  }

  async updateSection(id: string, body: unknown, actor: CmsActor) {
    const input = validate(updateSectionSchema, body);
    const section = await this.prisma.pageSection.findUnique({ where: { id } });
    if (!section) throw new NotFoundException("Section not found.");
    return this.editSections(
      section.pageId,
      actor,
      "section.update",
      (sections) => {
        const index = sections.findIndex((s) => s.id === id);
        if (index < 0) throw new NotFoundException("Section not found.");
        const node = { ...sections[index], ...input } as SectionNode;
        sections.splice(index, 1);
        if (node.order > sections.length)
          throw new BadRequestException("Invalid section position.");
        sections.splice(node.order, 0, node);
        return sections;
      },
    );
  }

  async removeSection(id: string, actor: CmsActor) {
    const section = await this.prisma.pageSection.findUnique({ where: { id } });
    if (!section) throw new NotFoundException("Section not found.");
    return this.editSections(
      section.pageId,
      actor,
      "section.delete",
      (sections) => sections.filter((s) => s.id !== id),
    );
  }

  async reorder(id: string, body: unknown, actor: CmsActor) {
    const { sectionIds } = validate(reorderSchema, body);
    return this.editSections(id, actor, "section.reorder", (sections) => {
      if (
        sectionIds.length !== sections.length ||
        new Set(sectionIds).size !== sections.length ||
        sectionIds.some((sid) => !sections.some((s) => s.id === sid))
      )
        throw new BadRequestException(
          "Provide each section of this page exactly once.",
        );
      return sectionIds.map((sid) => sections.find((s) => s.id === sid)!);
    });
  }

  async publish(id: string, body: unknown, actor: CmsActor) {
    const { revision } = validate(revisionSchema, body);
    await this.mutate(id, actor, "page.publish", async (tx, page) => {
      this.checkRevision(page, revision);
      const configuration = validate(
        documentSchema,
        await this.document(tx, page),
      );
      if (!configuration.sections.some((s) => s.isVisible))
        throw new BadRequestException(
          "Add at least one visible section before publishing.",
        );
      const latest = await tx.pageVersion.aggregate({
        where: { pageId: id },
        _max: { version: true },
      });
      await tx.pageVersion.create({
        data: {
          pageId: id,
          version: (latest._max.version ?? 0) + 1,
          configuration: json(configuration),
          createdBy: actor.id,
          publishedAt: new Date(),
        },
      });
      await tx.page.update({
        where: { id },
        data: {
          status: "PUBLISHED",
          publishedSlug: configuration.slug,
          publishedConfiguration: json(configuration),
          revision: { increment: 1 },
        },
      });
    });
    return this.get(id);
  }

  async archive(id: string, actor: CmsActor) {
    await this.mutate(id, actor, "page.archive", (tx) =>
      tx.page.update({
        where: { id },
        data: {
          status: "ARCHIVED",
          publishedSlug: null,
          publishedConfiguration: Prisma.DbNull,
          revision: { increment: 1 },
        },
      }),
    );
    return this.get(id);
  }

  async duplicate(id: string, actor: CmsActor) {
    const source = await this.get(id);
    const slugPrefix = source.document.slug.slice(0, 155).replace(/[-/]+$/, "");
    const doc = {
      ...source.document,
      title: source.document.title.slice(0, 195) + " copy",
      slug: slugPrefix + "-copy-" + randomUUID().slice(0, 8),
      sections: source.document.sections.map((s) => ({
        ...s,
        id: randomUUID(),
      })),
    };
    validate(documentSchema, doc);
    const created = await this.prisma.$transaction(async (tx) => {
      const page = await tx.page.create({
        data: { title: doc.title, slug: doc.slug },
      });
      await this.writeDraft(tx, page, doc);
      await tx.auditLog.create({
        data: { actorId: actor.id, action: "page.duplicate", pageId: page.id },
      });
      return page;
    });
    return this.get(created.id);
  }

  async versions(id: string) {
    await this.requirePage(this.prisma, id);
    return this.prisma.pageVersion.findMany({
      where: { pageId: id },
      orderBy: { version: "desc" },
      take: 50,
      select: {
        id: true,
        version: true,
        createdAt: true,
        createdBy: true,
        publishedAt: true,
      },
    });
  }
  async version(id: string, version: number) {
    const record = await this.prisma.pageVersion.findUnique({
      where: { pageId_version: { pageId: id, version } },
    });
    if (!record) throw new NotFoundException("Version not found.");
    return record;
  }
  async restore(id: string, version: number, body: unknown, actor: CmsActor) {
    const { revision } = validate(revisionSchema, body);
    const record = await this.version(id, version);
    const doc = validate(documentSchema, record.configuration);
    await this.mutate(id, actor, "page.restore", async (tx, page) => {
      this.checkRevision(page, revision);
      return this.writeDraft(tx, page, {
        ...doc,
        sections: doc.sections.map((s) => ({ ...s, id: randomUUID() })),
      } as PageDocument);
    });
    return this.get(id);
  }

  async preview(id: string, body: unknown, actor: CmsActor) {
    await this.requirePage(this.prisma, id);
    const doc = validate(documentSchema, body);
    await this.prisma.pagePreview.deleteMany({
      where: { expiresAt: { lt: new Date() } },
    });
    const record = await this.prisma.pagePreview.create({
      data: {
        pageId: id,
        sessionId: actor.sessionId,
        configuration: json(doc),
        expiresAt: new Date(Date.now() + 15 * 60000),
      },
    });
    return {
      token: await this.jwt.signAsync(
        { purpose: "page-preview", previewId: record.id },
        { expiresIn: "15m" },
      ),
      expiresAt: record.expiresAt,
    };
  }

  async previewDocument(token: string) {
    let payload: { purpose: string; previewId: string };
    try {
      payload = await this.jwt.verifyAsync(token, { algorithms: ["HS256"] });
    } catch {
      throw new UnauthorizedException("Preview link expired.");
    }
    if (
      payload.purpose !== "page-preview" ||
      typeof payload.previewId !== "string"
    )
      throw new UnauthorizedException("Invalid preview link.");
    const record = await this.prisma.pagePreview.findUnique({
      where: { id: payload.previewId },
    });
    if (!record || record.expiresAt <= new Date())
      throw new UnauthorizedException("Preview link expired.");
    const session = await this.prisma.authSession.findUnique({
      where: { id: record.sessionId },
      include: { user: true },
    });
    if (
      !session ||
      session.revokedAt ||
      session.expiresAt <= new Date() ||
      session.user.deletedAt ||
      session.user.status !== "ACTIVE" ||
      !CMS_ROLES.includes(session.user.role)
    )
      throw new UnauthorizedException("Preview session expired.");
    return record.configuration;
  }

  async published(slug: string) {
    // Check the current status/revision on every request, then reuse the immutable snapshot.
    // This keeps multiple API instances coherent and makes archive/delete effective immediately.
    const page = await this.prisma.page.findFirst({
      where: { publishedSlug: slug || "home", status: "PUBLISHED" },
      select: { id: true, revision: true },
    });
    if (!page) throw new NotFoundException("Page not published.");
    const cached = this.publishedCache.get(page.id);
    if (cached?.revision === page.revision) return cached.document;
    const snapshot = await this.prisma.page.findFirst({
      where: { id: page.id, revision: page.revision, status: "PUBLISHED" },
      select: { publishedConfiguration: true },
    });
    if (!snapshot?.publishedConfiguration)
      throw new NotFoundException("Page changed. Please reload.");
    const result = JSON.parse(
      JSON.stringify(snapshot.publishedConfiguration),
    ) as PageDocument;
    result.sections = result.sections.filter((s) => s.isVisible);
    const visibleNavigation = (
      nodes: PageDocument["navigation"],
    ): PageDocument["navigation"] =>
      nodes
        .filter((node) => node.isVisible)
        .map((node) => ({
          ...node,
          children: visibleNavigation(node.children),
        }));
    result.navigation = visibleNavigation(result.navigation);
    if (this.publishedCache.size >= 100)
      this.publishedCache.delete(this.publishedCache.keys().next().value!);
    this.publishedCache.set(page.id, {
      revision: page.revision,
      document: result,
    });
    return result;
  }

  publishedIndex() {
    return this.prisma.page.findMany({
      where: { status: "PUBLISHED", publishedSlug: { not: null } },
      select: { publishedSlug: true },
    });
  }
  audit(id: string) {
    return this.prisma.auditLog.findMany({
      where: { pageId: id },
      orderBy: { createdAt: "desc" },
      take: 50,
    });
  }
}
