import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class DefaultGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest(); // 获取请求数据
    // 做出一些逻辑判断, 返回一个布尔值
    context.getClass(); // 获取当前类的class的信息
    context.getHandler(); // 获取当前类的方法的信息
    return true;
  }
}
