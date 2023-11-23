import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/PrismaService';
import { Prisma, FatiaAlbum } from '@prisma/client';
import { CreateFatiaAlbumDto } from './dto/create-fatia-album.dto';
import { Participant } from 'src/participant/entities/participant.entity';
import { JsArgs } from '@prisma/client/runtime/library';
@Injectable()
export class FatiaAlbumService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateFatiaAlbumDto): Promise<FatiaAlbum> {
    const { urlCatalogo, idP } = data;
    const fatiaAlbum = await this.prisma.fatiaAlbum.create({
      data: {
        urlCatalogo,
        idP,
      },
    });

    return fatiaAlbum;
  }

  async createParticipant(data: CreateFatiaAlbumDto): Promise<FatiaAlbum> {
    const { urlCatalogo, idP } = data;

    const participant = await this.prisma.participant.findUnique({
      where: { idP },
    });

    if (!participant) {
      throw new NotFoundException('Participant not found.');
    }

    const fatiaAlbum = await this.prisma.fatiaAlbum.create({
      data: {
        urlCatalogo,
        idP,
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
    idF?: number;
    urlCatalogo?: string;
    dataCriacao?: Date;
    idP?: number;
  }): Promise<FatiaAlbum[]> {
    const { idF, urlCatalogo, dataCriacao, idP } = params;
    return this.prisma.fatiaAlbum.findMany({
      where: {
        idF,
        urlCatalogo,
        dataCriacao,
        idP,
      },
    });
  }

  async findOne(
    idF: number,
    params: {
      id?: number;
      urlCatalogo?: string;
      dataCriacao?: Date;
      idP?: number;
    },
  ): Promise<FatiaAlbum[]> {
    const { id, urlCatalogo, dataCriacao, idP } = params;

    return this.prisma.fatiaAlbum.findMany({
      where: {
        idF: idF,
        urlCatalogo,
        dataCriacao,
        idP,
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

  private async validateParticipant(idP: number): Promise<void> {
    const participant = await this.prisma.participant.findUnique({
      where: { idP },
    });

    if (!participant) {
      throw new NotFoundException('Participant not found.');
    }

    const album = await this.prisma.album.findUnique({
      where: { idAlbum: participant.idAlbumP },
    });

    if (!album || album.authorId !== participant.idUserP) {
      throw new NotFoundException('Participant is not the album creator.');
    }
  }

  
  async getUserAndAlbumIdsByIdP(idP: number): Promise<{ idUser: number; idAlbum: number }> {
    const participant = await this.prisma.participant.findUnique({
      where: { idP },
    });

    return { idUser: participant.idUserP, idAlbum: participant.idAlbumP };
  }

  async getIdPByAlbumId(idAlbumToCompare: number): Promise<number | null> {
    const fatiaAlbum = await this.prisma.participant.findFirst({
      where: {
        idAlbumP: idAlbumToCompare,
      },
      select: {
        idP: true,
      },
    });
  
    return fatiaAlbum?.idP ?? null;
  }
  
  async getIdFByIdP(idP: number): Promise<number[] | null> {
    const fatiasAlbum = await this.prisma.fatiaAlbum.findMany({
      where: {
        idP: Number(idP),
      },
      select: {
        idF: true,
      },
    });
  
    const idFArray = fatiasAlbum.map((fatia) => fatia.idF);
    return idFArray.length > 0 ? idFArray : null;
  }

  async geturlFByIdF(idF: number): Promise<string[] | null> {
    const fatiasAlbum = await this.prisma.fatiaAlbum.findMany({
      where: {
        idF: Number(idF),
      },
      select: {
        urlCatalogo: true,
      },
    });
  
    const idFArray = fatiasAlbum.map((fatia) => fatia.urlCatalogo);
    return idFArray.length > 0 ? idFArray : null;
  }
  
  
  
 

}
