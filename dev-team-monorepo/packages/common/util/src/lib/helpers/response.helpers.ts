import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ResponseModel } from '../models';

export class ResponseHelpers {
    public static mapErrorHttpResponse(response: HttpErrorResponse): HttpResponse<ResponseModel<null>> {
        let message: string;

        if (response.error?.error && response.error.error !== 'Bad Request') {
            message = response.error.error;
        } else if (response.error?.message) {
            message = response.error.message;
        } else {
            message = response.message;
        }

        return new HttpResponse<ResponseModel<null>>({
            body: {
                success: false,
                data: null,
                message,
            },
        });
    }
}
