import { Module } from '@nestjs/common';
import { FatiaAlbumService } from './fatia-album.service';
import { FatiaAlbumController } from './fatia-album.controller';

@Module({
  controllers: [FatiaAlbumController],
  providers: [FatiaAlbumService],
})
export class FatiaAlbumModule {}
