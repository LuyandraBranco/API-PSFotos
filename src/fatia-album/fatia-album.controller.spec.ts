import { Test, TestingModule } from '@nestjs/testing';
import { FatiaAlbumController } from './fatia-album.controller';
import { FatiaAlbumService } from './fatia-album.service';

describe('FatiaAlbumController', () => {
  let controller: FatiaAlbumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FatiaAlbumController],
      providers: [FatiaAlbumService],
    }).compile();

    controller = module.get<FatiaAlbumController>(FatiaAlbumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
