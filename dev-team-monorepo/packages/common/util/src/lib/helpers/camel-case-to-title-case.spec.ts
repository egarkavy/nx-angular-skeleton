import { camelCaseToTitleCase } from './camel-case-to-title-case';

describe(camelCaseToTitleCase.name, () => {
    it('should not change empty string', () => {
        const str = '';

        expect(camelCaseToTitleCase(str)).toBe(str);
    });

    it('should not change lower case string', () => {
        const str = 'aaaa';

        expect(camelCaseToTitleCase(str)).toBe(str);
    });

    it('should not change upper case string', () => {
        const str = 'AAAA';

        expect(camelCaseToTitleCase(str)).toBe(str);
    });

    it('should not change title case string', () => {
        const str = 'Aaaa';

        expect(camelCaseToTitleCase(str)).toBe(str);
    });

    it('should map camel case to title case', () => {
        const str = 'AaaaBbbCcD';
        const str2 = 'aaaaBbbCcD';
        const expected = 'Aaaa Bbb Cc D';
        const expected2 = 'aaaa Bbb Cc D';

        expect(camelCaseToTitleCase(str)).toBe(expected);
        expect(camelCaseToTitleCase(str2)).toBe(expected2);
    });
});
