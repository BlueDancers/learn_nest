import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TimeOutInterceptor } from './interceptor/timeout.interceptor';
import { AllExceptionFilter } from './filter/http.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TimeOutInterceptor());
  app.useGlobalFilters(new AllExceptionFilter());
  await app.listen(5004);
}
bootstrap();
