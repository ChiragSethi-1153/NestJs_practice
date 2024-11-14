import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { catService } from './cats.service';
import { createCatDto } from './create-cat.dto';
import { Request, Response } from 'express';

@Controller('cats')
export class catsController {
  constructor(private readonly catService: catService) {}

  @Get()
  @HttpCode(200)
  getCats(): string {
    return this.catService.getCats();
  }

  @Get(':id')
  findAll(@Param() params: any): string {
    const { id } = params;
    console.log(id);
    return 'This action returns all cats';
  }

  @Post()
  @Header('Cache-Control', 'none')
  @Redirect('/dogs', 301)
  async create(
    @Body() createCatDto: createCatDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return 'Cat Created';
  }
}
