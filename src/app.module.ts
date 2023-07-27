import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OneModule } from './modules/one/one.module';

@Global()
@Module({
  imports: [OneModule],
  exports: [AppService],
  controllers: [AppController],
  providers: [
    { provide: AppService, useClass: AppService },
    { provide: 'num', useValue: 11223344 },
    {
      provide: 'getNum',
      useFactory(num, appService) {
        // 获取参数
        console.log('我是参数', num, appService);
        return 123;
      },
      inject: ['num', AppService], // 注入参数
    },
    {
      provide: 'load',
      async useFactory() {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(1);
          }, 20);
        });
        return 123;
      },
    },
  ],
})
export class AppModule {}
