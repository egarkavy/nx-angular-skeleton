export type Comparator<A> = (a: A, b: A) => boolean;

function defaultComparator<A>(a: A, b: A): boolean {
    return a === b;
}

export class ArrayHelpers {
    public static deepFlatBy<T>(arr: T[], selector: (element: T) => T[]): T[] {
        let result: T[] = [];

        arr.forEach((a) => {
            result.push(a);

            if (Array.isArray(selector(a))) {
                result = result.concat(this.deepFlatBy(selector(a), selector));
            }
        });

        return result;
    }

    // Has O(n^2), but reads easy. Don't use/redo on potentially large arrays
    public static intersection<A>(arrayA: A[], arrayB: A[], comparator: Comparator<A> = defaultComparator): A[] {
        return arrayA.filter((elA: A) => arrayB.some((elB: A) => comparator(elA, elB)));
    }

    public static hasIntersection<A>(arrayA: A[], arrayB: A[], comparator: Comparator<A> = defaultComparator): boolean {
        return ArrayHelpers.intersection(arrayA, arrayB, comparator).length > 0;
    }

    public static isSameSet<A>(arrayA: A[], arrayB: A[]): boolean {
        const set: Set<A> = new Set([...arrayA, ...arrayB]);

        return set.size === arrayA.length && set.size === arrayB.length;
    }

    public static splitByCondition<A>(array: A[], predicate: (elem: A) => boolean): { matching: A[]; notMatching: A[] } {
        return array.reduce(
            (acc, current) => {
                if (predicate(current)) {
                    acc.matching.push(current);
                } else {
                    acc.notMatching.push(current);
                }

                return acc;
            },
            <{ matching: A[], notMatching: A[] }>{ matching: [], notMatching: [] },
        );
    }
}
