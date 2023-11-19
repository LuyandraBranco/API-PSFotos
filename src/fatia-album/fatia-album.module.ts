import { Module } from '@nestjs/common';
import { FatiaAlbumService } from './fatia-album.service';
import { FatiaAlbumController } from './fatia-album.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [FatiaAlbumController],
  providers: [FatiaAlbumService, PrismaService],
})
export class FatiaAlbumModule {}
