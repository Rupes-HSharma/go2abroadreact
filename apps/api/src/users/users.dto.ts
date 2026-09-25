import { IsEmail, IsIn, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export const MANAGED_ROLES = ["ADMIN", "COUNSELLOR", "STUDENT"] as const;
export type ManagedRole = (typeof MANAGED_ROLES)[number];

export class CreateUserDto {
  @IsEmail() email!: string;
  @IsString() @MinLength(2) @MaxLength(120) name!: string;
  @IsOptional() @IsString() @MaxLength(40) phone?: string;
  @IsString() @MinLength(8) password!: string;
  @IsIn(MANAGED_ROLES) role!: ManagedRole;
}

export class UpdateUserDto {
  @IsOptional() @IsEmail() email?: string;
  @IsOptional() @IsString() @MinLength(2) @MaxLength(120) name?: string;
  @IsOptional() @IsString() @MaxLength(40) phone?: string;
  @IsOptional() @IsString() @MinLength(8) password?: string;
  @IsOptional() @IsIn(MANAGED_ROLES) role?: ManagedRole;
  @IsOptional() @IsIn(["ACTIVE", "INACTIVE", "SUSPENDED"]) status?: "ACTIVE" | "INACTIVE" | "SUSPENDED";
}
