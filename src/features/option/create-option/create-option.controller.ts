import {
  Body,
  Controller,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateOptionService } from './create-option.service';
import { CreateOptionDto } from './create-option.dto';
import { Option } from 'src/domain/option/option.entity';

@Controller('options')
export class CreateOptionController {
  constructor(private readonly OptionService: CreateOptionService) {}

  @Post('/')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createOption(@Body() optionData: CreateOptionDto) {
    return await this.OptionService.handle(optionData);
  }
}
