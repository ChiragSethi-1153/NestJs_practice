import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOptionDto } from './create-option.dto';
import { OptionRepository } from 'src/infrastructure/repository/option/option.repository';
import { Option } from 'src/domain/option/option.entity';
import { QuestionRepository } from 'src/infrastructure/repository/question/question.repository';

@Injectable()
export class CreateOptionService {
  constructor(
    @InjectRepository(OptionRepository)
    private readonly repository: OptionRepository,
    @InjectRepository(QuestionRepository)
    private readonly questionRepo: QuestionRepository,
  ) {}

  async handle(OptionData: CreateOptionDto) {
    const question = await this.questionRepo.findQuestion(
      OptionData.questionId,
    );
    console.log(question)
    const newOption = await this.repository.saveOption(OptionData);

    if (question) {
      question.options = [...question.options, newOption];
      await this.questionRepo.updateQuestion(question)
    }

    return newOption;
  }
}
