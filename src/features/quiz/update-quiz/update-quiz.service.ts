import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from 'src/infrastructure/repository/quiz/quiz.repository';
import { UpdateQuizDto } from './updateQuiz.dto';

@Injectable()
export class UpdateQuizService {
  constructor(
    @InjectRepository(QuizRepository)
    private readonly repository: QuizRepository,
  ) {}

  handle(updateData: UpdateQuizDto) {
    return this.repository.updateQuiz(updateData);
  }
}
