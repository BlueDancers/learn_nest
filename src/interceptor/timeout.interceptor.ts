import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError, throwError, timeout } from 'rxjs';

@Injectable()
export class TimeOutInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      timeout(1),
      catchError((err) => {
        return throwError(() => new HttpException('请求超时, 请稍后再试', 200));
      }),
    );
  }
}
