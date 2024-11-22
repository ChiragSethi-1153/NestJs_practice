import { Optional } from '@nestjs/common';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty()
  @Length(3)
  option: string;

  @Optional()
  isCorrect: boolean;

  @IsNotEmpty()
  questionId: number

}