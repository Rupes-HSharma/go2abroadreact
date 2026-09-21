import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ADMIN_ROLES, CmsGuard, CmsRequest, CmsRoles } from "../auth/cms.guard";
import { CreateBlogPostDto, UpdateBlogPostDto } from "./blog.dto";
import { BlogService } from "./blog.service";

@ApiTags("Blog")
@ApiBearerAuth()
@UseGuards(CmsGuard)
@CmsRoles(...ADMIN_ROLES)
@Controller("admin/blog")
export class BlogController {
  constructor(private readonly service: BlogService) {}
  @Get() list() { return this.service.listForAdmin(); }
  @Post() create(@Body() dto: CreateBlogPostDto, @Req() req: CmsRequest) { return this.service.create(dto, req.actor.id); }
  @Patch(":id") update(@Param("id") id: string, @Body() dto: UpdateBlogPostDto) { return this.service.update(id, dto); }
  @Delete(":id") remove(@Param("id") id: string) { return this.service.remove(id); }
}

@ApiTags("Public Blog")
@Controller("blog")
export class PublicBlogController {
  constructor(private readonly service: BlogService) {}
  @Get() list() { return this.service.publicList(); }
  @Get(":slug") post(@Param("slug") slug: string) { return this.service.publicPost(slug); }
}
