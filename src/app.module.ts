import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import { AlbumModule } from './album/album.module';
import { GoogleDriveModule } from './google-drive/google-drive.module';


@Module({
  imports: [UserModule, AuthModule, AlbumModule, GoogleDriveModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
