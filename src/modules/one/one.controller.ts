import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { OneService } from './one.service';
import { CreateOneDto } from './dto/create-one.dto';
import { UpdateOneDto } from './dto/update-one.dto';
import { AppService } from 'src/app.service';

@Controller('one')
export class OneController {
  constructor(private readonly oneService: OneService) {}

  @Inject()
  AppService: AppService;

  @Post()
  create(@Body() createOneDto: CreateOneDto) {
    return this.AppService.getHello()
  }

  @Get()
  findAll() {
    return this.AppService.getHello()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOneDto: UpdateOneDto) {
    return this.oneService.update(+id, updateOneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oneService.remove(+id);
  }
}
