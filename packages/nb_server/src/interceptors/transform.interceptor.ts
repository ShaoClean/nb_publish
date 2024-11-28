import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
    code: number;
    data: T;
    message: string;
    success: boolean;
    timestamp: string;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
        return next.handle().pipe(
            map(data => ({
                code: 0, // 0 表示成功
                data,
                message: 'Success',
                success: true,
                timestamp: new Date().toISOString(),
            })),
        );
    }
}
