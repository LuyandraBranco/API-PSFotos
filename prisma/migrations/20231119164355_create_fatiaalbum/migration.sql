-- CreateTable
CREATE TABLE "FatiaAlbum" (
    "idUser" SERIAL NOT NULL,
    "urlCatalogo" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL,
    "idAlbum" INTEGER NOT NULL,

    CONSTRAINT "FatiaAlbum_pkey" PRIMARY KEY ("idUser")
);

-- CreateIndex
CREATE UNIQUE INDEX "FatiaAlbum_idAlbum_key" ON "FatiaAlbum"("idAlbum");

-- AddForeignKey
ALTER TABLE "FatiaAlbum" ADD CONSTRAINT "FatiaAlbum_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "users"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FatiaAlbum" ADD CONSTRAINT "FatiaAlbum_idAlbum_fkey" FOREIGN KEY ("idAlbum") REFERENCES "Album"("idAlbum") ON DELETE RESTRICT ON UPDATE CASCADE;
