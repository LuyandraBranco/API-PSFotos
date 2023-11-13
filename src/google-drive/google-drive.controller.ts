import { Controller, Get, UseGuards, Req, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GoogleDriveService } from './google-drive.service';

@Controller('auth')
export class GoogleDriveController {
  constructor(private readonly googleDriveService: GoogleDriveService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleAuth() {
    // Este endpoint irá redirecionar para a página de autenticação do Google
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {
    return this.googleDriveService.googleLogin(req);
  }

  @Get('saveText/:sometext')
  @UseGuards(AuthGuard('google'))
  async saveText(@Param('sometext') sometext: string) {
    return this.googleDriveService.saveText(sometext);
  }

  @Get('saveImage')
  @UseGuards(AuthGuard('google'))
  async saveImage() {
    return this.googleDriveService.saveImage();
  }
}
