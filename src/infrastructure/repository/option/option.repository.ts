import { Injectable } from '@nestjs/common';
import { Option } from 'src/domain/option/option.entity';
import { CreateOptionDto } from 'src/features/option/create-option/create-option.dto';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class OptionRepository extends Repository<Option> {
  constructor(dataSource: DataSource) {
    super(Option, dataSource.createEntityManager());
  }

  async listOptions() {
    return await this.find();
  }

  async findOption(id: number) {
    return await this.findOne({where: {id}})
  }

  async saveOption(optionData: CreateOptionDto): Promise<Option> {
    console.log('saving')
    return this.save(optionData);
  }

}
