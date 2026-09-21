import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { PrismaService } from "../prisma.service";
import { CreateCourseDto, CreateFaqDto, CreateReviewDto, CreateStudentDto, CreateUniversityDto, UpdateCourseDto, UpdateFaqDto, UpdateReviewDto, UpdateStudentDto, UpdateUniversityDto } from "./catalog.dto";

@Injectable()
export class CatalogService {
  constructor(private readonly prisma: PrismaService) {}

  listStudents() {
    return this.prisma.user.findMany({ where: { role: "STUDENT", deletedAt: null }, orderBy: { createdAt: "desc" }, select: { id: true, email: true, name: true, phone: true, status: true, createdAt: true, studentProfile: true } });
  }

  async createStudent(dto: CreateStudentDto) {
    const email = dto.email.toLowerCase().trim();
    if (await this.prisma.user.findUnique({ where: { email } })) throw new ConflictException("Email is already registered.");
    return this.prisma.user.create({ data: { email, name: dto.name.trim(), phone: dto.phone?.trim(), passwordHash: await bcrypt.hash(dto.password, 12), role: "STUDENT" }, select: { id: true, email: true, name: true, phone: true, status: true, createdAt: true } });
  }

  async updateStudent(id: string, dto: UpdateStudentDto) {
    const student = await this.prisma.user.findFirst({ where: { id, role: "STUDENT", deletedAt: null } });
    if (!student) throw new NotFoundException("Student not found.");
    return this.prisma.user.update({ where: { id }, data: { name: dto.name?.trim(), phone: dto.phone?.trim(), status: dto.status, ...(dto.password ? { passwordHash: await bcrypt.hash(dto.password, 12) } : {}) }, select: { id: true, email: true, name: true, phone: true, status: true, createdAt: true } });
  }

  async deleteStudent(id: string) {
    const result = await this.prisma.user.updateMany({ where: { id, role: "STUDENT", deletedAt: null }, data: { deletedAt: new Date(), status: "INACTIVE" } });
    if (!result.count) throw new NotFoundException("Student not found.");
    return { deleted: true };
  }

  listUniversities() { return this.prisma.university.findMany({ include: { _count: { select: { courses: true } } }, orderBy: { createdAt: "desc" } }); }
  createUniversity(dto: CreateUniversityDto) { return this.prisma.university.create({ data: dto }); }
  async updateUniversity(id: string, dto: UpdateUniversityDto) { await this.ensureUniversity(id); return this.prisma.university.update({ where: { id }, data: dto }); }
  async deleteUniversity(id: string) { await this.ensureUniversity(id); await this.prisma.university.delete({ where: { id } }); return { deleted: true }; }

  listCourses() { return this.prisma.course.findMany({ include: { university: { select: { id: true, name: true } } }, orderBy: { createdAt: "desc" } }); }
  createCourse(dto: CreateCourseDto) { return this.prisma.course.create({ data: dto }); }
  async updateCourse(id: string, dto: UpdateCourseDto) { await this.ensureCourse(id); return this.prisma.course.update({ where: { id }, data: dto }); }
  async deleteCourse(id: string) { await this.ensureCourse(id); await this.prisma.course.delete({ where: { id } }); return { deleted: true }; }

  listFaqs() { return this.prisma.faq.findMany({ orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }] }); }
  createFaq(dto: CreateFaqDto) { return this.prisma.faq.create({ data: dto }); }
  async updateFaq(id: string, dto: UpdateFaqDto) { await this.ensureFaq(id); return this.prisma.faq.update({ where: { id }, data: dto }); }
  async deleteFaq(id: string) { await this.ensureFaq(id); await this.prisma.faq.delete({ where: { id } }); return { deleted: true }; }

  listReviews() { return this.prisma.review.findMany({ orderBy: { createdAt: "desc" } }); }
  createReview(dto: CreateReviewDto) { return this.prisma.review.create({ data: dto }); }
  async updateReview(id: string, dto: UpdateReviewDto) { await this.ensureReview(id); return this.prisma.review.update({ where: { id }, data: dto }); }
  async deleteReview(id: string) { await this.ensureReview(id); await this.prisma.review.delete({ where: { id } }); return { deleted: true }; }

  private async ensureUniversity(id: string) { const item = await this.prisma.university.findUnique({ where: { id } }); if (!item) throw new NotFoundException("University not found."); return item; }
  private async ensureCourse(id: string) { const item = await this.prisma.course.findUnique({ where: { id } }); if (!item) throw new NotFoundException("Course not found."); return item; }
  private async ensureFaq(id: string) { const item = await this.prisma.faq.findUnique({ where: { id } }); if (!item) throw new NotFoundException("FAQ not found."); return item; }
  private async ensureReview(id: string) { const item = await this.prisma.review.findUnique({ where: { id } }); if (!item) throw new NotFoundException("Review not found."); return item; }
}
