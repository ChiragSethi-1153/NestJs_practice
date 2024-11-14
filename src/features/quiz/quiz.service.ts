import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './createQuiz.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from 'src/infrastructure/repository/quiz/quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository)
    private readonly repository: QuizRepository,
  ) {}

  getAllQuiz() {
    return this.repository.getAll();
  }

  createQuiz(quizData: CreateQuizDto) {
  return this.repository.createNewQuiz(quizData);
  }
}
