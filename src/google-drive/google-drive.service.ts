import { Injectable } from '@nestjs/common';
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

  //Lista todas as fotos do user
  async listUserFiles(): Promise<drive_v3.Schema$File[]> {
    if (
      !this.auth2Client ||
      !this.auth2Client.credentials ||
      !this.auth2Client.credentials.access_token
    ) {
      throw new Error('Authentication credentials not set.');
    }

    const response = await this.drive.files.list({
      auth: this.auth2Client,
    });

    return response.data.files;
  }

  async uploadFile(file: Express.Multer.File): Promise<drive_v3.Schema$File> {
    if (
      !this.auth2Client ||
      !this.auth2Client.credentials ||
      !this.auth2Client.credentials.access_token
    ) {
      throw new Error('Authentication credentials not set.');
    }

    const media = {
      mimeType: file.mimetype,
      body: file.buffer,
    };

    const response = await this.drive.files.create({
      requestBody: {
        name: file.originalname,
      },
      media: media,
      auth: this.auth2Client,
    });

    return response.data;
  }

  async deleteFile(fileId: string): Promise<void> {
    if (
      !this.auth2Client ||
      !this.auth2Client.credentials ||
      !this.auth2Client.credentials.access_token
    ) {
      throw new Error('Authentication credentials not set.');
    }

    await this.drive.files.delete({
      fileId: fileId,
      auth: this.auth2Client,
    });
  }
}
