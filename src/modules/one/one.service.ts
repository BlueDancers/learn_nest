import { Injectable } from '@nestjs/common';
import { CreateOneDto } from './dto/create-one.dto';
import { UpdateOneDto } from './dto/update-one.dto';

@Injectable()
export class OneService {
  create(createOneDto: CreateOneDto) {
    return 'This action adds a new one';
  }

  findAll() {
    return `This action returns all one`;
  }

  findOne(id: number) {
    return `This action returns a #${id} one`;
  }

  update(id: number, updateOneDto: UpdateOneDto) {
    return `This action updates a #${id} one`;
  }

  remove(id: number) {
    return `This action removes a #${id} one`;
  }
}
