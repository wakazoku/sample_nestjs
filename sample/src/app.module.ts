import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { CatsController } from './cats/cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PhotoModule } from './photo/photo.module';
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';

@Module({
  imports: [CatsModule, TypeOrmModule.forRoot(), PhotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private readonly connection: Connection) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({
        path: 'cats',
        method: RequestMethod.POST,
      })
      .forRoutes(CatsController);
  }
}
