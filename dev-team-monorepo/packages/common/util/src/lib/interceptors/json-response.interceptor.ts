import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ResponseModel } from '../models';
import { ResponseHelpers } from '../helpers';

/**
 * The interceptor will only wrap json responses. For other types it will not do the modification because the response could be a stream/simple text/arrayBuffer
 */
@Injectable()
export class JsonResponseInterceptor implements HttpInterceptor {
    public intercept(
        req: HttpRequest<unknown>,
        next: HttpHandler,
    ): Observable<HttpEvent<ResponseModel<unknown>>> | Observable<HttpEvent<unknown>> {
        if (req.responseType !== 'json') {
            return next.handle(req);
        }

        return next.handle(req).pipe(
            map((event: HttpEvent<unknown>) => {
                return event instanceof HttpResponse ? this.mapSuccessHttpResponse(event) : event;
            }),
            catchError((response: HttpErrorResponse) => {
                return of(ResponseHelpers.mapErrorHttpResponse(response));
            }),
        );
    }

    private mapSuccessHttpResponse<TData>(response: HttpResponse<TData>): HttpResponse<ResponseModel<TData>> {
        return response.clone({
            body: {
                success: true,
                data: response.body as TData,
            },
        });
    }
}