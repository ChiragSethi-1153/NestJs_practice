import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ListQuizService } from './list-quiz.service';


@Controller('quiz')
export class ListQuizController {

  constructor(private quizService: ListQuizService) {}

  @Get('/')
  getAllQuiz() {
    return this.quizService.handle()
  }
}
