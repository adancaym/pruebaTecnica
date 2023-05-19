import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProviderEntity } from './provider.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProviderEntity])],
  controllers: [ProvidersController],
  providers: [ProvidersService],
})
export class ProvidersModule {}
