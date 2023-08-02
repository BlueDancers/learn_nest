import {
  Body,
  Controller,
  Get,
  Inject,
  Injectable,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { log } from 'console';

@Controller('/api')
export class AppController {
  @Inject()
  appService: AppService;

  @Inject('num')
  num: number;

  @Inject('getNum')
  getNum: number;

  @Get()
  async getHello() {
    console.log(this.num);
    console.log(this.getNum);
    let res = await this.appService.getHello();
    return res;
  }

  @Get('getName')
  getName(@Query() query: { name: string }) {
    return 123;
  }

  @Get('getName1/:id')
  getName1(@Param('id') id: string) {
    return 123;
  }

  @Post('getName2')
  getName2(@Body() body: any) {
    return 123;
  }
}
