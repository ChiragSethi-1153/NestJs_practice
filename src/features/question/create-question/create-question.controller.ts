import { Body, Controller, Get, HttpCode, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionService } from "./create-question.service";
import { CreateQuestionDto } from "./createQuestion.dto";
import { Questions } from "src/domain/question/question.entity";

@Controller('questions')
export class CreateQuestionController {
  constructor(private readonly questionService: CreateQuestionService) {}



  @Post('/')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createQuestion(@Body() questionData: CreateQuestionDto ): Promise<Questions>{
    return await this.questionService.handle(questionData)
  }

}