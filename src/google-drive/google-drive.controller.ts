import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  UploadedFile,
  UseInterceptors,
  UseGuards,
  Req,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { GoogleDriveService } from './google-drive.service';
import { Express } from 'express';
import { google, drive_v3 } from 'googleapis';

@Controller('')
export class GoogleDriveController {
  constructor(private readonly googleDriveService: GoogleDriveService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  googleAuth() {
    // Este endpoint irá redirecionar para a página de autenticação do Google
  }

  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {
    return this.googleDriveService.googleLogin(req);
  }

  @Get('list-user-files')
  @UseGuards(AuthGuard('google'))
  async listUserFiles(): Promise<drive_v3.Schema$File[]> {
    return this.googleDriveService.listUserFiles();
  }

  @Post('/google-drive')
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(AuthGuard('google'))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<any> {
    return this.googleDriveService.uploadFile(file);
  }

  @Delete('delete-file')
  @UseGuards(AuthGuard('google'))
  async deleteFile(@Param('fileId') fileId: string): Promise<void> {
    return this.googleDriveService.deleteFile(fileId);
  }
}
