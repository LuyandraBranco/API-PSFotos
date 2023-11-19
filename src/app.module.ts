import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from '@nestjs/platform-express/multer';
import { AlbumModule } from './album/album.module';
import { GoogleDriveModule } from './google-drive/google-drive.module';
//import { DropboxModule } from './dropbox/dropbox.module';
//import { UploadModule } from './upload/upload.module';
//import { SupabaseModule } from './supabase/supabase.module';


@Module({
  //UserModule, AuthModule, AlbumModule, GoogleDriveModule, DropboxModule, UploadModule,
  imports: [ UserModule, AuthModule, AlbumModule, GoogleDriveModule,
    MulterModule.register({
      dest: './uploads',
    }),
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
