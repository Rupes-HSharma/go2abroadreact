import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import {
  defaultTheme,
  NavigationNode,
  navigationTreeSchema,
  themeSchema,
} from "@go2abroad/page-builder";
import { z } from "zod";
import { PrismaService } from "../prisma.service";
import { validate } from "./pages.dto";
import { CmsActor } from "../auth/cms.guard";

@Injectable()
export class SiteService {
  constructor(private readonly prisma: PrismaService) {}
  async get() {
    const [theme, rows] = await Promise.all([
      this.prisma.theme.findUnique({ where: { id: "default" } }),
      this.prisma.navigationItem.findMany({
        where: { navigationId: "default" },
        orderBy: { order: "asc" },
      }),
    ]);
    const tree = (parentId: string | null): NavigationNode[] =>
      rows
        .filter((r) => r.parentId === parentId)
        .map((r) => ({
          id: r.id,
          label: r.label,
          url: r.url,
          isVisible: r.isVisible,
          children: tree(r.id),
        }));
    return {
      theme: theme?.configuration ?? defaultTheme,
      navigation: tree(null),
    };
  }
  async save(body: unknown, actor: CmsActor) {
    const config = validate(
      z
        .object({ theme: themeSchema, navigation: navigationTreeSchema })
        .strict(),
      body,
    );
    const rows: Prisma.NavigationItemCreateManyInput[] = [];
    const flatten = (nodes: NavigationNode[], parentId: string | null) =>
      nodes.forEach((n, order) => {
        rows.push({
          id: n.id,
          navigationId: "default",
          parentId,
          label: n.label,
          url: n.url,
          isVisible: n.isVisible,
          order,
        });
        flatten(n.children, n.id);
      });
    flatten(config.navigation, null);
    await this.prisma.$transaction(async (tx) => {
      await tx.navigation.upsert({
        where: { id: "default" },
        create: { id: "default" },
        update: { updatedAt: new Date() },
      });
      await tx.navigationItem.deleteMany({
        where: { navigationId: "default" },
      });
      if (rows.length) await tx.navigationItem.createMany({ data: rows });
      await tx.theme.upsert({
        where: { id: "default" },
        create: { id: "default", configuration: config.theme },
        update: { configuration: config.theme },
      });
      await tx.auditLog.create({
        data: { actorId: actor.id, action: "site.design.update" },
      });
    });
    return this.get();
  }
}
