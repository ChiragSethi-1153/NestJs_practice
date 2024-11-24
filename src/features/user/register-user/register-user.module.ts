import { Module } from '@nestjs/common';
import { UserRepository } from 'src/infrastructure/repository/user/user.repository';
import { RegisterUserController } from './register-user.controller';
import { RegisterUserService } from './register-user.service';

@Module({
    controllers: [RegisterUserController],
    providers: [RegisterUserService, UserRepository]
})
export class RegisterUserModule {}