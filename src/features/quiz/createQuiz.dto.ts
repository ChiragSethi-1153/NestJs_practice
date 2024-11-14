import { IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto {
  @IsNotEmpty()
  @Length(3, 200)
  title: string;

  @IsNotEmpty()
  @Length(3)
  description: string;
}