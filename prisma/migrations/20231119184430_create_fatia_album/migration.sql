-- CreateTable
CREATE TABLE "FatiaAlbum" (
    "id" SERIAL NOT NULL,
    "urlCatalogo" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idUser" INTEGER NOT NULL,
    "idAlbum" INTEGER NOT NULL,

    CONSTRAINT "FatiaAlbum_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FatiaAlbum" ADD CONSTRAINT "FatiaAlbum_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "users"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FatiaAlbum" ADD CONSTRAINT "FatiaAlbum_idAlbum_fkey" FOREIGN KEY ("idAlbum") REFERENCES "Album"("idAlbum") ON DELETE RESTRICT ON UPDATE CASCADE;
