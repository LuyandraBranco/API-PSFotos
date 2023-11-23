import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album, Album as AlbumModel} from '@prisma/client';

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Post()
  async create(@Body() data: CreateAlbumDto):Promise<AlbumModel> {
    const {name, authorId,catalog} = data
    return this.albumService.create({
      name,
      authorId,
      catalog,
    });
  }

  @Get()
  findAll():Promise<Album[]> {
    return this.albumService.findAll({});
  }

  @Get('/albuns')
  albuns():Promise<String[]> {
    return this.albumService.albuns();
  }

  @Get(':albumName/id')
  async getAlbumIdByName(@Param('albumName') albumName: string): Promise<number> { 
     return this.albumService.getAlbumIdByName(albumName);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.albumService.findOne(+id,{});
  }

  @Get('/album-names/:userId')
  async getTablesByUserId(@Param('userId') userId: number): Promise<string[] | null> {
    return this.albumService.getTablesByUserId(userId);
  }

  @Patch(':id')
  async publishPost(@Param('id') id: string,@Body() updateDto: UpdateAlbumDto): Promise<AlbumModel> {
    return this.albumService.updatePost({
      where: { idAlbum: Number(id) },
      data: updateDto,
    });
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<AlbumModel> {
    return this.albumService.remove({ idAlbum: Number(id) });
  }
}