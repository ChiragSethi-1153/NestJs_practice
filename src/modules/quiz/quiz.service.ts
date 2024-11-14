import { Injectable } from "@nestjs/common";
import { CreateQuizDto } from "./dto/createQuiz.dto";

@Injectable()
export class QuizService {
  getAllQuiz() {
    return [1,2,3, "from the service"]
  }

  createQuiz(quizData: CreateQuizDto) {
    return quizData
  }
}