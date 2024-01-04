import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatsModule } from './cat/cat.module';
import { DogsModule } from './dogs/dog.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [CatsModule, DogsModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('dogs');
  }
}
