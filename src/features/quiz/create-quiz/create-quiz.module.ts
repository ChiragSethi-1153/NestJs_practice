import { Module } from '@nestjs/common';
import { QuizRepository } from 'src/infrastructure/repository/quiz/quiz.repository';
import { CreateQuizController } from './create-quiz.controller';
import { CreateQuizService } from './create-quiz.service';

@Module({
  controllers: [CreateQuizController],
  providers: [CreateQuizService, QuizRepository],
  exports: [CreateQuizService, QuizRepository]
})
export class CreateQuizModule {}
