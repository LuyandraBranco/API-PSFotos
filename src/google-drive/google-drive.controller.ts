import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  UploadedFiles,
  UseInterceptors,
  UseGuards,
  Req,
  Body,
  Patch,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { GoogleDriveService } from './google-drive.service';
import { Express } from 'express';
import { Readable } from 'stream';
import * as fs from 'fs';

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

  @Post('create-folder')
  async createFolder(
    @Body() body: { folderName: string; accessToken: string },
  ): Promise<any> {
    const { folderName, accessToken } = body;
    return this.googleDriveService.createFolder(accessToken, folderName);
  }

  @Get('list-files')
  async listFiles(
    @Body() body: { folderName: string; accessToken: string },
  ): Promise<any> {
    const { folderName, accessToken } = body;
    return this.googleDriveService.listFilesInFolder(accessToken, folderName);
  }

  @Post('upload-files')
  @UseInterceptors(FilesInterceptor('images', 10)) // 'images' é o nome do campo de entrada para várias imagens
  async uploadFiles(
    @UploadedFiles() files: Express.Multer.File[],
    @Body('accessToken') accessToken: string,
    @Body('folderName') folderName: string,
  ): Promise<any> {
    const fileStreams: fs.ReadStream[] = [];
    const filenames: string[] = [];
  
    for (const file of files) {
      const fileStream = new Readable();
      fileStream.push(file.buffer);
      fileStream.push(null);
      fileStreams.push(fileStream as unknown as fs.ReadStream);
      filenames.push(file.originalname);
    }
  
    return this.googleDriveService.uploadFilesToFolder(
      accessToken,
      fileStreams,
      filenames,
      folderName,
    );
  }
  

  @Delete('delete-file')
  async deleteFile(
    @Body() body: { folderName: string; accessToken: string },
  ): Promise<any> {
    const { folderName, accessToken } = body;
    return this.googleDriveService.deleteFileFromFolder(
      accessToken,
      folderName,
    );
  }
}