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
  Body,
  Patch,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
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

  @Post('upload-file')
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('accessToken') accessToken: string,
    @Body('folderName') folderName: string,
  ): Promise<any> {
    const fileStream = new Readable();
    fileStream.push(file.buffer);
    fileStream.push(null);

    const fileReadStream = fileStream as unknown as fs.ReadStream;
    return this.googleDriveService.uploadFileToFolder(
      accessToken,
      fileReadStream,
      file.originalname,
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
