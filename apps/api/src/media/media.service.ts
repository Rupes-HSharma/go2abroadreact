import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { randomUUID } from "node:crypto";
import sharp from "sharp";
import { PrismaService } from "../prisma.service";
import { FileStorage } from "./storage";

@Injectable()
export class MediaService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: FileStorage,
  ) {}
  async list(q: string, kind: string, offset: number) {
    const where = {
      name: { contains: q.slice(0, 100) },
      ...(kind === "image"
        ? { mimeType: { startsWith: "image/" } }
        : kind === "video"
          ? { mimeType: { startsWith: "video/" } }
          : kind === "file"
            ? { NOT: { mimeType: { startsWith: "image/" } } }
            : {}),
    };
    const [items, total] = await this.prisma.$transaction([
      this.prisma.media.findMany({
        where,
        take: 24,
        skip: offset,
        orderBy: { createdAt: "desc" },
      }),
      this.prisma.media.count({ where }),
    ]);
    return {
      items: items.map((m) => ({ ...m, url: "/uploads/cms/" + m.storageKey })),
      total,
    };
  }
  async upload(file: Express.Multer.File | undefined, actorId: string) {
    if (!file) throw new BadRequestException("Choose a file.");
    let buffer = file.buffer;
    let extension: string;
    let mimeType: string;
    if (
      ["image/png", "image/jpeg", "image/webp", "image/gif"].includes(
        file.mimetype,
      )
    ) {
      try {
        buffer = await sharp(buffer, { limitInputPixels: 20000000 })
          .rotate()
          .webp({ quality: 90 })
          .toBuffer();
      } catch {
        throw new BadRequestException(
          "This image is invalid or exceeds 20 megapixels.",
        );
      }
      extension = "webp";
      mimeType = "image/webp";
    } else if (
      file.mimetype === "application/pdf" &&
      buffer.subarray(0, 5).toString() === "%PDF-"
    ) {
      extension = "pdf";
      mimeType = file.mimetype;
    } else if (
      file.mimetype === "video/mp4" &&
      buffer.subarray(4, 8).toString() === "ftyp"
    ) {
      extension = "mp4";
      mimeType = file.mimetype;
    } else if (
      file.mimetype === "video/webm" &&
      buffer.subarray(0, 4).toString("hex") === "1a45dfa3"
    ) {
      extension = "webm";
      mimeType = file.mimetype;
    } else if (file.mimetype === "text/plain" && !buffer.includes(0)) {
      extension = "txt";
      mimeType = file.mimetype;
    } else {
      throw new BadRequestException(
        "Use PNG, JPEG, WebP, GIF, MP4, WebM, PDF or a text document.",
      );
    }
    const storageKey = randomUUID() + "." + extension;
    await this.storage.write(storageKey, buffer);
    try {
      const media = await this.prisma.media.create({
        data: {
          storageKey,
          name: file.originalname.slice(0, 200),
          size: buffer.length,
          mimeType,
          createdBy: actorId,
        },
      });
      return { ...media, url: "/uploads/cms/" + storageKey };
    } catch (e) {
      await this.storage.delete(storageKey);
      throw e;
    }
  }
  async remove(id: string) {
    const media = await this.prisma.media.findUnique({ where: { id } });
    if (!media) throw new NotFoundException("Media not found.");
    const pattern = "%" + media.storageKey + "%";
    const references = await this.prisma.$queryRaw<{ used: boolean }[]>`
      SELECT EXISTS(
        SELECT 1 FROM page_sections WHERE data::text LIKE ${pattern}
        UNION ALL SELECT 1 FROM pages WHERE "publishedConfiguration"::text LIKE ${pattern} OR "ogImage" LIKE ${pattern}
        UNION ALL SELECT 1 FROM page_versions WHERE configuration::text LIKE ${pattern}
        UNION ALL SELECT 1 FROM page_previews WHERE configuration::text LIKE ${pattern} AND "expiresAt" > NOW()
      ) AS used`;
    if (references[0]?.used)
      throw new ConflictException(
        "This file is used by a page, preview or saved version.",
      );
    await this.prisma.media.delete({ where: { id } });
    await this.storage.delete(media.storageKey);
    return { deleted: true };
  }
}
