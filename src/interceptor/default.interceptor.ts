import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map, tap } from 'rxjs';

@Injectable()
export class DefaultInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext, // 获取上下文
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    console.log('方法执行之前');
    return next.handle().pipe(
      map((data) => {
        // 方法执行结束后,对返回的数据进行处理
        return {
          code: 1,
          msg: 'success',
          data,
        };
      }),
    );
  }
}
