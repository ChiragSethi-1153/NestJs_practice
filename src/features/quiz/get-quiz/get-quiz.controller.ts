import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { GetQuizService } from './get-quiz.service';

@Controller('quiz')
export class GetQuizController {

  constructor(private quizService: GetQuizService) {}

  @Get('/:id')
  async getQuizById(@Param('id', ParseIntPipe) id: number) {
    return await this.quizService.handle(id)
  }

}
