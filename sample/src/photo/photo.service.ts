import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { Repository, FindConditions } from 'typeorm';
import { PhotoMetadata } from './PhotoMetadata.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async findOne(conditions: FindConditions<Photo>): Promise<Photo> {
    return await this.photoRepository.findOne(conditions);
  }

  async create(photo: Photo) {
    let metadata = new PhotoMetadata();
    metadata.height = 640;
    metadata.width = 480;
    metadata.compressed = true;
    metadata.comment = 'cybershoot';
    metadata.orientation = 'portait';
    photo.metadata = metadata;

    await this.photoRepository.save(photo).catch(error => console.log(error));
  }

  async remove(id: number) {
    let photoToRemove = await this.photoRepository.findOneOrFail(id);
    console.log(photoToRemove);
    await this.photoRepository
      .remove(photoToRemove)
      .catch(error => console.log(error));
  }
}
