import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { FatiaAlbumService } from './fatia-album.service';
import { CreateFatiaAlbumDto } from './dto/create-fatia-album.dto';
import { UpdateFatiaAlbumDto } from './dto/update-fatia-album.dto';
import { FatiaAlbum, FatiaAlbum as FatiaModel } from '@prisma/client';

@Controller('fatia-album')
export class FatiaAlbumController {
  constructor(private readonly fatiaAlbumService: FatiaAlbumService) {}

  @Post()
  create(@Body() createFatiaAlbumDto: CreateFatiaAlbumDto) {
    return this.fatiaAlbumService.create(createFatiaAlbumDto);
  }

  @Post('/create')
  createParticipant(@Body() createFatiaAlbumDto: CreateFatiaAlbumDto) {
    return this.fatiaAlbumService.createParticipant(createFatiaAlbumDto);
  }
  @Get()
  findAll(): Promise<FatiaAlbum[]> {
    return this.fatiaAlbumService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.fatiaAlbumService.findOne(+id, {});
  }
  /*
  @Get(':albumId/urlsCatalogo')
  async getUrlsByAlbumId(@Param('albumId') albumId: number): Promise<string[]> {
    return this.fatiaAlbumService.getUrlsByAlbumId(albumId);
  }
*/
  @Get('/user/:idP')
  async getUserAndAlbumIdsByIdP(@Param('idP') idP: number) {
    return this.fatiaAlbumService.getUserAndAlbumIdsByIdP(Number(idP));
  }

  @Get('/fatia/:idAlbum')
  async getIdPByAlbumId(
    @Param('idAlbum') idAlbum: string,
  ): Promise<number | null> {
    const idAlbumToCompare = parseInt(idAlbum, 10); // Converte para número, se necessário
    return this.fatiaAlbumService.getIdPByAlbumId(idAlbumToCompare);
  }

  @Get('idf/:idP')
  async getIdFByIdP(@Param('idP') idP: number): Promise<number[] | null> {
    return this.fatiaAlbumService.getIdFByIdP(idP);
  }

  @Get('url/:idP')
  async geturlFByIdF(@Param('idP') idP: number): Promise<string[] | null> {
    return this.fatiaAlbumService.geturlFByIdF(idP);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDto: UpdateFatiaAlbumDto,
  ): Promise<FatiaModel> {
    return this.fatiaAlbumService.updateFatia({
      where: { idF: Number(id) },
      data: updateDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<FatiaAlbum> {
    return this.fatiaAlbumService.remove({ idF: Number(id) });
  }
}
