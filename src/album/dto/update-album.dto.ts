import { PartialType } from '@nestjs/mapped-types';
import { CreateAlbumDto } from './create-album.dto';

// update-album.dto.ts

import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAlbumDto extends PartialType(CreateAlbumDto){
  @IsNumber()
  idAlbum: number;

  @IsOptional()
  @IsString()
  name?: string;


  // @IsOptional()
  // @IsNumber()
  // authorId?: number;

  // @IsOptional()
  // @IsDate()
  // date?: Date;

  // @IsOptional()
  // @IsString()
  // catalog?: string;
}