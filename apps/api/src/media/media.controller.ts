import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from "@nestjs/swagger";
import { z } from "zod";
import { ADMIN_ROLES, CmsGuard, CmsRequest, CmsRoles, PublishPermission } from "../auth/cms.guard";
import { validate } from "../pages/pages.dto";
import { MediaService } from "./media.service";

@ApiTags("Media")
@ApiBearerAuth()
@UseGuards(CmsGuard)
@CmsRoles(...ADMIN_ROLES)
@Controller("api/media")
export class MediaController {
  constructor(private readonly service: MediaService) {}
  @Get() list(
    @Query("q") q = "",
    @Query("kind") kind = "",
    @Query("offset") offset = "0",
  ) {
    return this.service.list(
      validate(z.string().max(100), q),
      validate(z.enum(["", "image", "video", "file"]), kind),
      validate(z.coerce.number().int().min(0).max(100000), offset),
    );
  }
  @Post()
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    schema: {
      type: "object",
      properties: { file: { type: "string", format: "binary" } },
    },
  })
  @UseInterceptors(
    FileInterceptor("file", {
      limits: { fileSize: 20 * 1024 * 1024, files: 1 },
    }),
  )
  upload(
    @UploadedFile() file: Express.Multer.File | undefined,
    @Req() req: CmsRequest,
  ) {
    return this.service.upload(file, req.actor.id);
  }
  @Delete(":id")
  @PublishPermission()
  remove(@Param("id") id: string) {
    return this.service.remove(id);
  }
}
