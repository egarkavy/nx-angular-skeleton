import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'
import { getItemsPath } from '@dev-team-monorepo/shop/catalog/util';
import { catalogItems } from './mock-responses/items-response.constant';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const url = request.url;

    if (url.includes(getItemsPath)) {
      return of(new HttpResponse({
        status: 200,
        body: catalogItems,
      })).pipe(
        delay(500)
      )
    }

    return next.handle(request).pipe();
  }
}
