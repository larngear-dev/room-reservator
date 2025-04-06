/*
  Warnings:

  - The primary key for the `Reservation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `endAt` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `startAt` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `topic` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Reservation` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Organization` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `CreatedAt` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EditedAt` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EndTime` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - The required column `ReservationId` was added to the `Reservation` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `RoomId` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `StartTime` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Topic` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserId` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FirstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `LastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `LineId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ReservationStatus" AS ENUM ('Incomplete', 'Complete', 'Cancelled');

-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('Student', 'Staff', 'Admin');

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_userId_fkey";

-- DropIndex
DROP INDEX "User_studentId_key";

-- AlterTable
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "endAt",
DROP COLUMN "id",
DROP COLUMN "organizationId",
DROP COLUMN "startAt",
DROP COLUMN "topic",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "CreatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "EditedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "EndTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "ReservationId" TEXT NOT NULL,
ADD COLUMN     "RoomId" INTEGER NOT NULL,
ADD COLUMN     "StartTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "Status" "ReservationStatus" NOT NULL DEFAULT 'Incomplete',
ADD COLUMN     "Topic" TEXT NOT NULL,
ADD COLUMN     "UserId" TEXT NOT NULL,
ADD CONSTRAINT "Reservation_pkey" PRIMARY KEY ("ReservationId");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "firstName",
DROP COLUMN "id",
DROP COLUMN "lastName",
DROP COLUMN "studentId",
DROP COLUMN "updatedAt",
ADD COLUMN     "FirstName" TEXT NOT NULL,
ADD COLUMN     "LastName" TEXT NOT NULL,
ADD COLUMN     "LineId" TEXT NOT NULL,
ADD COLUMN     "Type" "UserType" NOT NULL DEFAULT 'Student',
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("LineId");

-- DropTable
DROP TABLE "Organization";

-- CreateTable
CREATE TABLE "Room" (
    "RoomId" SERIAL NOT NULL,
    "Location" TEXT NOT NULL,
    "Capacity" INTEGER NOT NULL,
    "Equipment" TEXT NOT NULL,
    "Regulation" TEXT NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("RoomId")
);

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("LineId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_RoomId_fkey" FOREIGN KEY ("RoomId") REFERENCES "Room"("RoomId") ON DELETE RESTRICT ON UPDATE CASCADE;
