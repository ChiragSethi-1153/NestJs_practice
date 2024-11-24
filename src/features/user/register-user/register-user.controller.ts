import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RegisterUserDto } from './register-user.dto';
import { RegisterUserService } from './register-user.service';

@Controller('register')
export class RegisterUserController {
  constructor(private userService: RegisterUserService) {}

  @Post('/')
  registerUser(
    @Body(
      new ValidationPipe({
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      }),
    )
    userData: RegisterUserDto,
  ) {
    console.log(userData)
    return this.userService.handle(userData);
  }
}
