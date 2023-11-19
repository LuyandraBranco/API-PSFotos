import { PartialType } from '@nestjs/mapped-types';
import { CreateFatiaAlbumDto } from './create-fatia-album.dto';

export class UpdateFatiaAlbumDto extends PartialType(CreateFatiaAlbumDto) {}
