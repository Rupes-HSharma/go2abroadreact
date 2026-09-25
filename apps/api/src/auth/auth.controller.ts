import { Body, Controller, Get, HttpCode, Post, Req, UseGuards } from "@nestjs/common";
import { CmsGuard, CmsRequest } from "./cms.guard";
import { AuthService } from "./auth.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { AdminLoginDto, ForgotPasswordDto, LogoutDto, ResetPasswordDto, StudentLoginDto, StudentRegisterDto } from "./dto/auth.dto";

@Controller("auth")
@ApiTags("Authentication")
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Get("cms-session") @UseGuards(CmsGuard)
  session(@Req() req: CmsRequest) { return req.actor; }

  @Post("refresh") @HttpCode(200)
  refresh(@Body() dto: LogoutDto) { return this.auth.refresh(dto.refreshToken); }

  @Post("admin/login")
  @ApiOperation({ summary: "Admin login" })
  adminLogin(@Body() dto: AdminLoginDto) { return this.auth.login(dto, ["SUPER_ADMIN", "ADMIN", "CONTENT_MANAGER", "SEO_MANAGER", "COUNSELLOR", "EDITOR"]); }

  @Post("student/register")
  @ApiOperation({ summary: "Register a student" })
  studentRegister(@Body() dto: StudentRegisterDto) { return this.auth.registerStudent(dto); }

  @Post("student/login")
  @ApiOperation({ summary: "Student login" })
  studentLogin(@Body() dto: StudentLoginDto) { return this.auth.login(dto, ["STUDENT"]); }

  @Post("logout")
  @ApiOperation({ summary: "Revoke a refresh token" })
  @HttpCode(204)
  async logout(@Body() dto: LogoutDto): Promise<void> { await this.auth.logout(dto.refreshToken); }

  @Post("password/forgot")
  @ApiOperation({ summary: "Request a password reset" })
  forgotPassword(@Body() dto: ForgotPasswordDto) { return this.auth.requestPasswordReset(dto.email); }

  @Post("password/reset")
  @ApiOperation({ summary: "Reset a password" })
  resetPassword(@Body() dto: ResetPasswordDto) { return this.auth.resetPassword(dto.token, dto.newPassword); }
}
