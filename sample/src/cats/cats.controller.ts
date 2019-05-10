import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { Cat } from './interfaces/cats.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { ForbiddenException } from 'src/exceptions/forbidden.exception';
import { HttpExceptionFilter } from 'src/exceptions/http-exception.filter';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @UseFilters(HttpExceptionFilter)
  async create(@Body() createCatDto: CreateCatDto) {
    throw new ForbiddenException();
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): string {
    // throw new HttpException('Forbibdden', HttpStatus.FORBIDDEN)
    // throw new ForbiddenException();
    return `This action returns #${params.id} cat`;
  }
}
