import { Module } from '@nestjs/common';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { QuestionRepository } from 'src/infrastructure/repository/question/question.repository';
import { QuizModule } from '../quiz/quiz.module';

@Module({
  controllers: [QuestionController],
  providers: [QuestionService, QuestionRepository],
  imports: [QuizModule]
})
export class QuestionModule {}
