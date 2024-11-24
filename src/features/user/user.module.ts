import { Module } from '@nestjs/common';
import { RegisterUserModule } from './register-user/register-user.module';

@Module({
    imports: [RegisterUserModule]
})
export class UserModule {}