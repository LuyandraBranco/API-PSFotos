import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  async allUsers(){
    return this.userService.allUsers();
  }

  @Get('by-username')
  async findUsers(@Query('username') username: string){
    return this.userService.findUserByUsername(username);
  }
}
