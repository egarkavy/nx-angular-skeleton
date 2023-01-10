export type ComparatorType<T> = (a: T, b: T) => number;

/**
 * Allow to compare two values by provided comparator
 *
 * @param a - T
 * @param b - T
 * @param comparator - ComparatorType<T>
 */
export function safeCompare<T>(a: T, b: T, comparator: ComparatorType<T>): number {
    if (a === null || a === undefined) {
        if (b === null || b === undefined) {
            return 0;
        } else {
            return 1;
        }
    } else {
        if (b === null || b === undefined) {
            return -1;
        } else {
            return comparator(a, b);
        }
    }
}

/**
 * Allow to safely compare two string values
 *
 * @param a string
 * @param b string
 */
export function safeStrCompare(a: string, b: string): number {
    return safeCompare(a, b, () => a.localeCompare(b));
}

/**
 * Allow to safely compare two number values
 *
 * @param a number
 * @param b number
 */
export function safeNumCompare(a: number, b: number): number {
    return safeCompare(a, b, () => a - b);
}

/**
 * Allow composing comparison chain of several comparators
 * that delegate comparison by the chain to the next comparators if current comparator returns 0
 *
 * @param comparators - Array<() => number>
 */
export function safeComparatorPipe(...comparators: Array<() => number>): number {
    let result: number;

    for (let i = 0, len: number = comparators.length; i < len; i++) {
        result = comparators[i]();
        if (result !== 0) {
            break;
        }
    }

    return result;
}
