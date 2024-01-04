import { Controller, Get, HttpCode, Post, Header, Redirect, Param, HostParam, Body } from '@nestjs/common';
import { CreateDogDto } from '../Dto/CreateDogDto';
import { DogService } from '../services/dog.service';

@Controller('dogs')
export class DogController {

  constructor(private dogService: DogService) {
    this.dogService = dogService;
  }

  // gets all cats
  @Get()
  findAll(): string {
    // let bark = this.dogService.bark();
    // console.log("barl from service", bark);
    return 'This action returns all dogs';
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log("id", params.id);
    return 'This action returns all dogs';
  }

  @Get()
  @Redirect('https://www.google.com/', 301)
  Redirect(): string {
    return 'This action returns all dogs';
  }

  @Get('ab*cd')
  starMark(): string {
    return 'This route uses wildcard entry';
  }

  // sub route starting with provided domain
  @Get()
  getInfo(@HostParam('account') account): string {
    return account;
  }

  // create a new cat
  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(204)
  create(): string {
    return 'This action adds a dog'
  }


  // create a new cat
  @Post()
  async createOne(@Body() createCatDto: CreateDogDto) {
    console.log("Request Received", createCatDto);
    return 'This action adds a dog'
  }

}