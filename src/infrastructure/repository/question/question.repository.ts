import { Injectable } from '@nestjs/common';
import { Questions } from 'src/domain/question/question.entity';
import { CreateQuestionDto } from 'src/features/question/create-question/createQuestion.dto';
import { UpdateQuestionDto } from 'src/features/question/update-question/update-question.dto';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class QuestionRepository extends Repository<Questions> {
  constructor(dataSource: DataSource) {
    super(Questions, dataSource.createEntityManager());
  }

  async listQuestions() {
    return await this.find();
  }

  async findQuestion(id: number) {
    return await this.findOne({where: {id}, relations: ['quiz','options']})
  }

  async createNewQuestion(questionData: CreateQuestionDto): Promise<Questions> {
    console.log('saving')
    return this.save(questionData);
  }

  async updateQuestion(questionData: UpdateQuestionDto) {
    return await this.save(questionData)
  }
}
