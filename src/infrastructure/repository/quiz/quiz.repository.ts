import { Quiz } from 'src/domain/quiz/quiz.entity';
import { DataSource, FindOneOptions, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from 'src/features/quiz/createQuiz.dto';

@Injectable()
export class QuizRepository extends Repository<Quiz> {

  constructor(dataSource: DataSource) {
    super(Quiz, dataSource.createEntityManager());
  }

  getAll() {
    return [1, 2, 4, 5];
  }

  async getQuizById(id: number) {
    return this.findOne({where: {id}, relations: ['questions'] })
  }

  createNewQuiz(quizData: CreateQuizDto) {
    return {status: 'Created', quizData};
  }
}
