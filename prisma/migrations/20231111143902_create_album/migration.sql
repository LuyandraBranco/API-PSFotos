-- CreateTable
CREATE TABLE "Album" (
    "idAlbum" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "catalog" TEXT NOT NULL,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("idAlbum")
);

-- CreateTable
CREATE TABLE "Participant" (
    "idUserP" INTEGER NOT NULL,
    "idAlbumP" INTEGER NOT NULL,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("idUserP")
);

-- CreateIndex
CREATE UNIQUE INDEX "Participant_idUserP_key" ON "Participant"("idUserP");

-- CreateIndex
CREATE UNIQUE INDEX "Participant_idAlbumP_key" ON "Participant"("idAlbumP");

-- AddForeignKey
ALTER TABLE "Album" ADD CONSTRAINT "Album_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_idUserP_fkey" FOREIGN KEY ("idUserP") REFERENCES "users"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_idAlbumP_fkey" FOREIGN KEY ("idAlbumP") REFERENCES "Album"("idAlbum") ON DELETE RESTRICT ON UPDATE CASCADE;
