import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UpdateQuizService } from './update-quiz.service';
import { UpdateQuizDto } from './updateQuiz.dto';


@Controller('quiz')
export class UpdateQuizController {

  constructor(private quizService: UpdateQuizService) {}

  @Put('/')
  updateQuiz(@Body() updateData: UpdateQuizDto) {
    return this.quizService.handle(updateData)
  }
}
