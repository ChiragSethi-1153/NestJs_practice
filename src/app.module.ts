import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { catsController } from './modules/cats/cats.controller';
import { catService } from './modules/cats/cats.service';
import { DogsController } from './modules/dogs/dogs.controller';
import { DogsService } from './modules/dogs/dogs.service';
import { QuizModule } from './modules/quiz/quiz.module';
// import { TypeOrmModule } from './infrastructure/database/type-orm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
// import { typeormConfig } from './config/typeorm.config';

@Module({
  imports: [
    QuizModule,
    TypeOrmModule.forRoot(typeormConfig),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController, catsController, DogsController],
  providers: [AppService, catService, DogsService],
})
export class AppModule {}
