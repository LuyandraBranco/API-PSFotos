/*
  Warnings:

  - The primary key for the `FatiaAlbum` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX "FatiaAlbum_idAlbum_key";

-- AlterTable
ALTER TABLE "FatiaAlbum" DROP CONSTRAINT "FatiaAlbum_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "idUser" DROP DEFAULT,
ADD CONSTRAINT "FatiaAlbum_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "FatiaAlbum_idUser_seq";
