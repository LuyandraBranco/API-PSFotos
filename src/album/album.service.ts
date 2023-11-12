import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Album } from './entities/album.entity';
@Injectable()
export class AlbumService {
constructor(private readonly prisma: PrismaService) {}
 
  create(createAlbumDto: CreateAlbumDto) {
    return 'This action adds a new album';
  }

  async findAll(){
    return  this.prisma.client.album.count;
  }

  findOne(id: number) {
    return `This action returns a #${id} album`;
  }

  update(id: number, updateAlbumDto: UpdateAlbumDto) {
    return `This action updates a #${id} album`;
  }

  remove(id: number) {
    return `This action removes a #${id} album`;
  }
}
