import { Module } from '@nestjs/common';
import { QuestionRepository } from 'src/infrastructure/repository/question/question.repository';
import { GetQuestionController } from './get-question.controller';
import { GetQuestionService } from './get-question.service';

@Module({
  controllers: [GetQuestionController],
  providers: [GetQuestionService, QuestionRepository]
})
export class GetQuestionModule {}
