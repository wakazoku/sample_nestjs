import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  async findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Get(':id')
  async findOne(@Param() param): Promise<Photo> {
    return this.photoService.findOne(param);
  }

  @Post()
  async create(@Body() photo: Photo) {
    console.log(photo);
    this.photoService.create(photo);
  }

  @Delete(':id')
  async remove(@Param() param) {
    console.log(param);
    this.photoService.remove(param);
  }
}
