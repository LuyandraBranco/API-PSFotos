/*
  Warnings:

  - You are about to drop the column `idP` on the `FatiaAlbum` table. All the data in the column will be lost.
  - Added the required column `idProprietario` to the `FatiaAlbum` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FatiaAlbum" DROP CONSTRAINT "FatiaAlbum_idP_fkey";

-- AlterTable
ALTER TABLE "FatiaAlbum" DROP COLUMN "idP",
ADD COLUMN     "idParticipant" INTEGER,
ADD COLUMN     "idProprietario" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "FatiaAlbum" ADD CONSTRAINT "FatiaAlbum_idParticipant_fkey" FOREIGN KEY ("idParticipant") REFERENCES "Participant"("idP") ON DELETE SET NULL ON UPDATE CASCADE;
