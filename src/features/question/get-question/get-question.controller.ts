import { Body, Controller, Get, HttpCode, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { GetQuestionService } from "./get-question.service";

@Controller('questions')
export class GetQuestionController {
  constructor(private readonly questionService: GetQuestionService) {}

  @Get('/:id')
  getQuestionById(@Param('id') id: number) {
    return this.questionService.handle(id)
  }

}