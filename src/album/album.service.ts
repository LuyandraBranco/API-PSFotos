import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { PrismaService } from 'src/database/PrismaService';
import { Album, Prisma } from '@prisma/client';

@Injectable()
export class AlbumService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAlbumDto): Promise<Album> {
    const { name, authorId, catalog, idFolder } = data;
    const album = await this.prisma.album.create({
      data: {
        name,
        authorId,
        catalog,
        idFolder,
      },
    });

    return album;
  }

  async album(
    albumWhereUniqueInput: Prisma.AlbumWhereUniqueInput,
  ): Promise<Album | null> {
    return this.prisma.album.findUnique({
      where: albumWhereUniqueInput,
    });
  }

  async findAll(params: {
    idAlbum?: number;
    name?: string;
    authorId?: number;
    date?: Date;
    catalog?: string;
    idFolder?:string;
  }): Promise<Album[]> {
    const { idAlbum, name, authorId, date, catalog, idFolder } = params;
    return this.prisma.album.findMany({
      where: {
        idAlbum,
        name,
        authorId,
        date,
        catalog,
        idFolder,
      },
    });
  }

  async findOne(
    id: number,
    params: {
      idAlbum?: number;
      name?: string;
      authorId?: number;
      date?: Date;
      catalog?: string;
      idFolder?:string;
    },
  ): Promise<Album[]> {
    const { idAlbum, name, authorId, date, catalog, idFolder} = params;

    return this.prisma.album.findMany({
      where: {
        idAlbum: id,
        name,
        authorId,
        date,
        catalog,
        idFolder, 
      },
    });
  }

  async updatePost(params: {
    where: Prisma.AlbumWhereUniqueInput;
    data: Prisma.AlbumUpdateInput;
  }): Promise<Album> {
    const { data, where } = params;
    return this.prisma.album.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.AlbumWhereUniqueInput): Promise<Album> {
    return this.prisma.album.delete({
      where,
    });
  }

  // retorna o nome de todos os albuns
  async albuns(): Promise<string[]> {
    const albums = await this.prisma.album.findMany({
      select: {
        name: true,
      },
    });

    return albums.map((album) => album.name);
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
  
  
  // recebe id user e retorna o nomes dos albuns

  async getTablesByUserId(userId: number): Promise<string[] | null> {
    try {
      const userTables = await this.prisma.album.findMany({
        where: {
          authorId: Number(userId),
        },
        select: {
          name: true,
        },
      });
  
      return userTables.map((userTable) => userTable.name);
  
      //return tables;
    } catch (error) {
      console.error('Erro ao obter tabelas do usuário:', error);
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

  async findIdFolderByAlbumName(albumName: string): Promise<string | null> {
    const album = await this.prisma.album.findFirst({
      where: {
        name: albumName,
      },
      select: {
        idFolder: true,
      },
    });
    return album ? album.idFolder : null;
  }
  
  //recebe um id e retona o album correspondente
  async getAlbumNameById(albumId: number): Promise<string | null> {
    try {
      const album = await this.prisma.album.findUnique({
        where: {
          idAlbum: albumId,
        },
        select: {
          name: true,
        },
      });

      return album.name;
    } catch (error) {
      console.error(`Erro ao obter nome do álbum com ID ${albumId}:`, error);
      return null;
    }
  }
  
}
