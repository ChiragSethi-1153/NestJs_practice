import { Optional } from "@nestjs/common";
import { IsNotEmpty, Length } from "class-validator";
import { Option } from "src/domain/option/option.entity";

export class UpdateQuestionDto {
  @Optional()
  @Length(3)
  question: string;


  @Optional()
  options: Option[]
}