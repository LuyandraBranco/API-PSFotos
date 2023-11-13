import { Module } from '@nestjs/common';
import { GoogleDriveService } from './google-drive.service';
import { GoogleDriveController } from './google-drive.controller';
import { GoogleStategy } from './google.stategy';

@Module({
  imports: [],
  controllers: [GoogleDriveController],
  providers: [GoogleDriveService, GoogleStategy],
})
export class GoogleDriveModule {}
