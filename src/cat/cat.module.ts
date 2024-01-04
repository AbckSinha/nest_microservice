import { Module } from '@nestjs/common';
import { CatsController } from '../cat/controllers/cat.controller'
import { CatsService } from './services/cat.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}