-- CreateTable
CREATE TABLE `Users` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WatchList` (
    `watchId` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `mediaId` VARCHAR(25) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `image` VARCHAR(512) NOT NULL,

    PRIMARY KEY (`watchId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WatchedMedia` (
    `watchedId` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `mediaId` VARCHAR(25) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `image` VARCHAR(512) NOT NULL,

    PRIMARY KEY (`watchedId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
