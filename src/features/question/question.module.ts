import { Module } from '@nestjs/common';
import { CreateQuestionModule } from './create-question/create-question.module';
import { GetQuestionModule } from './get-question/get-question.module';
import { ListQuestionModule } from './list-questions/list-questions.module';

@Module({
  imports: [CreateQuestionModule, GetQuestionModule, ListQuestionModule]
})
export class QuestionModule {}
