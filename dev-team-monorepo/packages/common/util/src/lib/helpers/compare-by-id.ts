export function compareById<T extends { id: unknown }>(a: T | null | undefined, b: T | null | undefined): boolean {
    if (a === b) {
        return true;
    }

    if (Boolean(a) && Boolean(b)) {
        return a.id === b.id;
    }

    return false;
}

export type CompareByFn<T> = (a: T | null | undefined, b: T | null | undefined) => boolean;
