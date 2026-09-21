CREATE TABLE "website_settings" (
  "id" TEXT NOT NULL, "key" TEXT NOT NULL DEFAULT 'default', "siteName" TEXT NOT NULL,
  "slogan" TEXT, "logoUrl" TEXT, "logoLightUrl" TEXT, "faviconUrl" TEXT,
  "primaryColor" TEXT, "secondaryColor" TEXT, "footerTitle" TEXT, "footerDescription" TEXT,
  "copyrightText" TEXT, "seoTitle" TEXT, "seoDescription" TEXT, "seoKeywords" TEXT,
  "ogImageUrl" TEXT, "contactEmail" TEXT, "contactPhone" TEXT, "whatsappNumber" TEXT,
  "address" TEXT, "officeHours" TEXT, "socialLinks" JSONB, "googleMapsUrl" TEXT,
  "privacyPolicyUrl" TEXT, "termsUrl" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "website_settings_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "website_settings_key_key" ON "website_settings"("key");

