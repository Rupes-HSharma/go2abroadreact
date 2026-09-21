import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ADMIN_ROLES, CmsGuard, CmsRoles } from "../auth/cms.guard";
import { CatalogService } from "./catalog.service";
import { CreateCourseDto, CreateFaqDto, CreateReviewDto, CreateStudentDto, CreateUniversityDto, UpdateCourseDto, UpdateFaqDto, UpdateReviewDto, UpdateStudentDto, UpdateUniversityDto } from "./catalog.dto";

@ApiTags("Catalog and Students")
@ApiBearerAuth()
@UseGuards(CmsGuard)
@Controller()
export class CatalogController {
  constructor(private readonly service: CatalogService) {}
  @Get("students") @CmsRoles(...ADMIN_ROLES, "COUNSELLOR") students() { return this.service.listStudents(); }
  @Post("students") @CmsRoles(...ADMIN_ROLES, "COUNSELLOR") createStudent(@Body() dto: CreateStudentDto) { return this.service.createStudent(dto); }
  @Patch("students/:id") @CmsRoles(...ADMIN_ROLES, "COUNSELLOR") updateStudent(@Param("id") id: string, @Body() dto: UpdateStudentDto) { return this.service.updateStudent(id, dto); }
  @Delete("students/:id") @CmsRoles(...ADMIN_ROLES, "COUNSELLOR") deleteStudent(@Param("id") id: string) { return this.service.deleteStudent(id); }
  @Get("universities") @CmsRoles(...ADMIN_ROLES) universities() { return this.service.listUniversities(); }
  @Post("universities") @CmsRoles(...ADMIN_ROLES) createUniversity(@Body() dto: CreateUniversityDto) { return this.service.createUniversity(dto); }
  @Patch("universities/:id") @CmsRoles(...ADMIN_ROLES) updateUniversity(@Param("id") id: string, @Body() dto: UpdateUniversityDto) { return this.service.updateUniversity(id, dto); }
  @Delete("universities/:id") @CmsRoles(...ADMIN_ROLES) deleteUniversity(@Param("id") id: string) { return this.service.deleteUniversity(id); }
  @Get("courses") @CmsRoles(...ADMIN_ROLES) courses() { return this.service.listCourses(); }
  @Post("courses") @CmsRoles(...ADMIN_ROLES) createCourse(@Body() dto: CreateCourseDto) { return this.service.createCourse(dto); }
  @Patch("courses/:id") @CmsRoles(...ADMIN_ROLES) updateCourse(@Param("id") id: string, @Body() dto: UpdateCourseDto) { return this.service.updateCourse(id, dto); }
  @Delete("courses/:id") @CmsRoles(...ADMIN_ROLES) deleteCourse(@Param("id") id: string) { return this.service.deleteCourse(id); }
  @Get("faqs") @CmsRoles(...ADMIN_ROLES) faqs() { return this.service.listFaqs(); }
  @Post("faqs") @CmsRoles(...ADMIN_ROLES) createFaq(@Body() dto: CreateFaqDto) { return this.service.createFaq(dto); }
  @Patch("faqs/:id") @CmsRoles(...ADMIN_ROLES) updateFaq(@Param("id") id: string, @Body() dto: UpdateFaqDto) { return this.service.updateFaq(id, dto); }
  @Delete("faqs/:id") @CmsRoles(...ADMIN_ROLES) deleteFaq(@Param("id") id: string) { return this.service.deleteFaq(id); }
  @Get("reviews") @CmsRoles(...ADMIN_ROLES) reviews() { return this.service.listReviews(); }
  @Post("reviews") @CmsRoles(...ADMIN_ROLES) createReview(@Body() dto: CreateReviewDto) { return this.service.createReview(dto); }
  @Patch("reviews/:id") @CmsRoles(...ADMIN_ROLES) updateReview(@Param("id") id: string, @Body() dto: UpdateReviewDto) { return this.service.updateReview(id, dto); }
  @Delete("reviews/:id") @CmsRoles(...ADMIN_ROLES) deleteReview(@Param("id") id: string) { return this.service.deleteReview(id); }
}
