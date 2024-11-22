import { Module } from '@nestjs/common';

import { QuestionRepository } from 'src/infrastructure/repository/question/question.repository';
import { QuizRepository } from 'src/infrastructure/repository/quiz/quiz.repository';
import { CreateQuestionController, } from './create-question.controller';
import { CreateQuestionService,  } from './create-question.service';

@Module({
  controllers: [CreateQuestionController],
  providers: [CreateQuestionService, QuestionRepository, QuizRepository]
})
export class CreateQuestionModule {}
