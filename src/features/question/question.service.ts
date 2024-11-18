import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from 'src/infrastructure/repository/question/question.repository';
import { CreateQuestionDto } from './createQuestion.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private readonly repository: QuestionRepository,
  ) {}

  getAllQuestions() {
    return this.repository.getAll();
  }

  createQuestion(questionData: CreateQuestionDto) {
    return this.repository.createNewQuestion(questionData)
  }
}
