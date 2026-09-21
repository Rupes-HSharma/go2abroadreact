ALTER TABLE "pages"
 ADD COLUMN "revision" INTEGER NOT NULL DEFAULT 0,
 ADD COLUMN "publishedSlug" TEXT,
 ADD COLUMN "publishedConfiguration" JSONB,
 ADD COLUMN "draftTheme" JSONB,
 ADD COLUMN "draftNavigation" JSONB;
CREATE UNIQUE INDEX "pages_publishedSlug_key" ON "pages"("publishedSlug");
CREATE TABLE "page_previews" (
 "id" TEXT NOT NULL PRIMARY KEY, "pageId" TEXT NOT NULL, "sessionId" TEXT NOT NULL,
 "configuration" JSONB NOT NULL, "expiresAt" TIMESTAMP(3) NOT NULL,
 CONSTRAINT "page_previews_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "pages"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE INDEX "page_previews_expiresAt_idx" ON "page_previews"("expiresAt");
CREATE TABLE "media" (
 "id" TEXT NOT NULL PRIMARY KEY, "storageKey" TEXT NOT NULL, "name" TEXT NOT NULL,
 "mimeType" TEXT NOT NULL, "size" INTEGER NOT NULL, "createdBy" TEXT NOT NULL,
 "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX "media_storageKey_key" ON "media"("storageKey");
CREATE INDEX "media_createdAt_idx" ON "media"("createdAt");
CREATE TABLE "themes" ("id" TEXT NOT NULL DEFAULT 'default' PRIMARY KEY, "configuration" JSONB NOT NULL, "updatedAt" TIMESTAMP(3) NOT NULL);
CREATE TABLE "navigation" ("id" TEXT NOT NULL DEFAULT 'default' PRIMARY KEY, "updatedAt" TIMESTAMP(3) NOT NULL);
CREATE TABLE "navigation_items" (
 "id" TEXT NOT NULL PRIMARY KEY, "navigationId" TEXT NOT NULL, "parentId" TEXT,
 "label" TEXT NOT NULL, "url" TEXT NOT NULL, "order" INTEGER NOT NULL, "isVisible" BOOLEAN NOT NULL DEFAULT true,
 CONSTRAINT "navigation_items_navigationId_fkey" FOREIGN KEY ("navigationId") REFERENCES "navigation"("id") ON DELETE CASCADE ON UPDATE CASCADE,
 CONSTRAINT "navigation_items_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "navigation_items"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE INDEX "navigation_items_navigationId_parentId_order_idx" ON "navigation_items"("navigationId","parentId","order");
CREATE TABLE "audit_logs" ("id" TEXT NOT NULL PRIMARY KEY, "actorId" TEXT NOT NULL, "action" TEXT NOT NULL, "pageId" TEXT, "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP);
CREATE INDEX "audit_logs_pageId_createdAt_idx" ON "audit_logs"("pageId","createdAt");

