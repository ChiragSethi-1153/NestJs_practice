import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from 'src/infrastructure/repository/question/question.repository';


@Injectable()
export class ListQuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private readonly repository: QuestionRepository,
  ) {}

  async handle() {
    return this.repository.listQuestions();
  }

}
