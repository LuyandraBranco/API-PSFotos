/*
  Warnings:

  - The primary key for the `Participant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `idFolder` to the `Album` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Participant_idAlbumP_key";

-- DropIndex
DROP INDEX "Participant_idUserP_key";

-- AlterTable
ALTER TABLE "Album" ADD COLUMN     "idFolder" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Participant" DROP CONSTRAINT "Participant_pkey",
ADD COLUMN     "idP" SERIAL NOT NULL,
ADD CONSTRAINT "Participant_pkey" PRIMARY KEY ("idP");

-- CreateTable
CREATE TABLE "FatiaAlbum" (
    "idF" SERIAL NOT NULL,
    "urlCatalogo" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idParticipant" INTEGER,
    "idProprietario" INTEGER NOT NULL,

    CONSTRAINT "FatiaAlbum_pkey" PRIMARY KEY ("idF")
);

-- AddForeignKey
ALTER TABLE "FatiaAlbum" ADD CONSTRAINT "FatiaAlbum_idParticipant_fkey" FOREIGN KEY ("idParticipant") REFERENCES "Participant"("idP") ON DELETE SET NULL ON UPDATE CASCADE;
