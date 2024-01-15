import { Injectable } from '@nestjs/common';
import { google, drive_v3 } from 'googleapis';
import { ReadStream } from 'fs';
import * as fs from 'fs';
import { Readable } from 'stream';

@Injectable()
export class GoogleDriveService {
  private auth2Client: any;
  private drive;

  constructor() {
    this.drive = google.drive({
      version: 'v3',
      auth: null,
    });
  }

  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    this.auth2Client = new google.auth.OAuth2();
    this.auth2Client.setCredentials({
      access_token: req.user.accessToken,
      refresh_token: req.user.refreshToken,
    });

    return {
      message: 'User Info from Google',
      user: req.user,
    };
  }

  //Função pra criar ficheiro
  async createFolder(
    accessToken: string,
    folderName: string,
  ): Promise<drive_v3.Schema$File> {
    const auth2Client = this.getAuthClient(accessToken);

    const fileMetadata: drive_v3.Schema$File = {
      name: folderName,
      mimeType: 'application/vnd.google-apps.folder',
    };

    const response = await this.drive.files.create({
      requestBody: fileMetadata,
      auth: auth2Client,
    });

    return response.data;
  }

  //Função pra listar ficheiros de uma determinada pasta
  async listFilesInFolder(
    accessToken: string,
    folderName: string,
  ): Promise<drive_v3.Schema$File[]> {
    const auth2Client = this.getAuthClient(accessToken);

    const folderId = await this.getFolderId(auth2Client, folderName);

    const response = await this.drive.files.list({
      auth: auth2Client,
      q: `'${folderId}' in parents`,
    });

    return response.data.files;
  }

  async uploadFilesToFolder(
    accessToken: string,
    fileStreams: ReadStream[],
    filenames: string[],
    folderName: string,
  ): Promise<drive_v3.Schema$File[]> {
    const auth2Client = this.getAuthClient(accessToken);
    const folderId = await this.getFolderId(auth2Client, folderName);
  
    const uploadedFiles: drive_v3.Schema$File[] = [];
  
    for (let i = 0; i < fileStreams.length; i++) {
      const fileMetadata: drive_v3.Schema$File = {
        name: filenames[i],
      };
  
      const media = {
        mimeType: ['image/jpeg', 'image/jpg', 'image/png'],
        body: fileStreams[i],
      };
  
      const response = await this.drive.files.create({
        requestBody: {
          fileMetadata,
          parents: [folderId],
        },
        media,
        auth: auth2Client,
      });
  
      uploadedFiles.push(response.data);
    }
  
    return uploadedFiles;
  }
  

  //Função pra apagar uma pasta
  async deleteFileFromFolder(
    accessToken: string,
    folderName: string,
  ): Promise<void> {
    const auth2Client = this.getAuthClient(accessToken);
    const response = await this.drive.files.list({
      auth: auth2Client,
      q: `name='${folderName}' and mimeType='application/vnd.google-apps.folder' and trashed=false`,
      fields: 'files(id, name)',
    });

    const folder = response.data.files[0];
    if (folder) {
      await this.drive.files.delete({
        fileId: folder.id,
        auth: auth2Client,
      });
      console.log(`Pasta '${folderName}' foi deletada.`);
    } else {
      console.log(`Pasta '${folderName}' não encontrada.`);
    }
  }

  private async getFolderId(auth: any, folderName: string): Promise<string> {
    const response = await this.drive.files.list({
      auth: auth,
      q: `name='${folderName}' and mimeType='application/vnd.google-apps.folder' and trashed=false`,
    });

    if (response.data.files.length > 0) {
      return response.data.files[0].id;
    } else {
      throw new Error(`Folder '${folderName}' not found.`);
    }
  }

  private getAuthClient(accessToken: string) {
    const auth2Client = new google.auth.OAuth2();
    auth2Client.setCredentials({
      access_token: accessToken,
    });
    return auth2Client;
  }

  async uploadFilesToFolder2(
    accessToken: string,
    fileStreams: fs.ReadStream[],
    filenames: string[],
    folderId: string,
  ): Promise<string[]> {
    const drive = google.drive({ version: 'v3', auth: accessToken });

    const uploadedFileIds: string[] = [];

    for (let i = 0; i < fileStreams.length; i++) {
      const fileStream = fileStreams[i];
      const filename = filenames[i];

      const media = {
        mimeType: 'image/jpeg', // Substitua pelo tipo MIME correto do seu arquivo
        body: fileStream,
      };

      const fileMetadata = {
        name: filename,
        parents: [folderId], // Usando o ID da pasta como pai
      };

      const uploadedFile = await drive.files.create({
        requestBody: fileMetadata,
        media,
      });

      uploadedFileIds.push(uploadedFile.data.id);
    }

    return uploadedFileIds;
  }
}

