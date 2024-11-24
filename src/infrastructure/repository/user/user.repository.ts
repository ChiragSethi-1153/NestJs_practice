import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Users } from 'src/domain/user/user.entity';
import { RegisterUserDto } from 'src/features/user/register-user/register-user.dto';

@Injectable()
export class UserRepository extends Repository<Users> {
  constructor(dataSource: DataSource) {
    super(Users, dataSource.createEntityManager());
  }

  async listAll() {
    return await this.find()
  }

  async getUser(id: number) {
    return await this.find({ where: { id } });
  }

  async saveUser(UserData: RegisterUserDto) {
    console.log(UserData);
    return await this.save(UserData);
  }

//   async updateUser(UserData: UpdateUserDto) {
//     return await this.save(UserData);
//   }
}
