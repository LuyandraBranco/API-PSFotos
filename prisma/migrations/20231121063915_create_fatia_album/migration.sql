/*
  Warnings:

  - The primary key for the `Participant` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX "Participant_idAlbumP_key";

-- DropIndex
DROP INDEX "Participant_idUserP_key";

-- AlterTable
ALTER TABLE "Participant" DROP CONSTRAINT "Participant_pkey",
ADD COLUMN     "idP" SERIAL NOT NULL,
ADD CONSTRAINT "Participant_pkey" PRIMARY KEY ("idP");

-- CreateTable
CREATE TABLE "FatiaAlbum" (
    "idF" SERIAL NOT NULL,
    "urlCatalogo" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FatiaAlbum_pkey" PRIMARY KEY ("idF")
);
