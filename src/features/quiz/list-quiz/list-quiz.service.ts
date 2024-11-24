import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from 'src/infrastructure/repository/quiz/quiz.repository';

@Injectable()
export class ListQuizService {
  constructor(
    @InjectRepository(QuizRepository)
    private readonly repository: QuizRepository,
  ) {}

  handle() {
    return this.repository.listAll();
  }
}
