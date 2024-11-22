import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from 'src/infrastructure/repository/question/question.repository';


@Injectable()
export class GetQuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private readonly repository: QuestionRepository,

  ) {}

  async handle(id: number) {
    return await this.repository.findQuestion(id)
  }

}
