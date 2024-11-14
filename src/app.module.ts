import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { catsController } from './cats/cats.controller';
import { catService } from './cats/cats.service';
import { DogsController } from './dogs/dogs.controller';
import { DogsService } from './dogs/dogs.service';

@Module({
  imports: [],
  controllers: [AppController, catsController, DogsController],
  providers: [AppService, catService, DogsService],
})
export class AppModule {}
