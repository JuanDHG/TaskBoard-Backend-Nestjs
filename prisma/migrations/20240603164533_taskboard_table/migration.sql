/*
  Warnings:

  - You are about to drop the column `state` on the `Task` table. All the data in the column will be lost.
  - Added the required column `icono` to the `State_Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icono` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stateid` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "State_Task" ADD COLUMN     "icono" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "state",
ADD COLUMN     "icono" TEXT NOT NULL,
ADD COLUMN     "stateid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_stateid_fkey" FOREIGN KEY ("stateid") REFERENCES "State_Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
