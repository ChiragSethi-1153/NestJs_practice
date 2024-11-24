import { Quiz } from 'src/domain/quiz/quiz.entity';
import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from 'src/features/quiz/create-quiz/createQuiz.dto';
import { UpdateQuizDto } from 'src/features/quiz/update-quiz/updateQuiz.dto';
import { Questions } from 'src/domain/question/question.entity';

@Injectable()
export class QuizRepository extends Repository<Quiz> {
  constructor(dataSource: DataSource) {
    super(Quiz, dataSource.createEntityManager());
  }

  async listAll(): Promise<[Quiz[], number]> {
    return await this.createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt')
      .leftJoinAndSelect('qt.options', 'op')
      .take(1)
      .skip(1)
      .getManyAndCount()
  }

  async getQuizById(id: number) {
    return await this.findOne({ where: { id }, relations: ['questions'] });
  }

  async createNewQuiz(quizData: CreateQuizDto) {
    console.log(quizData);
    return await this.save(quizData);
  }

  async updateQuiz(quizData: UpdateQuizDto) {
    return await this.save(quizData);
  }
}
