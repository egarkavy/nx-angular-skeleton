import { age } from './age';

describe(age.name, () => {
    const currentDate: Date = new Date('01/01/2022');

    describe('Invalid date value', () => {
        it('should return 0 if dob is not Date/string/number', () => {
            const dob = null;

            expect(age(dob, currentDate)).toBe(0);
        });

        it('should return 0 if currentDate is not Date/string/number', () => {
            const dob = '01/01/2022';
            const currentDate = null;

            expect(age(dob, currentDate)).toBe(0);
        });
    });

    describe('Invalid date format', () => {
        describe('dob', () => {
            it('should return 0 if invalid string provided', () => {
                const dob = '13/13/2022';

                expect(age(dob, currentDate)).toBe(0);
            });

            it('should return 0 if invalid date is provided', () => {
                const dob = new Date('13/13/2022');

                expect(age(dob, currentDate)).toBe(0);
            });
        });

        describe('currentDate', () => {
            it('should return 0 if invalid string provided', () => {
                const dob = '01/01/2022';
                const currentDate = '13/13/2022';

                expect(age(dob, currentDate)).toBe(0);
            });

            it('should return 0 if invalid date is provided', () => {
                const dob = new Date('01/01/2022');
                const currentDate = new Date('13/13/2022');

                expect(age(dob, currentDate)).toBe(0);
            });
        });
    });

    describe('Valid date', () => {
        describe('Date', () => {
            it('should return correct age', () => {
                const dob = new Date('03/01/2000');

                expect(age(dob, currentDate)).toBe(21);
            });

            it('should return 0 if dob equals current date', () => {
                expect(age(currentDate, currentDate)).toBe(0);
            });

            it('should return 0 if dob is after current date', () => {
                const dob = new Date('01/01/2050');

                expect(age(dob, currentDate)).toBe(0);
            });
        });

        describe('string', () => {
            it('should return correct age', () => {
                const dob = '03/01/2000';
                const currentDate = '01/01/2022';

                expect(age(dob, currentDate)).toBe(21);
            });

            it('should return 0 if dob equals current date', () => {
                const currentDate = '01/01/2022';

                expect(age(currentDate, currentDate)).toBe(0);
            });

            it('should return 0 if dob is after current date', () => {
                const dob = '01/01/2050';
                const currentDate = '01/01/2022';

                expect(age(dob, currentDate)).toBe(0);
            });
        });

        describe('number', () => {
            it('should return correct age', () => {
                const dob = new Date('03/01/2000').getTime();
                const currentDate = new Date('01/01/2022').getTime();

                expect(age(dob, currentDate)).toBe(21);
            });

            it('should return 0 if dob equals current date', () => {
                const currentDate = new Date('01/01/2022').getTime();

                expect(age(currentDate, currentDate)).toBe(0);
            });

            it('should return 0 if dob is after current date', () => {
                const dob = new Date('01/01/2050').getTime();
                const currentDate = new Date('01/01/2022').getTime();

                expect(age(dob, currentDate)).toBe(0);
            });
        });
    });
});
