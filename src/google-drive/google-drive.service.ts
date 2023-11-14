import { Injectable, UnauthorizedException } from '@nestjs/common';
import { google, drive_v3 } from 'googleapis';

@Injectable()
export class GoogleDriveService {
  private auth2Client: any;
  private drive;

  constructor() {
    this.drive = google.drive({
      version: 'v3',
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

  private async getDriveClient(accessToken: string) {
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token: accessToken });

    return this.drive;
  }

  async listUserFiles(accessToken: string): Promise<drive_v3.Schema$File[]> {
    const drive = await this.getDriveClient(accessToken);

    const response = await drive.files.list({
      auth: accessToken,
    });

    return response.data.files;
  }

  async uploadFile(accessToken: string, file: Express.Multer.File): Promise<drive_v3.Schema$File> {
    const drive = await this.getDriveClient(accessToken);

    const media = {
      mimeType: file.mimetype,
      body: file.buffer,
    };

    const response = await drive.files.create({
      auth: accessToken,
      requestBody: {
        name: file.originalname,
      },
      media: media,
    });

    return response.data;
  }

  async deleteFile(accessToken: string, fileId: string): Promise<void> {
    const drive = await this.getDriveClient(accessToken);

    await drive.files.delete({
      auth: accessToken,
      fileId: fileId,
    });
  }
}
