import { trackById, trackByIndex, trackByKey } from '@pieces/common/util';

describe(trackByIndex.name, () => {
    it('should return index', () => {
        expect(trackByIndex(0)).toBe(0);
    });
});

describe(trackById.name, () => {
    it('should return id', () => {
        const result = trackById(123, { id: 0, a: 'a', b: 2 });

        expect(result).toBe(0);
    });
});

describe(trackByKey.name, () => {
    const item = { a: 0, b: 'b', c: null };

    Object.entries(item).forEach(([key, value]) => {
        it(`should track ${JSON.stringify(item)} by key ${key}`, () => {
            expect(item[key]).toEqual(value);
        });
    });
});
