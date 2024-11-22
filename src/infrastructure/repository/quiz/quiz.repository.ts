import { Quiz } from 'src/domain/quiz/quiz.entity';
import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from 'src/features/quiz/createQuiz.dto';
import { UpdateQuizDto } from 'src/features/quiz/updateQuiz.dto';

@Injectable()
export class QuizRepository extends Repository<Quiz> {

  constructor(dataSource: DataSource) {
    super(Quiz, dataSource.createEntityManager());
  }

  async listAll() {
    return await this.find();
  }

  async getQuizById(id: number) {
    return await this.findOne({where: {id}, relations: ['questions']})
  }

  async createNewQuiz(quizData: CreateQuizDto) {
    console.log(quizData)
    return await this.save(quizData);
  }

  async updateQuiz(quizData:UpdateQuizDto){
    return await this.save(quizData)
  }

}
