import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString, IsUrl } from "class-validator";

export class UpdateWebsiteSettingsDto {
  @ApiPropertyOptional({ example: "Go2Abroad" }) @IsOptional() @IsString() siteName?: string;
  @ApiPropertyOptional({ example: "Connecting Dreams" }) @IsOptional() @IsString() slogan?: string;
  @ApiPropertyOptional({ example: "/uploads/logo.svg" }) @IsOptional() @IsString() logoUrl?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() logoLightUrl?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() faviconUrl?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() primaryColor?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() secondaryColor?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() footerTitle?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() footerDescription?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() copyrightText?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() seoTitle?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() seoDescription?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() seoKeywords?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() ogImageUrl?: string;
  @ApiPropertyOptional({ example: "hello@go2abroad.com" }) @IsOptional() @IsEmail() contactEmail?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() contactPhone?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() whatsappNumber?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() address?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() officeHours?: string;
  @ApiPropertyOptional({ example: { facebook: "https://facebook.com/go2abroad" } }) @IsOptional() socialLinks?: Record<string, string>;
  @ApiPropertyOptional() @IsOptional() @IsUrl() googleMapsUrl?: string;
  @ApiPropertyOptional() @IsOptional() @IsUrl() privacyPolicyUrl?: string;
  @ApiPropertyOptional() @IsOptional() @IsUrl() termsUrl?: string;
}
