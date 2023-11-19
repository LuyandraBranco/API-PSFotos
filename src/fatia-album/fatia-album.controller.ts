import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FatiaAlbumService } from './fatia-album.service';
import { CreateFatiaAlbumDto } from './dto/create-fatia-album.dto';
import { UpdateFatiaAlbumDto } from './dto/update-fatia-album.dto';
import { FatiaAlbum ,FatiaAlbum as FatiaModel} from '@prisma/client';

@Controller('fatia-album')
export class FatiaAlbumController {
  constructor(private readonly fatiaAlbumService: FatiaAlbumService) {}

  @Post()
  create(@Body() createFatiaAlbumDto: CreateFatiaAlbumDto) {
    return this.fatiaAlbumService.create(createFatiaAlbumDto);
  }

  @Get()
  findAll():Promise<FatiaAlbum[]> {
    return this.fatiaAlbumService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.fatiaAlbumService.findOne(+id,{});
  }

  @Patch(':id')
  update(@Param('id') id: string,@Body() updateDto: UpdateFatiaAlbumDto):Promise<FatiaModel> {
    return this.fatiaAlbumService.updateFatia({
      where: { id: Number(id) },
      data: updateDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string):Promise<FatiaAlbum> {
    return this.fatiaAlbumService.remove({ id: Number(id) });
  }
}
