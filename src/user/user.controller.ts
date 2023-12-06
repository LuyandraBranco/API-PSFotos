import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { retry } from 'rxjs';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  async allUsers() {
    return this.userService.allUsers();
  }

  @Get('by-username')
  async findUsers(@Query('username') username: string) {
    return this.userService.findUserByUsername(username);
  }

  @Get('id/:username')
  async getIdByUsername(@Param('username') username: string): Promise<number | null> {
    return this.userService.getIdByUsername(username);
  }
}
