import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { QuestionService } from "./question.service";
import { CreateQuestionDto } from "./createQuestion.dto";

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get('/')
  getAllQuestions(){
    return this.questionService.getAllQuestions()
  }

  @Post('/')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  createQuestion(@Body() questionData: CreateQuestionDto ){
    return this.questionService.createQuestion(questionData)
  }

}