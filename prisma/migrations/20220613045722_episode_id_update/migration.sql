/*
  Warnings:

  - Added the required column `episodeId` to the `WatchedMedia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `WatchedMedia` ADD COLUMN `episodeId` VARCHAR(25) NOT NULL;
