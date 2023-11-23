import { config } from 'dotenv';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';

config();

@Injectable()
export class GoogleStategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: "64041320105-5b1e18ujms0n687h0tg8bh16nkcvjf4f.apps.googleusercontent.com",
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
