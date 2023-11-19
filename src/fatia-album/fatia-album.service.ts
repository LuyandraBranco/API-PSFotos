import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/PrismaService';
import { Prisma, FatiaAlbum } from '@prisma/client';
import { CreateFatiaAlbumDto } from './dto/create-fatia-album.dto';
@Injectable()
export class FatiaAlbumService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateFatiaAlbumDto): Promise<FatiaAlbum> {
    const { urlCatalogo, idUser, idAlbum } = data;
    const fatiaAlbum = await this.prisma.fatiaAlbum.create({
      data: {
        urlCatalogo,
        idUser,
        idAlbum,
      },
    });

    return fatiaAlbum;
  }

  async fatiaAlbum(
    fatiaAlbumWhereUniqueInput: Prisma.FatiaAlbumWhereUniqueInput,
  ): Promise<FatiaAlbum | null> {
    return this.prisma.fatiaAlbum.findUnique({
      where: fatiaAlbumWhereUniqueInput,
    });
  }

  async findAll(params: {
    id?: number;
    urlCatalogo?: string;
    dataCriacao?: Date;
    idUser?: number;
    idAlbum?: number;
  }): Promise<FatiaAlbum[]> {
    const { id, urlCatalogo, dataCriacao, idUser, idAlbum} = params;
    return this.prisma.fatiaAlbum.findMany({
      where: {
        id,
        urlCatalogo,
        dataCriacao,
        idUser,
        idAlbum,
      },
    });
  }

  async findOne(
    idF: number,
    params: {
      id?: number;
      urlCatalogo?: string;
      dataCriacao?: Date;
      idUser?: number;
      idAlbum?: number;
    },
  ): Promise<FatiaAlbum[]> {
    const { id, urlCatalogo, dataCriacao, idUser, idAlbum } = params;

    return this.prisma.fatiaAlbum.findMany({
      where: {
        id: idF,
        urlCatalogo,
        dataCriacao,
        idUser,
        idAlbum,
      },
    });
  }

  async updateFatia(params: {
    where: Prisma.FatiaAlbumWhereUniqueInput;
    data: Prisma.FatiaAlbumUpdateInput;
  }): Promise<FatiaAlbum> {
    const { data, where } = params;
    return this.prisma.fatiaAlbum.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.FatiaAlbumWhereUniqueInput): Promise<FatiaAlbum> {
    return this.prisma.fatiaAlbum.delete({
      where,
    });
  }
}
