import { Injectable } from '@nestjs/common';
import { Dog } from '../interfaces/dog.interface';

@Injectable()
export class DogService {
  private readonly dogs: Dog[] = [];

  bark(): string {
    return ("Wow Wow !!");
  }

  create(cat: Dog) {
    this.dogs.push(cat);
  }

  findAll(): Dog[] {
    return this.dogs;
  }
}