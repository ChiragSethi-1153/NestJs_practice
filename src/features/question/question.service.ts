import { Injectable } from "@nestjs/common";

@Injectable()
export class QuestionService {
  constructor() {}

  getAllQuestions() {
    return [{question: "Q1"}, {question: "Q2"}]
  }
}