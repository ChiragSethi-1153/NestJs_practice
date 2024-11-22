import { Module } from '@nestjs/common';
import { QuestionRepository } from 'src/infrastructure/repository/question/question.repository';
import { ListQuestionController } from './list-questions.controller';
import { ListQuestionService } from './list-questions.service';

@Module({
  controllers: [ListQuestionController],
  providers: [ListQuestionService, QuestionRepository]
})
export class ListQuestionModule {}
