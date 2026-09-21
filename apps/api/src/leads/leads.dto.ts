import { IsEmail, IsIn, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export const leadStatuses = ["NEW", "CONTACTED", "QUALIFIED", "CONVERTED", "LOST"] as const;
export type LeadStatusValue = (typeof leadStatuses)[number];

export class CreateLeadDto {
  @IsString() @MinLength(2) @MaxLength(120) firstName!: string;
  @IsEmail() @MaxLength(180) email!: string;
  @IsString() @MinLength(5) @MaxLength(40) phone!: string;
  @IsOptional() @IsString() @MaxLength(100) destination?: string;
  @IsOptional() @IsString() @MaxLength(150) interest?: string;
  @IsString() @MinLength(5) @MaxLength(4000) message!: string;
}

export class UpdateLeadDto {
  @IsIn(leadStatuses) status!: LeadStatusValue;
}
