import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UserDTO } from 'src/dtos/user.dots';

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

}
