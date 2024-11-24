import { Module } from '@nestjs/common';
import { CreateQuizModule } from './create-quiz/create-quiz.module';
import { GetQuizModule } from './get-quiz/get-quiz.module';
import { ListQuizModule } from './list-quiz/list-quiz.module';
import { UpdateQuizModule } from './update-quiz/update-quiz.module';

@Module({
  imports: [CreateQuizModule, GetQuizModule, ListQuizModule, UpdateQuizModule]
})
export class QuizModule {}