import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 2000);
    });
  }
}
