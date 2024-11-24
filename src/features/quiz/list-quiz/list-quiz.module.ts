import { Module } from '@nestjs/common';
import { QuizRepository } from 'src/infrastructure/repository/quiz/quiz.repository';
import { ListQuizController } from './list-quiz.controller';
import { ListQuizService } from './list-quiz.service';

@Module({
  controllers: [ListQuizController],
  providers: [ListQuizService, QuizRepository],
  exports: [ListQuizService, QuizRepository]
})
export class ListQuizModule {}
