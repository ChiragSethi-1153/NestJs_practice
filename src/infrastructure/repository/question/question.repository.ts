import { Injectable } from '@nestjs/common';
import { Questions } from 'src/domain/question/question.entity';
import { CreateQuestionDto } from 'src/features/question/createQuestion.dto';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class QuestionRepository extends Repository<Questions> {
  constructor(dataSource: DataSource) {
    super(Questions, dataSource.createEntityManager());
  }

  getAll() {
    return [{ question: 'Q1' }, { question: 'Q2' }];
  }

  async createNewQuestion(questionData: CreateQuestionDto): Promise<Questions> {
    console.log('saving')
    return this.save(questionData);
  }
}
