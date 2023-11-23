import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { Participant  } from '@prisma/client';

@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Post()
  create(@Body() createParticipantDto: CreateParticipantDto) {
    return this.participantService.create(createParticipantDto);
  }

  @Get()
  findAll():Promise<Participant[]> {
    return this.participantService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.participantService.findOne(+id,{});
  }

  
  @Delete(':id')
  remove(@Param('id') id: string):Promise<Participant> {
    return this.participantService.remove({ idP: Number(id) });
  }

  @Get(':id/album-name')
  async getAlbumName(@Param('id') id: string): Promise<string | null> {
    const participantId = parseInt(id, 10);
    return this.participantService.getAlbumNameByParticipantId(participantId);
  }

  @Get(':id/username')
  async getUserName(@Param('id') id: string): Promise<string | null> {
    const participantId = parseInt(id, 10);
    return this.participantService.getUserNameByParticipantId(participantId);
  }

  @Get('check/:idUser')
  async checkParticipant(@Param('idUser') idUser: number): Promise<number | null> {
    return this.participantService.findParticipantIdByUserId(idUser);
  }
}
