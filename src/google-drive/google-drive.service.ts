import { Injectable } from '@nestjs/common';
import { google, drive_v3 } from 'googleapis';
import * as fs from 'fs';

@Injectable()
export class GoogleDriveService {
  private auth2Client: any;

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

  async saveText(sometext: string) {
    const drive = google.drive({ version: 'v3', auth: this.auth2Client });

    try {
      const response = await drive.files.create({
        requestBody: {
          name: 'test.txt',
          mimeType: 'text/plain',
        },
        media: {
          mimeType: 'text/plain',
          body: sometext,
        },
      });

      console.log(response.data); // Exemplo: Log da resposta do Google Drive API

      return 'Success';
    } catch (error) {
      console.error(error);
      return 'Error saving text';
    }
  }

  async saveImage() {
    const drive = google.drive({ version: 'v3', auth: this.auth2Client });

    try {
      const response = await drive.files.create({
        requestBody: {
          name: 'nome_da_imagem.jpg',
          mimeType: 'image/jpeg',
        },
        media: {
          mimeType: 'image/jpeg',
          body: fs.createReadStream('caminho/para/imagem.jpg'),
        },
      });

      console.log(response.data); // Exemplo: Log da resposta do Google Drive API

      return 'Success Image';
    } catch (error) {
      console.error(error);
      return 'Error saving image';
    }
  }
}
