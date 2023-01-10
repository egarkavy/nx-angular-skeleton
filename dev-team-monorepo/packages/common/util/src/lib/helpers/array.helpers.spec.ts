import { ArrayHelpers, Comparator, EntityBase } from '@pieces/common/util';

function generateEntities(ids: number[]): EntityBase[] {
    return ids.map((id: number) => ({ id }));
}

const entityComparator: Comparator<EntityBase> = (userA: EntityBase, userB: EntityBase) => {
    return userA.id === userB.id;
};

describe(ArrayHelpers.name, () => {
    describe(ArrayHelpers.intersection.name, () => {
        describe('primitive values (default comparator)', () => {
            it('should return valid intersection for arrays', () => {
                const arrayA: number[] = [1, 2, 3, 4, 5];
                const arrayB: number[] = [3, 4, 5, 6, 7];
                const expected: number[] = [3, 4, 5];

                expect(ArrayHelpers.intersection(arrayA, arrayB)).toEqual(expected);
            });

            it(`should return empty array if arrays don't have intersection`, () => {
                const arrayA: number[] = [1, 2, 3];
                const arrayB: number[] = [];
                const expected: number[] = [];

                expect(ArrayHelpers.intersection(arrayA, arrayB)).toEqual(expected);
            });

            it('should return empty array if both arrays are empty', () => {
                const arrayA: number[] = [];
                const arrayB: number[] = [];
                const expected: number[] = [];

                expect(ArrayHelpers.intersection(arrayA, arrayB)).toEqual(expected);
            });
        });

        describe('reference values (custom comparator)', () => {
            it('should return valid intersection for arrays', () => {
                const arrayA: EntityBase[] = generateEntities([1, 2, 3, 4, 5]);
                const arrayB: EntityBase[] = generateEntities([3, 4, 5, 6, 7]);
                const expected: EntityBase[] = generateEntities([3, 4, 5]);

                expect(ArrayHelpers.intersection(arrayA, arrayB, entityComparator)).toEqual(expected);
            });

            it(`should return empty array if arrays don't have intersection`, () => {
                const arrayA: EntityBase[] = generateEntities([1, 2, 3]);
                const arrayB: EntityBase[] = [];
                const expected: EntityBase[] = [];

                expect(ArrayHelpers.intersection(arrayA, arrayB, entityComparator)).toEqual(expected);
            });

            it('should return empty array if both arrays are empty', () => {
                const arrayA: EntityBase[] = [];
                const arrayB: EntityBase[] = [];
                const expected: EntityBase[] = [];

                expect(ArrayHelpers.intersection(arrayA, arrayB)).toEqual(expected);
            });
        });
    });

    describe(ArrayHelpers.hasIntersection.name, () => {
        describe('primitive values', () => {
            it('should return true if arrays have intersection', () => {
                const arrayA: number[] = [1, 2, 3, 4, 5];
                const arrayB: number[] = [3, 4, 5, 6, 7];

                expect(ArrayHelpers.hasIntersection(arrayA, arrayB)).toBeTrue();
            });

            it(`should return false if arrays don't have intersection`, () => {
                const arrayA: number[] = [1, 2, 3];
                const arrayB: number[] = [];

                expect(ArrayHelpers.hasIntersection(arrayA, arrayB)).toBeFalse();
            });

            it(`should return false if both arrays are empty`, () => {
                const arrayA: number[] = [];
                const arrayB: number[] = [];

                expect(ArrayHelpers.hasIntersection(arrayA, arrayB)).toBeFalse();
            });
        });

        describe('reference values', () => {
            it('should return true if arrays have intersection', () => {
                const arrayA: EntityBase[] = generateEntities([1, 2, 3, 4, 5]);
                const arrayB: EntityBase[] = generateEntities([3, 4, 5, 6, 7]);

                expect(ArrayHelpers.hasIntersection(arrayA, arrayB, entityComparator)).toBeTrue();
            });

            it(`should return false if arrays don't have intersection`, () => {
                const arrayA: EntityBase[] = generateEntities([1, 2, 3]);
                const arrayB: EntityBase[] = [];

                expect(ArrayHelpers.hasIntersection(arrayA, arrayB, entityComparator)).toBeFalse();
            });

            it(`should return false if both arrays are empty`, () => {
                const arrayA: EntityBase[] = [];
                const arrayB: EntityBase[] = [];

                expect(ArrayHelpers.hasIntersection(arrayA, arrayB, entityComparator)).toBeFalse();
            });
        });
    });

    describe(ArrayHelpers.isSameSet.name, () => {
        it('should return true if array contain elements from the same set', () => {
            const arrA: number[] = [1, 2, 3];
            const arrB: number[] = [3, 2, 1];

            expect(ArrayHelpers.isSameSet(arrA, arrB)).toBeTrue();
        });

        it('should return false if array contain elements from different sets', () => {
            const arrA: number[] = [1, 2, 3];
            const arrB: number[] = [4, 3, 2, 1];

            expect(ArrayHelpers.isSameSet(arrA, arrB)).toBeFalse();
        });

        it('should return false if one of arrays is empty', () => {
            const arrA: number[] = [1, 2, 3];
            const arrB: number[] = [];

            expect(ArrayHelpers.isSameSet(arrA, arrB)).toBeFalse();
        });

        it('should return true if both arrays are empty', () => {
            const arrA: number[] = [];
            const arrB: number[] = [];

            expect(ArrayHelpers.isSameSet(arrA, arrB)).toBeTrue();
        });
    });

    describe(ArrayHelpers.toSameSize.name, () => {
        it('Should increase the size of the toAdjust array if it is smaller than main array', () => {
            const main: number[] = [1, 2, 3];
            const toAdjust: number[] = [];

            ArrayHelpers.toSameSize(main, toAdjust, { mutateOriginal: true, toElementGenerator: () => undefined });

            expect(main.length).toEqual(toAdjust.length);
        });

        it('Should decrease the size of the toAdjust array if it is bigger than main array', () => {
            const main: number[] = [1, 2, 3];
            const toAdjust: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

            ArrayHelpers.toSameSize(main, toAdjust, { mutateOriginal: true, toElementGenerator: () => undefined });

            expect(main.length).toEqual(toAdjust.length);
        });

        it('Should remove last elements', () => {
            const main: number[] = [1, 2, 3];
            const toAdjust: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

            ArrayHelpers.toSameSize(main, toAdjust, { mutateOriginal: true, toElementGenerator: () => undefined });

            expect(toAdjust).toEqual([1, 2, 3]);
        });

        it('Should mutate original element if mutateOriginal === true', () => {
            const main: number[] = [1, 2, 3];
            const toAdjust: number[] = [];

            ArrayHelpers.toSameSize(main, toAdjust, { mutateOriginal: true, toElementGenerator: () => undefined });

            expect(main.length).toEqual(toAdjust.length);
        });

        it('Should use passed generator', () => {
            const main: string[] = ['a'];
            const toAdjust: string[] = [];

            ArrayHelpers.toSameSize(main, toAdjust, { mutateOriginal: true, toElementGenerator: (mainElem) => mainElem });

            expect(main[length - 1]).toEqual(toAdjust[length - 1]);
        });
    });
});
