import { Module } from '@nestjs/common';
import { CreateOptionService } from './create-option.service';
import { OptionRepository } from 'src/infrastructure/repository/option/option.repository';
import { CreateOptionController } from './create-option.controller';
import { QuestionRepository } from 'src/infrastructure/repository/question/question.repository';

@Module({
  controllers: [CreateOptionController],
  providers: [
    CreateOptionService,
    OptionRepository,
    QuestionRepository
  ],
})
export class CreateOptionModule {}
