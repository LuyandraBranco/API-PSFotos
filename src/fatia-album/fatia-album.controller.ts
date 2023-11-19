import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FatiaAlbumService } from './fatia-album.service';
import { CreateFatiaAlbumDto } from './dto/create-fatia-album.dto';
import { UpdateFatiaAlbumDto } from './dto/update-fatia-album.dto';

@Controller('fatia-album')
export class FatiaAlbumController {
  constructor(private readonly fatiaAlbumService: FatiaAlbumService) {}

  @Post()
  create(@Body() createFatiaAlbumDto: CreateFatiaAlbumDto) {
    return this.fatiaAlbumService.create(createFatiaAlbumDto);
  }

  @Get()
  findAll() {
    return this.fatiaAlbumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fatiaAlbumService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFatiaAlbumDto: UpdateFatiaAlbumDto) {
    return this.fatiaAlbumService.update(+id, updateFatiaAlbumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fatiaAlbumService.remove(+id);
  }
}
