CREATE TYPE "PageStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');
CREATE TABLE "pages" (
  "id" TEXT NOT NULL, "title" TEXT NOT NULL, "slug" TEXT NOT NULL,
  "status" "PageStatus" NOT NULL DEFAULT 'DRAFT', "metaTitle" TEXT,
  "metaDescription" TEXT, "canonicalUrl" TEXT, "ogTitle" TEXT,
  "ogDescription" TEXT, "ogImage" TEXT, "robots" TEXT DEFAULT 'index,follow',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL, CONSTRAINT "pages_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "pages_slug_key" ON "pages"("slug");
CREATE INDEX "pages_status_idx" ON "pages"("status");
CREATE TABLE "page_sections" (
  "id" TEXT NOT NULL, "pageId" TEXT NOT NULL, "type" TEXT NOT NULL,
  "order" INTEGER NOT NULL, "data" JSONB NOT NULL, "settings" JSONB,
  "isVisible" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL, CONSTRAINT "page_sections_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "page_sections_pageId_order_idx" ON "page_sections"("pageId", "order");
CREATE INDEX "page_sections_type_idx" ON "page_sections"("type");
ALTER TABLE "page_sections" ADD CONSTRAINT "page_sections_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "pages"("id") ON DELETE CASCADE ON UPDATE CASCADE;
CREATE TABLE "page_versions" (
  "id" TEXT NOT NULL, "pageId" TEXT NOT NULL, "version" INTEGER NOT NULL,
  "configuration" JSONB NOT NULL, "createdBy" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "publishedAt" TIMESTAMP(3),
  CONSTRAINT "page_versions_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "page_versions_pageId_version_key" ON "page_versions"("pageId", "version");
CREATE INDEX "page_versions_pageId_idx" ON "page_versions"("pageId");
ALTER TABLE "page_versions" ADD CONSTRAINT "page_versions_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "pages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

