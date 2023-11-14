import { Controller, Get, Post, Delete, Param, UploadedFile, UseInterceptors, UseGuards, Req } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { GoogleDriveService } from './google-drive.service';
import { Express } from 'express';

@Controller()
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

  @Get(':userId/files')
  @UseGuards(AuthGuard('jwt'))
  async getUserFiles(@Param('userId') userId: string,  @Param('accessToken') accessToken: string): Promise<any> {
    return this.googleDriveService.listUserFiles(accessToken);
  }

  @Post(':userId/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@Param('userId') userId: string, @UploadedFile() file: Express.Multer.File,  @Param('accessToken') accessToken: string): Promise<any> {
    return this.googleDriveService.uploadFile(accessToken, file);
  }

  @Delete(':userId/files/:fileId')
  @UseGuards(AuthGuard('jwt'))
  async deleteFile(@Param('userId') userId: string, @Param('fileId') fileId: string,  @Param('accessToken') accessToken: string): Promise<void> {
    return this.googleDriveService.deleteFile(accessToken, fileId);
  }

}