import { Body, Controller, Delete, Get, Patch, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname, join } from "node:path";
import { randomUUID } from "node:crypto";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { ADMIN_ROLES, CmsGuard, CmsRoles } from "../auth/cms.guard";
import { SettingsService } from "./settings.service";
import { UpdateWebsiteSettingsDto } from "./settings.dto";

@ApiTags("Website Settings")
@ApiBearerAuth()
@Controller("settings/website")
export class SettingsController {
  constructor(private readonly service: SettingsService) {}
  @Get() @ApiOperation({ summary: "Get website settings" }) get() { return this.service.get(); }
  @Post() @UseGuards(CmsGuard) @CmsRoles(...ADMIN_ROLES) @ApiOperation({ summary: "Create website settings" }) create(@Body() dto: UpdateWebsiteSettingsDto) { return this.service.create(dto); }
  @Patch() @UseGuards(CmsGuard) @CmsRoles(...ADMIN_ROLES) @ApiOperation({ summary: "Update website settings" }) update(@Body() dto: UpdateWebsiteSettingsDto) { return this.service.update(dto); }
  @Delete() @UseGuards(CmsGuard) @CmsRoles(...ADMIN_ROLES) @ApiOperation({ summary: "Delete website settings" }) delete() { return this.service.delete(); }
  @Post("upload")
  @UseInterceptors(FileInterceptor("file", { storage: diskStorage({ destination: join(__dirname, "../uploads"), filename: (_req, file, cb) => cb(null, `${randomUUID()}${extname(file.originalname).toLowerCase()}`) }), limits: { fileSize: 5 * 1024 * 1024 }, fileFilter: (_req, file, cb) => cb(null, ["image/png", "image/jpeg", "image/svg+xml", "image/webp", "image/x-icon"].includes(file.mimetype)) }))
  @UseGuards(CmsGuard)
  @CmsRoles(...ADMIN_ROLES)
  @ApiOperation({ summary: "Upload a website image" })
  upload(@UploadedFile() file: Express.Multer.File) { return { url: `/uploads/${file.filename}` }; }
}
