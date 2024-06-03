/*
  Warnings:

  - You are about to drop the column `completed` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `deleted` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `paused` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `process` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Task` table. All the data in the column will be lost.
  - Added the required column `state` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "completed",
DROP COLUMN "deleted",
DROP COLUMN "paused",
DROP COLUMN "process",
DROP COLUMN "updatedAt",
ADD COLUMN     "state" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "State_Task" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "State_Task_pkey" PRIMARY KEY ("id")
);
