import { Injectable, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from 'src/infrastructure/repository/quiz/quiz.repository';

@Injectable()
export class GetQuizService {
  constructor(
    @InjectRepository(QuizRepository)
    private readonly repository: QuizRepository,
  ) {}

  async handle (id:number) {
    return await this.repository.getQuizById(id)
  }
}
