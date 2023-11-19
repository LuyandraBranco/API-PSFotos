import { Test, TestingModule } from '@nestjs/testing';
import { FatiaAlbumService } from './fatia-album.service';

describe('FatiaAlbumService', () => {
  let service: FatiaAlbumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FatiaAlbumService],
    }).compile();

    service = module.get<FatiaAlbumService>(FatiaAlbumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
