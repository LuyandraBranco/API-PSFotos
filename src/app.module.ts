import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthGoogleModule } from './auth-google/auth-google.module';

import { AlbumModule } from './album/album.module';



@Module({
  imports: [UserModule, AuthModule, AuthGoogleModule, AlbumModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
