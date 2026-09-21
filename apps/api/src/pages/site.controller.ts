import { Body, Controller, Get, Put, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ADMIN_ROLES, CmsGuard, CmsRequest, CmsRoles, PublishPermission } from "../auth/cms.guard";
import { SiteService } from "./site.service";

@ApiTags("CMS site design")
@ApiBearerAuth()
@UseGuards(CmsGuard)
@CmsRoles(...ADMIN_ROLES)
@Controller("api/site")
export class SiteController {
  constructor(private readonly service: SiteService) {}
  @Get() get() {
    return this.service.get();
  }
  @Put() @PublishPermission() save(
    @Body() body: unknown,
    @Req() req: CmsRequest,
  ) {
    return this.service.save(body, req.actor);
  }
}
