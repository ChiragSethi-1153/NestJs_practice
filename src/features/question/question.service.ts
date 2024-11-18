import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from 'src/infrastructure/repository/question/question.repository';
import { CreateQuestionDto } from './createQuestion.dto';
import { Questions } from 'src/domain/question/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private readonly repository: QuestionRepository,
  ) {}

  getAllQuestions() {
    return this.repository.getAll();
  }

  async createQuestion(questionData: CreateQuestionDto): Promise<Questions> {
    return await this.repository.createNewQuestion(questionData)
  }
}
