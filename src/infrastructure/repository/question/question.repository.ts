import { Injectable } from "@nestjs/common";
import { Questions } from "src/domain/question/question.entity";
import { CreateQuestionDto } from "src/features/question/createQuestion.dto";
import { Repository } from "typeorm";

@Injectable()
export class QuestionRepository extends Repository<Questions> {

  getAll() {
    return [{ question: 'Q1' }, { question: 'Q2' }]
  }

  createNewQuestion(questionData: CreateQuestionDto) {
    return ["Question Created", questionData]
  }

}