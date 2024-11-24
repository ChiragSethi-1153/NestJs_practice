import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/infrastructure/repository/user/user.repository';
import { RegisterUserDto } from './register-user.dto';

@Injectable()
export class RegisterUserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly repository: UserRepository,
  ) {}

  handle(userData: RegisterUserDto) {
    return this.repository.saveUser(userData);
  }
}
