import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/PrismaService';
import { Prisma, FatiaAlbum } from '@prisma/client';
import { CreateFatiaAlbumDto } from './dto/create-fatia-album.dto';


@Injectable()
export class FatiaAlbumService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateFatiaAlbumDto): Promise<FatiaAlbum> {
    const { urlCatalogo, idParticipant, idProprietario } = data;

    const fatiaAlbum = await this.prisma.fatiaAlbum.create({
      data: {
        urlCatalogo,
        idParticipant,
        idProprietario,
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
    idParticipant?: number;
    idProprietario?: number;
  }): Promise<FatiaAlbum[]> {
    const { idF, urlCatalogo, dataCriacao, idParticipant, idProprietario } =
      params;
    return this.prisma.fatiaAlbum.findMany({
      where: {
        idF,
        urlCatalogo,
        dataCriacao,
        idParticipant,
        idProprietario,
      },
    });
  }

  async findOne(
    idF: number,
    params: {
      id?: number;
      urlCatalogo?: string;
      dataCriacao?: Date;
      idParticipant?: number;
      idProprietario?: number;
    },
  ): Promise<FatiaAlbum[]> {
    const { id, urlCatalogo, dataCriacao, idParticipant, idProprietario } =
      params;

    return this.prisma.fatiaAlbum.findMany({
      where: {
        idF: idF,
        urlCatalogo,
        dataCriacao,
        idParticipant,
        idProprietario,
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

  async getUserAndAlbumIdsByIdP(
    idP: number,
  ): Promise<{ idUser: number; idAlbum: number }> {
    const participant = await this.prisma.participant.findUnique({
      where: { idP },
    });

    return { idUser: participant.idUserP, idAlbum: participant.idAlbumP };
  }

  async getIdsPByAlbumId(idAlbumToCompare: number): Promise<number[]> {
    const fatiaAlbums = await this.prisma.participant.findMany({
      where: {
        idAlbumP: idAlbumToCompare,
      },
      select: {
        idP: true,
      },
    });

    return fatiaAlbums.map((fatiaAlbum) => fatiaAlbum.idP);
  }

  async getIdFByIdP(idP: number): Promise<number[] | null> {
    const fatiasAlbum = await this.prisma.fatiaAlbum.findMany({
      where: {
        idParticipant: Number(idP),
      },
      select: {
        idF: true,
      },
    });

    const idFArray = fatiasAlbum.map((fatia) => fatia.idF);
    return idFArray.length > 0 ? idFArray : null;
  }

  async getIdFByIdProp(idP: number): Promise<number[] | null> {
    const fatiasAlbum = await this.prisma.fatiaAlbum.findMany({
      where: {
        idProprietario: Number(idP),
      },
      select: {
        idF: true,
      },
    });

    const idFArray = fatiasAlbum.map((fatia) => fatia.idF);
    return idFArray.length > 0 ? idFArray : null;
  }

  async geturlFByIdF(albumName: string): Promise<string[] | null> {
    try {
      const album = await this.getAlbumIdByName(albumName);
  
      
      const participants = await this.findParticipantIdsByAlbumId(Number(album));
  
      const idFs = await Promise.all(participants.map(async (participant) => {
        return await this.getIdFByIdP(Number(participant));
      }));
  
      const allIds = idFs.reduce((acc, curr) => acc.concat(curr), []);
  
      const urlArray: string[] = [];
  
      for (const id of allIds) {
        const fatiasAlbum = await this.prisma.fatiaAlbum.findMany({
          where: {
            idF: Number(id),
          },
          select: {
            urlCatalogo: true,
          },
        });
  
        urlArray.push(...fatiasAlbum.map((fatia) => fatia.urlCatalogo));
      }
  
      return urlArray.length > 0 ? urlArray : null;
    } catch (error) {
      console.error("Erro durante a execução da função:", error);
      return null;
    }
  }
  

  // Retorna o ID do álbum com base no nome
  async getAlbumIdByName(albumName: string): Promise<number | null> {
    try {
      const album = await this.prisma.album.findFirst({
        where: {
          name: albumName,
        },
        select: {
          idAlbum: true,
        },
      });

      return album ? album.idAlbum : null;
    } catch (error) {
      console.error('Erro ao obter o ID do álbum:', error);
      return null;
    }
  }

  // participantes
  async findParticipantIdsByAlbumId(
    idAlbumP: number,
  ): Promise<number[] | null> {
    try {
      const participants = await this.prisma.participant.findMany({
        where: {
          idAlbumP: Number(idAlbumP),
        },
        select: {
          idP: true,
        },
      });

      return participants.map((participant) => participant.idP);
    } catch (error) {
      console.error(
        `Erro ao obter IDs dos participantes para o álbum com ID ${idAlbumP}:`,
        error,
      );
      return null;
    }
  }
}
