import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizService } from './create-quiz.service';
import { CreateQuizDto } from './createQuiz.dto';

@Controller('quiz')
export class CreateQuizController {

  constructor(private quizService: CreateQuizService) {}

  @Post('/')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto) {
    return await this.quizService.handle(quizData)
  }
}
