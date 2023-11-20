import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from '@nestjs/platform-express/multer';
import { AlbumModule } from './album/album.module';
import { GoogleDriveModule } from './google-drive/google-drive.module';
import { FatiaAlbumModule } from './fatia-album/fatia-album.module';

@Module({
  imports: [UserModule, AuthModule, AlbumModule, GoogleDriveModule, FatiaAlbumModule],
  controllers: [],
  providers: [],
  exports: [UserModule, AuthModule, AlbumModule, GoogleDriveModule, FatiaAlbumModule]
})
export class AppModule {}
