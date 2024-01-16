import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, Request, UnauthorizedException } from '@nestjs/common';
import { UserDTO } from 'src/dtos/user.dots';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  async signUp(@Body() body: UserDTO) {
    return this.authService.signUp(body);
  }

  @HttpCode(HttpStatus.OK) //Serve pra definir um status diferente do 201 para 200 (OK)
  @Post('signin')
  async signIn(@Body() body: UserDTO) {
    return this.authService.signIn(body);
  }

  @Post('logout')
  async logout(@Body() body ) {
    const {userId, token} = body;
   return this.authService.logout(userId, token);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

}
