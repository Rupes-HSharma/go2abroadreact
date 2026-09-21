import { IsBoolean, IsEmail, IsIn, IsOptional, IsString, IsUrl, MaxLength, MinLength } from "class-validator";

export class CreateStudentDto {
  @IsEmail() email!: string;
  @IsString() @MinLength(2) @MaxLength(120) name!: string;
  @IsOptional() @IsString() @MaxLength(40) phone?: string;
  @IsString() @MinLength(8) password!: string;
}

export class UpdateStudentDto {
  @IsOptional() @IsString() @MinLength(2) @MaxLength(120) name?: string;
  @IsOptional() @IsString() @MaxLength(40) phone?: string;
  @IsOptional() @IsIn(["ACTIVE", "INACTIVE", "SUSPENDED"]) status?: "ACTIVE" | "INACTIVE" | "SUSPENDED";
  @IsOptional() @IsString() @MinLength(8) password?: string;
}

export class CreateUniversityDto {
  @IsString() @MinLength(2) @MaxLength(160) name!: string;
  @IsString() @MinLength(2) @MaxLength(180) slug!: string;
  @IsString() @MinLength(2) @MaxLength(100) country!: string;
  @IsOptional() @IsString() @MaxLength(100) city?: string;
  @IsOptional() @IsUrl() website?: string;
  @IsOptional() @IsString() @MaxLength(5000) description?: string;
  @IsOptional() @IsString() logoUrl?: string;
  @IsOptional() @IsBoolean() isPublished?: boolean;
}

export class UpdateUniversityDto extends CreateUniversityDto {}

export class CreateCourseDto {
  @IsString() @MinLength(2) @MaxLength(180) title!: string;
  @IsString() @MinLength(2) @MaxLength(180) slug!: string;
  @IsString() @MinLength(2) @MaxLength(80) level!: string;
  @IsOptional() @IsString() @MaxLength(120) field?: string;
  @IsOptional() @IsString() @MaxLength(80) duration?: string;
  @IsOptional() @IsString() @MaxLength(5000) description?: string;
  @IsOptional() @IsBoolean() isPublished?: boolean;
  @IsOptional() @IsString() universityId?: string;
}

export class UpdateCourseDto extends CreateCourseDto {}

export class CreateFaqDto {
  @IsString() @MinLength(3) @MaxLength(300) question!: string;
  @IsString() @MinLength(3) @MaxLength(5000) answer!: string;
  @IsOptional() @IsString() @MaxLength(100) category?: string;
  @IsOptional() sortOrder?: number;
  @IsOptional() @IsBoolean() isPublished?: boolean;
}

export class UpdateFaqDto extends CreateFaqDto {}

export class CreateReviewDto {
  @IsString() @MinLength(2) @MaxLength(120) name!: string;
  @IsOptional() @IsString() @MaxLength(120) role?: string;
  @IsString() @MinLength(5) @MaxLength(2000) quote!: string;
  @IsOptional() rating?: number;
  @IsOptional() @IsString() avatarUrl?: string;
  @IsOptional() @IsBoolean() isPublished?: boolean;
}

export class UpdateReviewDto extends CreateReviewDto {}
