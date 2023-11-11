import { Module } from '@nestjs/common';
import { AuthGoogleService } from './auth-google.service';
import { AuthGoogleController } from './auth-google.controller';
import { GoogleStategy } from './google.stategy';

@Module({
    imports: [],
    controllers: [AuthGoogleController],
    providers: [AuthGoogleService, GoogleStategy]
})
export class AuthGoogleModule {}
