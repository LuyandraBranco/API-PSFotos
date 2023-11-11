import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthGoogleService {
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }
    return {
      return: 'User Info from Google',
      user: req.user,
    };
  }
}
