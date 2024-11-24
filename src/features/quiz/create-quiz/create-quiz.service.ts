import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './createQuiz.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from 'src/infrastructure/repository/quiz/quiz.repository';

@Injectable()
export class CreateQuizService {
  constructor(
    @InjectRepository(QuizRepository)
    private readonly repository: QuizRepository,
  ) {}

  async handle(quizData: CreateQuizDto) {
  return await this.repository.createNewQuiz(quizData);
  }
}
