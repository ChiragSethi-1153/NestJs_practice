import { IsNotEmpty, IsOptional, Length } from "class-validator";
import { Questions } from "src/domain/question/question.entity";

export class CreateQuizDto {
  @IsNotEmpty()
  @Length(3, 200)
  title: string;

  @IsNotEmpty()
  @Length(3)
  description: string;

  @IsOptional()
  questions: Questions[]

}