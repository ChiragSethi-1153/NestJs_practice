import { Module } from '@nestjs/common';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { QuestionRepository } from 'src/infrastructure/repository/question/question.repository';

@Module({
  controllers: [QuestionController],
  providers: [QuestionService, QuestionRepository]
})
export class QuestionModule {}
