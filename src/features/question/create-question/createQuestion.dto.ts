import { Optional } from "@nestjs/common";
import { IsNotEmpty, Length } from "class-validator";
import { Option } from "src/domain/option/option.entity";

export class CreateQuestionDto {
  @IsNotEmpty()
  @Length(3)
  question: string;

  @IsNotEmpty()
  quizId: number

  @Optional()
  options: Option[]
}