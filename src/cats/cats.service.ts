import { Injectable } from '@nestjs/common';

@Injectable()
export class catService {
  getCats(): string {
    return 'cats';
  }
}
