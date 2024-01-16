import { config } from 'dotenv';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';

config();

@Injectable()
export class GoogleStategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: "380327237144-9aj1o6v8hdh8f89s73htd1j4oasi63ti.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: 'http://localhost:3000/auth/google/callback',
      scope: ['email','profile',  "https://www.googleapis.com/auth/drive",],
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const {name, emails,photos}= profile;
    const user = {
        email: emails[0].value,
        firstName: name.givenName,
        lastName: name.familyName,
        pictures: photos[0].value,
        accessToken
    }
    done(null,user);
  }
}
