import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './features/quiz/quiz.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { QuestionModule } from './features/question/question.module';
import { OptionModule } from './features/option/option.module';

@Module({
  imports: [
    QuizModule,
    TypeOrmModule.forRoot(typeormConfig),
    ConfigModule.forRoot({ isGlobal: true }),
    QuestionModule,
    OptionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
