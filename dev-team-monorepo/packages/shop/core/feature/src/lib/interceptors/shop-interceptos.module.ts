import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JsonResponseInterceptor } from '@dev-team-monorepo/common/util';
import { MockInterceptor } from './mock.interceptor';

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JsonResponseInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MockInterceptor,
            multi: true,
        },
    ],
})
export class ShopInterceptorsModule {}
