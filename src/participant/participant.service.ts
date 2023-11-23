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

  async findParticipantIdByUserAndAlbum(idUser: number, idAlbum: number): Promise<number | null> {
    const participant = await this.prisma.participant.findFirst({
      where: {
        idUserP: Number(idUser),
        idAlbumP: Number(idAlbum),
      },
      select: {
        idP: true,
      },
    });
  
    return participant?.idP ?? null;
  }
  
}
