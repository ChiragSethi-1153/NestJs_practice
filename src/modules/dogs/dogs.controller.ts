import { Controller, Get, HttpCode } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogService: DogsService) {}

  @Get()
  @HttpCode(301)
  getDogs() {
    return 'dogs';
  }
}
