import { IsOptional, Length } from "class-validator";
import { Questions } from "src/domain/question/question.entity";

export class UpdateQuizDto {
  @IsOptional()
  @Length(3, 200)
  title: string;

  @IsOptional()
  @Length(3)
  description: string;

  @IsOptional()
  questions: Questions[]

}