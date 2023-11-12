import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Album, Prisma } from '@prisma/client';

@Injectable()
export class AlbumService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAlbumDto): Promise<Album> {
    const { name, authorId, catalog } = data;
    const album = await this.prisma.album.create({
      data: {
        name,
        authorId,
        catalog,
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
  }): Promise<Album[]> {
    const { idAlbum, name, authorId, date, catalog } = params;
    return this.prisma.album.findMany({
      where: {
        idAlbum,
        name,
        authorId,
        date,
        catalog,
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
    },
  ): Promise<Album[]> {
    const { idAlbum, name, authorId, date, catalog } = params;

    return this.prisma.album.findMany({
      where: {
        idAlbum: id,
        name,
        authorId,
        date,
        catalog,
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
}
