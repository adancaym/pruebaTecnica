import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandingController } from './branding/branding.controller';
import { BrandingService } from './branding/branding.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { ProvidersModule } from './providers/providers.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ProvidersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'shoppingDB',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController, BrandingController, AuthController],
  providers: [AppService, BrandingService, AuthService],
})
export class AppModule {}
