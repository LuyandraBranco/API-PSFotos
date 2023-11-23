import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantController } from './participant.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [ParticipantController],
  providers: [ParticipantService, PrismaService],
  
})
export class ParticipantModule {}
