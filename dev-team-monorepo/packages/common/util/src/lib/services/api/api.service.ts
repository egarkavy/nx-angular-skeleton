import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../models/api';

export const API_BASE_URL: InjectionToken<string> = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class ApiService {
    constructor(private http: HttpClient, @Inject(API_BASE_URL) @Optional() private apiBaseUrl: string = '') {}

    private get headers(): HttpHeaders {
        const headersConfig: { [name: string]: string | string[] } = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };

        return new HttpHeaders(headersConfig);
    }

    public get<R>(
        url: string,
        options?: {
            params?: unknown | HttpParams;
            headers?: HttpHeaders;
            responseType?: 'json';
        },
    ): Observable<ResponseModel<R>>;
    public get<R, P extends { [param: string]: string }>(
        url: string,
        options?: {
            params?: P | HttpParams;
            headers?: HttpHeaders;
            responseType?: 'json';
        },
    ): Observable<ResponseModel<R>> {
        return this.http.get<ResponseModel<R>>(`${this.apiBaseUrl}${url}`, options);
    }

    public delete<R>(
        url: string,
        options?: {
            params?: HttpParams | unknown;
        },
    ): Observable<ResponseModel<R>>;
    public delete<R, P extends { [param: string]: string }>(
        url: string,
        options?: {
            params?: P | HttpParams;
        },
    ): Observable<ResponseModel<R>> {
        const params = options?.params || new HttpParams();

        return this.http.delete<ResponseModel<R>>(`${this.apiBaseUrl}${url}`, {
            headers: this.headers,
            params,
        });
    }

    public post(
        url: string,
        data?: unknown,
        options?: {
            params?: unknown | HttpParams;
            headers?: HttpHeaders;
        },
    ): Observable<ResponseModel<unknown>>;
    public post<R>(
        url: string,
        data?: unknown,
        options?: {
            params?: unknown | HttpParams;
            headers?: HttpHeaders;
        },
    ): Observable<ResponseModel<R>>;
    public post<P>(
        url: string,
        data?: unknown,
        options?: {
            params?: P | HttpParams;
            headers?: HttpHeaders;
        },
    ): Observable<ResponseModel<unknown>>;
    public post<R, T>(
        url: string,
        data?: T,
        options?: {
            params?: unknown | HttpParams;
            headers?: HttpHeaders;
        },
    ): Observable<ResponseModel<R>>;

    public post<R, T, P extends { [param: string]: string }>(
        url: string,
        data?: T,
        options?: {
            params?: P | HttpParams;
            headers?: HttpHeaders;
        },
    ): Observable<ResponseModel<R>> {
        options = options || {};

        const isFormData: boolean = data instanceof FormData;
        const params = options?.params || new HttpParams();
        const headers = options?.headers || this.headers;

        return this.http.post<ResponseModel<R>>(`${this.apiBaseUrl}${url}`, data, {
            headers: isFormData ? undefined : headers,
            params,
        });
    }

    public put<R, T>(
        url: string,
        data?: T,
        options?: {
            params?: HttpParams;
            headers?: HttpHeaders;
        },
    ): Observable<ResponseModel<R>> {
        return this.http.put<ResponseModel<R>>(`${this.apiBaseUrl}${url}`, data, options);
    }

    public patch<R, T>(
        url: string,
        data?: T,
        options?: {
            params?: HttpParams;
            headers?: HttpHeaders;
        },
    ): Observable<ResponseModel<R>> {
        return this.http.patch<ResponseModel<R>>(`${this.apiBaseUrl}${url}`, data, options);
    }
}
