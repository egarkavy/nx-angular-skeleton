import { TrackByFunction } from '@angular/core';

export function trackByIndex(index: number): number {
    return index;
}

export function trackByKey<T extends Record<string | number, unknown>, K extends keyof T>(key: K): TrackByFunction<T> {
    return function (index: number, item: T): T[K] {
        return item[key];
    };
}

export function trackById<I, T extends { id: I }>(index: number, item: T): I {
    return item.id;
}
