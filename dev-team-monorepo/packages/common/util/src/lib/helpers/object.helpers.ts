import { Dictionary } from '../models';

export function deepCopy<TElem>(element: TElem): TElem {
    return JSON.parse(JSON.stringify(element)) as TElem;
}

export function valuesEqual(a: unknown, b: unknown): boolean {
    return a === b && typeof a !== typeof undefined;
}

export function toKeyValueArray<TVal>(object: { [key: string]: TVal }): { key: string; value: TVal }[] {
    const resultingArray: { key: string; value: TVal }[] = [];

    for (const [key, value] of Object.entries(object)) {
        resultingArray.push({
            key,
            value,
        });
    }

    return resultingArray;
}

export function mapDict<TSource, TResult>(source: Dictionary<TSource>, mapFn: (source: TSource) => TResult): Dictionary<TResult> {
    return Object.entries(source).reduce((acc, [key, value]) => {
        const mapped = mapFn(value);

        return {
            ...acc,
            [key]: mapped,
        };
    }, {} as Dictionary<TResult>);
}

//before using this function consider setting property to undefined instead of deleting it
export function deleteProperty<TObject, TProp extends keyof TObject>(object: TObject, prop: TProp): Omit<TObject, TProp> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [prop]: toDelete, ...newObject } = object;

    return newObject;
}

export function isEmptyObject(obj: unknown): boolean {
    return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;
}

export function excludeUndefined<T>(obj: T): Partial<T> {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        if (value !== undefined) {
            acc = {
                ...acc,
                [key]: value,
            };
        }

        return acc;
    }, <Partial<T>>{});
}
