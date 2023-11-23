/*
  Warnings:

  - Added the required column `idP` to the `FatiaAlbum` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FatiaAlbum" ADD COLUMN     "idP" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "FatiaAlbum" ADD CONSTRAINT "FatiaAlbum_idP_fkey" FOREIGN KEY ("idP") REFERENCES "Participant"("idP") ON DELETE RESTRICT ON UPDATE CASCADE;
