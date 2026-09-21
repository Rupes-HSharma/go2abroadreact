import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { BlogPostStatus, Prisma } from "@prisma/client";
import { PrismaService } from "../prisma.service";
import { CreateBlogPostDto, UpdateBlogPostDto } from "./blog.dto";

const blogInclude = { author: { select: { id: true, name: true, email: true } } } as const;

@Injectable()
export class BlogService {
  constructor(private readonly prisma: PrismaService) {}

  listForAdmin() {
    return this.prisma.blogPost.findMany({ include: blogInclude, orderBy: { createdAt: "desc" } });
  }

  async create(dto: CreateBlogPostDto, authorId: string) {
    try {
      return await this.prisma.blogPost.create({
        data: {
          title: dto.title.trim(), slug: dto.slug.trim().toLowerCase(), excerpt: dto.excerpt?.trim(),
          content: dto.content, coverImageUrl: dto.coverImageUrl, status: dto.status,
          publishedAt: dto.publishedAt ? new Date(dto.publishedAt) : dto.status === "PUBLISHED" ? new Date() : undefined,
          authorId,
        }, include: blogInclude,
      });
    } catch (error) { this.rethrowConflict(error); }
  }

  async update(id: string, dto: UpdateBlogPostDto) {
    await this.ensureExists(id);
    try {
      return await this.prisma.blogPost.update({
        where: { id },
        data: {
          ...(dto.title !== undefined ? { title: dto.title.trim() } : {}),
          ...(dto.slug !== undefined ? { slug: dto.slug.trim().toLowerCase() } : {}),
          ...(dto.excerpt !== undefined ? { excerpt: dto.excerpt.trim() } : {}),
          ...(dto.content !== undefined ? { content: dto.content } : {}),
          ...(dto.coverImageUrl !== undefined ? { coverImageUrl: dto.coverImageUrl } : {}),
          ...(dto.status !== undefined ? { status: dto.status } : {}),
          ...(dto.publishedAt !== undefined ? { publishedAt: new Date(dto.publishedAt) } : {}),
        }, include: blogInclude,
      });
    } catch (error) { this.rethrowConflict(error); }
  }

  async remove(id: string) {
    await this.ensureExists(id);
    await this.prisma.blogPost.delete({ where: { id } });
    return { deleted: true };
  }

  publicList() {
    return this.prisma.blogPost.findMany({
      where: { status: BlogPostStatus.PUBLISHED, publishedAt: { lte: new Date() } },
      orderBy: { publishedAt: "desc" },
      select: { id: true, title: true, slug: true, excerpt: true, coverImageUrl: true, publishedAt: true },
    });
  }

  publicPost(slug: string) {
    return this.prisma.blogPost.findFirst({
      where: { slug, status: BlogPostStatus.PUBLISHED, publishedAt: { lte: new Date() } }, include: blogInclude,
    });
  }

  private async ensureExists(id: string) {
    const post = await this.prisma.blogPost.findUnique({ where: { id } });
    if (!post) throw new NotFoundException("Blog post not found.");
    return post;
  }

  private rethrowConflict(error: unknown): never {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      throw new ConflictException("A blog post with this slug already exists.");
    }
    throw error;
  }
}
