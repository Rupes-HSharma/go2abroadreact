import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Headers,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";
import { z } from "zod";
import { ADMIN_ROLES, CmsGuard, CmsRequest, CmsRoles, PublishPermission } from "../auth/cms.guard";
import { validate } from "./pages.dto";
import { PagesService } from "./pages.service";
import { ConfigurationBody, RevisionBody, SectionBody } from "./pages.swagger";

@ApiTags("Pages")
@ApiBearerAuth()
@UseGuards(CmsGuard)
@CmsRoles(...ADMIN_ROLES)
@Controller("api/pages")
export class PagesController {
  constructor(private readonly service: PagesService) {}
  @Get() list(@Query("q") q = "", @Query("offset") offset = "0") {
    return this.service.list(
      validate(z.string().max(100), q),
      validate(z.coerce.number().int().min(0).max(100000), offset),
    );
  }
  @Get(":id") get(@Param("id") id: string) {
    return this.service.get(id);
  }
  @Post()
  @ApiBody({
    schema: {
      type: "object",
      required: ["title", "slug"],
      properties: {
        title: { type: "string", example: "About" },
        slug: { type: "string", example: "about" },
      },
    },
  })
  create(@Body() dto: unknown, @Req() req: CmsRequest) {
    return this.service.create(dto, req.actor);
  }
  @Patch(":id") update(
    @Param("id") id: string,
    @Body() dto: unknown,
    @Req() req: CmsRequest,
  ) {
    return this.service.update(id, dto, req.actor);
  }
  @Patch(":id/draft")
  @ConfigurationBody(true)
  @ApiOperation({
    summary:
      "Atomically save the full component tree and SEO. Requires current revision.",
  })
  save(@Param("id") id: string, @Body() dto: unknown, @Req() req: CmsRequest) {
    return this.service.save(id, dto, req.actor);
  }
  @Delete(":id") @PublishPermission() remove(
    @Param("id") id: string,
    @Req() req: CmsRequest,
  ) {
    return this.service.remove(id, req.actor);
  }
  @Get(":pageId/sections") sections(@Param("pageId") id: string) {
    return this.service.sections(id);
  }
  @Post(":pageId/sections") @SectionBody() createSection(
    @Param("pageId") id: string,
    @Body() dto: unknown,
    @Req() req: CmsRequest,
  ) {
    return this.service.createSection(id, dto, req.actor);
  }
  @Patch(":pageId/sections/reorder") @ApiBody({ schema: { type: "object", required: ["sectionIds"], properties: { sectionIds: { type: "array", items: { type: "string", format: "uuid" } } } } }) reorder(
    @Param("pageId") id: string,
    @Body() dto: unknown,
    @Req() req: CmsRequest,
  ) {
    return this.service.reorder(id, dto, req.actor);
  }
  @Post(":id/publish") @PublishPermission() @RevisionBody() publish(
    @Param("id") id: string,
    @Body() dto: unknown,
    @Req() req: CmsRequest,
  ) {
    return this.service.publish(id, dto, req.actor);
  }
  @Post(":id/archive") @PublishPermission() archive(
    @Param("id") id: string,
    @Req() req: CmsRequest,
  ) {
    return this.service.archive(id, req.actor);
  }
  @Post(":id/duplicate") duplicate(
    @Param("id") id: string,
    @Req() req: CmsRequest,
  ) {
    return this.service.duplicate(id, req.actor);
  }
  @Post(":id/preview") @ConfigurationBody() preview(
    @Param("id") id: string,
    @Body() dto: unknown,
    @Req() req: CmsRequest,
  ) {
    return this.service.preview(id, dto, req.actor);
  }
  @Get(":id/versions") versions(@Param("id") id: string) {
    return this.service.versions(id);
  }
  @Get(":id/versions/:version") version(
    @Param("id") id: string,
    @Param("version", ParseIntPipe) version: number,
  ) {
    return this.service.version(id, version);
  }
  @Post(":id/versions/:version/restore") @RevisionBody() restore(
    @Param("id") id: string,
    @Param("version", ParseIntPipe) version: number,
    @Body() dto: unknown,
    @Req() req: CmsRequest,
  ) {
    return this.service.restore(id, version, dto, req.actor);
  }
  @Get(":id/audit") audit(@Param("id") id: string) {
    return this.service.audit(id);
  }
}

@ApiTags("Page Sections")
@ApiBearerAuth()
@UseGuards(CmsGuard)
@CmsRoles(...ADMIN_ROLES)
@Controller("api/sections")
export class SectionsController {
  constructor(private readonly service: PagesService) {}
  @Patch(":id") @SectionBody() update(
    @Param("id") id: string,
    @Body() dto: unknown,
    @Req() req: CmsRequest,
  ) {
    return this.service.updateSection(id, dto, req.actor);
  }
  @Delete(":id") remove(@Param("id") id: string, @Req() req: CmsRequest) {
    return this.service.removeSection(id, req.actor);
  }
}

@ApiTags("Public pages")
@Controller("api/public")
export class PublicPagesController {
  constructor(private readonly service: PagesService) {}
  @Get("page")
  @Header("Cache-Control", "no-store")
  page(@Query("slug") slug = "home") {
    return this.service.published(validate(z.string().max(180), slug));
  }
  @Get("pages")
  @Header("Cache-Control", "no-store")
  index() {
    return this.service.publishedIndex();
  }
  @Get("preview")
  @Header("Cache-Control", "private, no-store")
  @Header("X-Robots-Tag", "noindex, nofollow")
  preview(@Headers("authorization") authorization = "") {
    return this.service.previewDocument(authorization.replace(/^Bearer /, ""));
  }
}
