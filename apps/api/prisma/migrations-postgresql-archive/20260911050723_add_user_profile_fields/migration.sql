ALTER TYPE "UserRole" ADD VALUE IF NOT EXISTS 'SUPER_ADMIN';
ALTER TYPE "UserRole" ADD VALUE IF NOT EXISTS 'CONTENT_MANAGER';
ALTER TYPE "UserRole" ADD VALUE IF NOT EXISTS 'SEO_MANAGER';
ALTER TYPE "UserRole" ADD VALUE IF NOT EXISTS 'EDITOR';
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'SUSPENDED');
ALTER TABLE "User"
  ADD COLUMN "passwordHash" TEXT, ADD COLUMN "firstName" TEXT,
  ADD COLUMN "lastName" TEXT, ADD COLUMN "phone" TEXT,
  ADD COLUMN "avatarUrl" TEXT, ADD COLUMN "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
  ADD COLUMN "emailVerifiedAt" TIMESTAMP(3), ADD COLUMN "lastLoginAt" TIMESTAMP(3),
  ADD COLUMN "timezone" TEXT DEFAULT 'UTC', ADD COLUMN "locale" TEXT DEFAULT 'en',
  ADD COLUMN "deletedAt" TIMESTAMP(3);
CREATE INDEX "User_role_idx" ON "User"("role");
CREATE INDEX "User_status_idx" ON "User"("status");
CREATE INDEX "User_createdAt_idx" ON "User"("createdAt");
CREATE TABLE "student_profiles" (
  "id" TEXT NOT NULL, "userId" TEXT NOT NULL, "dateOfBirth" TIMESTAMP(3),
  "gender" TEXT, "nationality" TEXT, "passportNumber" TEXT,
  "addressLine1" TEXT, "addressLine2" TEXT, "city" TEXT, "state" TEXT,
  "postalCode" TEXT, "country" TEXT, "highestEducation" TEXT,
  "graduationYear" INTEGER, "englishTest" TEXT, "englishTestScore" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "student_profiles_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "student_profiles_userId_key" ON "student_profiles"("userId");
CREATE INDEX "student_profiles_country_idx" ON "student_profiles"("country");
ALTER TABLE "student_profiles" ADD CONSTRAINT "student_profiles_userId_fkey"
  FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

