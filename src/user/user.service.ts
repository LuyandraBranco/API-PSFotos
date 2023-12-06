import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';


@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async allUsers() {
    return await this.prisma.user.findMany();
  }

  async findUserByUsername(username: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        username: username,
      },
    });

    if (!user) {
      throw new NotFoundException(`Usuário com o username ${username} não encontrado.`);
    }
    return user;
  }

  async getIdByUsername(username: string): Promise<number | null> {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          username: username,
        },
        select: {
          idUser: true,
        },
      });

      return user ? user.idUser : null;
    } catch (error) {
      console.error('Erro ao buscar usuário por username:', error);
      throw error;
    }
  }
  
}
