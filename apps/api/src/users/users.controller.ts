import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ADMIN_ROLES, CmsGuard, CmsRoles } from "../auth/cms.guard";
import { CreateUserDto, UpdateUserDto } from "./users.dto";
import { UsersService } from "./users.service";

@ApiTags("Users")
@ApiBearerAuth()
@UseGuards(CmsGuard)
@CmsRoles(...ADMIN_ROLES)
@Controller("users")
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get()
  list() { return this.service.list(); }

  @Post()
  create(@Body() dto: CreateUserDto) { return this.service.create(dto); }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateUserDto) { return this.service.update(id, dto); }

  @Delete(":id")
  remove(@Param("id") id: string) { return this.service.remove(id); }
}
