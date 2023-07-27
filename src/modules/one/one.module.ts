import { Module } from '@nestjs/common';
import { OneService } from './one.service';
import { OneController } from './one.controller';

@Module({
  controllers: [OneController],
  providers: [OneService]
})
export class OneModule {}
