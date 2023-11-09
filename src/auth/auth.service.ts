import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UserDTO } from 'src/dtos/user.dots';
import * as argon from 'argon2';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  //Método pra criar user
  async signUp(data: UserDTO) {
    //Destruturando os dados
    const { username, password } = data;
    //Encriptando a password
    const hash: string = await argon.hash(password);
    //Procurando se o username já está sendo usado
    const userExits = await this.prisma.user.findFirst({
      where: {
        username: username,
      },
    });

    if (userExits) {
      throw new UnauthorizedException('This username is already in use');
    }

    //Add the user
    const user = await this.prisma.user.create({
      data: {
        username,
        password: hash,
      },
    });

    return user;
  }

  async signIn(data: UserDTO) {
    const user = await this.userService.findUserByUsername(data.username);

    // Comparando as senhas
    if (!(await argon.verify(user?.password, data.password))) {
      throw new UnauthorizedException('Incorrect password');
    }

    // // O objeto result contém o username e o idUser apenas
    // const { password, ...result } = user;

    const payload = { sub: user.idUser, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
