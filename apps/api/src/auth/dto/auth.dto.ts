import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AdminLoginDto {
  @ApiProperty({ example: "admin@go2abroad.local" })
  @IsEmail() email!: string;
  @ApiProperty({ example: "AdminPassword123!", minLength: 8 })
  @IsString() @IsNotEmpty() password!: string;
}

export class StudentRegisterDto {
  @ApiProperty({ example: "student@go2abroad.local" })
  @IsEmail() email!: string;
  @ApiProperty({ example: "StudentPassword123!", minLength: 8 })
  @IsString() @MinLength(8) password!: string;
  @ApiProperty({ example: "Demo Student" })
  @IsString() @IsNotEmpty() name!: string;
}

export class StudentLoginDto extends AdminLoginDto {}

export class ForgotPasswordDto {
  @ApiProperty({ example: "student@go2abroad.local" })
  @IsEmail() email!: string;
}

export class ResetPasswordDto {
  @ApiProperty({ example: "reset-token-from-email" })
  @IsString() @IsNotEmpty() token!: string;
  @ApiProperty({ example: "NewPassword123!", minLength: 8 })
  @IsString() @MinLength(8) newPassword!: string;
}

export class LogoutDto {
  @ApiProperty({ example: "refresh-token-from-login-response" })
  @IsString() @IsNotEmpty() refreshToken!: string;
}
