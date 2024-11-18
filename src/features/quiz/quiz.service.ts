import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './createQuiz.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from 'src/infrastructure/repository/quiz/quiz.repository';
import { Quiz } from 'src/domain/quiz/quiz.entity';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository)
    private readonly repository: QuizRepository,
  ) {}

  getAllQuiz() {
    return this.repository.getAll();
  }

  async getQuizById(id: number) {
    return await this.repository.getQuizById(id)
  }

  createQuiz(quizData: CreateQuizDto) {
  return this.repository.createNewQuiz(quizData);
  }
}
