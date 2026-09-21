import { IsDateString, IsIn, IsOptional, IsString, IsUrl, MaxLength, MinLength } from "class-validator";

export const BLOG_STATUSES = ["DRAFT", "PUBLISHED", "ARCHIVED"] as const;
export type BlogStatus = (typeof BLOG_STATUSES)[number];

export class CreateBlogPostDto {
  @IsString() @MinLength(3) @MaxLength(220) title!: string;
  @IsString() @MinLength(2) @MaxLength(220) slug!: string;
  @IsOptional() @IsString() @MaxLength(500) excerpt?: string;
  @IsString() @MinLength(1) content!: string;
  @IsOptional() @IsUrl({ require_tld: false }) coverImageUrl?: string;
  @IsOptional() @IsIn(BLOG_STATUSES) status?: BlogStatus;
  @IsOptional() @IsDateString() publishedAt?: string;
}

export class UpdateBlogPostDto {
  @IsOptional() @IsString() @MinLength(3) @MaxLength(220) title?: string;
  @IsOptional() @IsString() @MinLength(2) @MaxLength(220) slug?: string;
  @IsOptional() @IsString() @MaxLength(500) excerpt?: string;
  @IsOptional() @IsString() @MinLength(1) content?: string;
  @IsOptional() @IsUrl({ require_tld: false }) coverImageUrl?: string;
  @IsOptional() @IsIn(BLOG_STATUSES) status?: BlogStatus;
  @IsOptional() @IsDateString() publishedAt?: string;
}
