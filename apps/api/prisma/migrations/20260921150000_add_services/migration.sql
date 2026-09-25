CREATE TABLE `services` (
  `id` VARCHAR(191) NOT NULL,
  `title` VARCHAR(191) NOT NULL,
  `slug` VARCHAR(191) NOT NULL,
  `icon` VARCHAR(191) NOT NULL,
  `description` TEXT NOT NULL,
  `sortOrder` INT NOT NULL DEFAULT 0,
  `isPublished` BOOLEAN NOT NULL DEFAULT false,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL,
  UNIQUE INDEX `services_slug_key`(`slug`),
  INDEX `services_isPublished_sortOrder_idx`(`isPublished`, `sortOrder`),
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
