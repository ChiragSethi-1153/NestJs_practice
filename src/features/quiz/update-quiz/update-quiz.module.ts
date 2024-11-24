import { Module } from '@nestjs/common';
import { QuizRepository } from 'src/infrastructure/repository/quiz/quiz.repository';
import { UpdateQuizController } from './update-quiz.controller';
import { UpdateQuizService } from './update-quiz.service';

@Module({
  controllers: [UpdateQuizController],
  providers: [UpdateQuizService, QuizRepository],
  exports: [UpdateQuizService, QuizRepository]
})
export class UpdateQuizModule {}
