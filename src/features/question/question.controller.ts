import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { QuestionService } from "./question.service";
import { CreateQuestionDto } from "./createQuestion.dto";
import { Questions } from "src/domain/question/question.entity";

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
  async createQuestion(@Body() questionData: CreateQuestionDto ): Promise<Questions>{
    return await this.questionService.createQuestion(questionData)
  }

}