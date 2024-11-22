import { Module } from '@nestjs/common';
import { CreateOptionModule } from './create-option/create-option.module';

@Module({
  imports: [CreateOptionModule],
})
export class OptionModule {}
