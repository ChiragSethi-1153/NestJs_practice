import { Controller, Get } from '@nestjs/common';
import { ListQuestionService } from './list-questions.service';

@Controller('questions')
export class ListQuestionController {
  constructor(private readonly questionService: ListQuestionService) {}

  @Get('/')
  listQuestions() {
    return this.questionService.handle();
  }
}
