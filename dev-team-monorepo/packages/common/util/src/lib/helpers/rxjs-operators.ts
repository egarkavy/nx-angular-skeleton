import { concat, Observable, of, pipe, Subscriber, UnaryFunction } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, map, reduce, switchMap } from 'rxjs/operators';
import { ResponseModel } from '../models';

/**
 * @description Debounce from firing for 100ms
 */
export function protectFromSpam<T>(multiply: number = 1): UnaryFunction<Observable<T>, Observable<T>> {
    return pipe(debounceTime(100 * multiply));
}

export function mapResponseModelToAnother<T, R>(response: ResponseModel<T>, mapFn?: (r: T) => R, errMapFn?: () => R): ResponseModel<R> {
    return response.success
        ? <ResponseModel<R>>{ ...response, data: mapFn ? mapFn(response.data) : null }
        : <ResponseModel<R>>{
              ...response,
              data: errMapFn ? errMapFn() : null,
          };
}

export function mapApiToStateModel<T, R>(
    mapFn?: (r: T) => R,
    errMapFn?: () => R,
): UnaryFunction<Observable<ResponseModel<T>>, Observable<ResponseModel<R>>> {
    return pipe(
        map((response: ResponseModel<T>) => {
            return mapResponseModelToAnother(response, mapFn, errMapFn);
        }),
    );
}

/**
 * When you have a set of responses and you want merge them into a single response
 */
export function mergeResponses<T>(): UnaryFunction<Observable<ResponseModel<T>[]>, Observable<ResponseModel<T[]>>> {
    // export function mergeResponses<T1, T2>(): UnaryFunction<Observable<[ResponseModel<T1>, ResponseModel<T2>]>, Observable<ResponseModel<[T1, T2]>>>;
    // export function mergeResponses<T1, T2, T3>(): UnaryFunction<Observable<[ResponseModel<T1>, ResponseModel<T2>, ResponseModel<T3>]>, Observable<ResponseModel<[T1, T2, T3]>>> {
    return pipe(
        map((responses: ResponseModel<T>[]) => {
            const firstError = responses.find((r) => !r.success);

            return {
                data: responses.map((r) => r.data),
                success: !firstError,
                message: firstError?.message,
            };
        }),
    );
}

export function distinctUntilChangedDeep<T>(): UnaryFunction<Observable<T>, Observable<T>> {
    return pipe(distinctUntilChanged((x, y) => JSON.stringify(x) === JSON.stringify(y)));
}

export function fileToBase64<T>(): UnaryFunction<Observable<T>, Observable<T | string>> {
    return pipe(
        switchMap((value: T) => {
            return value instanceof File ? fileToBase64$(value) : of(value);
        }),
    );
}

export function concatThenEmitAll<T>(observables: Observable<T>[]): Observable<T[]> {
    const concatenatedAndReducedToOneEmit = concat(...observables).pipe(
        reduce((acc, current) => {
            return acc.concat(current);
        }, <T[]>[]),
    );

    return concatenatedAndReducedToOneEmit;
}

function fileToBase64$(file: File): Observable<string> {
    return new Observable<string>((subscriber: Subscriber<string>) => {
        const fr: FileReader = new FileReader();
        fr.readAsDataURL(file);

        fr.onload = () => {
            subscriber.next(fr.result as string);
            subscriber.complete();
        };

        fr.onerror = (err: ProgressEvent<FileReader>) => {
            subscriber.error(err);
        };
    });
}

/**
 * Use if you want to make your observable to execute after all other possible sync emissions.
 * Example: When you want formControl.valueChanges execute after formControl.parent.valueChanges
 */
export function afterAll<T>(): UnaryFunction<Observable<T>, Observable<T | string>> {
    return pipe(delay(0));
}
