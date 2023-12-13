import { Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { Participant, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ParticipantService {
  constructor(private prisma: PrismaService) {}

  async participant(
    participantWhereUniqueInput: Prisma.ParticipantWhereUniqueInput,
  ): Promise<Participant | null> {
    return this.prisma.participant.findUnique({
      where: participantWhereUniqueInput,
    });
  }

  async create(data: CreateParticipantDto): Promise<Participant> {
    const { idUserP, idAlbumP } = data;
    const participant = await this.prisma.participant.create({
      data: {
        idUserP,
        idAlbumP,
      },
    });

    return participant;
  }

   async findAll(params: {
    idUserP?: number;
    idAlbumP?:number;
  
  }
    ):Promise<Participant[]> {
      const { idUserP, idAlbumP} = params;
      return this.prisma.participant.findMany({
        where: {
          idUserP,
          idAlbumP,   
        },
      });
  }

  async findOne(
    idP: number,
    params: {
      idUserP?: number;
      idAlbumP?: number;
      
    },):Promise<Participant[]> {
    const { idUserP, idAlbumP} = params;

    return this.prisma.participant.findMany({
      where: {
        idP: idP,
        idUserP,
        idAlbumP
      },
    });
  }

  async remove(where: Prisma.ParticipantWhereUniqueInput): Promise<Participant> {
    return this.prisma.participant.delete({
      where,
    });
  }

  async getAlbumNameByParticipantId(idP: number): Promise<string | null> {
    const participant = await this.prisma.participant.findUnique({
      where: { idP },
      include: { album: true },
    });
  
    return participant?.album.name || null;
  }

  async getUserNameByParticipantId(idP: number): Promise<string | null> {
    const participant = await this.prisma.participant.findUnique({
      where: { idP },
      include: { user: true },
    });
  
    return participant?.user.username || null;
  }
  
  // recebe um idUser e verifica se e participante
  async findParticipantIdByUserId(idUser: number): Promise<number | null> {
    const participant = await this.prisma.participant.findFirst({
      where: {
        idUserP: idUser,
      },
      select: {
        idP: true,
      },
    });

    return participant?.idP || null;
  }

  async findParticipantIdByUserAndAlbum(idUser: number, albumName: string): Promise<number | null> {
    
    const albumId = await this.getAlbumIdByName(albumName);

    const participant = await this.prisma.participant.findFirst({
      where: {
        idUserP: Number(idUser),
        idAlbumP: Number(albumId),
      },
      select: {
        idP: true,
      },
    });
  
    return participant?.idP ?? null;
  }
  
  // recebe id user e retorna os idAlbum associados a ele
  async findAlbumIdsByUser(idUserP: number): Promise<number[] | null> {
    try {
      const albums = await this.prisma.participant.findMany({
        where: {
          idUserP: Number(idUserP),
        },
        select: {
          idAlbumP: true,
        },
      });
  
      return albums.map((participant) => participant.idAlbumP);
    } catch (error) {
      console.error(`Erro ao obter IDs dos álbuns para o usuário com ID ${idUserP}:`, error);
      return null;
    }
  }

  async findParticipantIdsByAlbumId(idAlbumP: number): Promise<number[] | null> {
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
      console.error(`Erro ao obter IDs dos participantes para o álbum com ID ${idAlbumP}:`, error);
      return null;
    }
  }

  async findAuthorIdByAlbumName(albumName: string): Promise<number | null> {
    const album = await this.prisma.album.findFirst({
      where: {
        name: albumName,
      },
      select: {
        authorId: true,
      },
    });
    return album ? album.authorId : null;
  }

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
  
}
