import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from 'src/infrastructure/repository/question/question.repository';
import { CreateQuestionDto } from './createQuestion.dto';
import { Questions } from 'src/domain/question/question.entity';
import { QuizRepository } from 'src/infrastructure/repository/quiz/quiz.repository';

@Injectable()
export class CreateQuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private readonly repository: QuestionRepository,

    @InjectRepository(QuizRepository)
    private readonly QuizRepo: QuizRepository,
  ) {}

  async handle(questionData: CreateQuestionDto): Promise<Questions> {

    const quiz = await this.QuizRepo.getQuizById(questionData.quizId)
    const newQuestion = await this.repository.createNewQuestion(questionData)

    if(quiz){
      quiz.questions = [...quiz.questions, newQuestion]
      await this.QuizRepo.updateQuiz(quiz)
    }
      return newQuestion
  }
}
