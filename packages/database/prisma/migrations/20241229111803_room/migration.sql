/*
  Warnings:

  - You are about to drop the column `date` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `from` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `to` on the `Reservation` table. All the data in the column will be lost.
  - You are about to alter the column `studentId` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.
  - Added the required column `endAt` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startAt` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "date",
DROP COLUMN "from",
DROP COLUMN "to",
ADD COLUMN     "endAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "studentId" SET DATA TYPE VARCHAR(10);
