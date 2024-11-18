import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from 'src/infrastructure/repository/question/question.repository';
import { CreateQuestionDto } from './createQuestion.dto';
import { Questions } from 'src/domain/question/question.entity';
import { Quiz } from 'src/domain/quiz/quiz.entity';
import { QuizService } from '../quiz/quiz.service';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private readonly repository: QuestionRepository,
    private quizService: QuizService
  ) {}

  getAllQuestions() {
    return this.repository.getAll();
  }

  async createQuestion(questionData: CreateQuestionDto): Promise<Questions> {
    const quiz = await this.quizService.getQuizById(questionData.quizId)
    const newQuestion = await this.repository.createNewQuestion(questionData)
    if(quiz) quiz.questions = [...quiz.questions, newQuestion]
    return newQuestion
  }
}
