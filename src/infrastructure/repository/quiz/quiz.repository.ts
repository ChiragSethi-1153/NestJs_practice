import { Quiz } from 'src/domain/quiz/quiz.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from 'src/features/quiz/createQuiz.dto';

@Injectable()
export class QuizRepository extends Repository<Quiz> {
  getAll() {
    return [1, 2, 4, 5];
  }
  createNewQuiz(quizData: CreateQuizDto) {
    return {status: 'Created', quizData};
  }
}
