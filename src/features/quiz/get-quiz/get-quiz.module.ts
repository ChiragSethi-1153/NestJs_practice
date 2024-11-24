import { Module } from '@nestjs/common';
import { QuizRepository } from 'src/infrastructure/repository/quiz/quiz.repository';
import { GetQuizController } from './get-quiz.controller';
import { GetQuizService } from './get-quiz.service';

@Module({
  controllers: [GetQuizController],
  providers: [GetQuizService, QuizRepository],
  exports: [GetQuizService, QuizRepository]
})
export class GetQuizModule {}
