CREATE TABLE "universities" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "country" TEXT NOT NULL,
  "city" TEXT,
  "website" TEXT,
  "description" TEXT,
  "logoUrl" TEXT,
  "isPublished" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "universities_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "universities_slug_key" ON "universities"("slug");
CREATE INDEX "universities_country_idx" ON "universities"("country");
CREATE INDEX "universities_isPublished_idx" ON "universities"("isPublished");

CREATE TABLE "courses" (
  "id" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "level" TEXT NOT NULL,
  "field" TEXT,
  "duration" TEXT,
  "description" TEXT,
  "isPublished" BOOLEAN NOT NULL DEFAULT false,
  "universityId" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "courses_slug_key" ON "courses"("slug");
CREATE INDEX "courses_level_idx" ON "courses"("level");
CREATE INDEX "courses_universityId_idx" ON "courses"("universityId");
CREATE INDEX "courses_isPublished_idx" ON "courses"("isPublished");
ALTER TABLE "courses" ADD CONSTRAINT "courses_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "universities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

