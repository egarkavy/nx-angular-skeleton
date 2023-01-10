import { DateHelpers } from '.';

describe('Date helpers tests', () => {
    it('Should convert hours to ms', () => {
        const hours = 10;

        const inMs = DateHelpers.hoursToMs(hours);

        expect(inMs).toEqual(hours * 60 * 60 * 1000);
    });

    it('Should convert minutes to ms', () => {
        const minutes = 10;

        const inMs = DateHelpers.minutesToMs(minutes);

        expect(inMs).toEqual(minutes * 60 * 1000);
    });

    it('Should convert seconds to ms', () => {
        const seconds = 10;

        const inMs = DateHelpers.secondsToMs(seconds);

        expect(inMs).toEqual(seconds * 1000);
    });

    it('Should return span since the beginning of a day', () => {
        const hours = 10;
        const minutes = 20;
        const seconds = 30;
        const ms = 225;

        const testableDate = new Date();
        testableDate.setHours(hours);
        testableDate.setMinutes(minutes);
        testableDate.setSeconds(seconds);
        testableDate.setMilliseconds(ms);

        const span = DateHelpers.timeSinceBeginningOfADay(testableDate);

        expect(span).toEqual(DateHelpers.hoursToMs(hours) + DateHelpers.minutesToMs(minutes) + DateHelpers.secondsToMs(seconds) + ms);
    });

    it('Should return max date', () => {
        const lowestDate = new Date(2021, 11, 10);
        const middleDate = new Date(2021, 11, 20);
        const maxDate = new Date(2021, 11, 25);

        const max = DateHelpers.getMaxDate(lowestDate, middleDate, maxDate);

        expect(max).toEqual(maxDate);
    });

    it('Should return min date', () => {
        const minDate = new Date(2021, 11, 10);
        const middleDate = new Date(2021, 11, 20);
        const maxDate = new Date(2021, 11, 25);

        const min = DateHelpers.getMinDate(minDate, middleDate, maxDate);

        expect(min).toEqual(minDate);
    });

    it('Should return valid date from short notation', () => {
        const short = '20211030T103000000Z';
        const objectEquiv = Date.UTC(2021, 9, 30, 10, 30, 0, 0);

        const converted = DateHelpers.fromShortNotation(short);

        expect(converted.getTime()).toEqual(objectEquiv);
    });

    it('Should return short notation', () => {
        const short = '20211030T103000000Z';
        const objectEquiv = new Date(Date.UTC(2021, 9, 30, 10, 30, 0, 0));

        const converted = DateHelpers.toShort(objectEquiv);

        expect(converted).toEqual(short);
    });

    it('Should return undefined if undefined passed', () => {
        const date = undefined;
        const dummyCb = () => 'dummy';

        const converted = DateHelpers.toFormatIfExists(date, dummyCb);

        expect(converted).toBeUndefined();
    });

    it('Should return cb value if Date object passed', () => {
        const date = new Date();
        const checkValue = 'dummy';
        const dummyCb = () => checkValue;

        const converted = DateHelpers.toFormatIfExists(date, dummyCb);

        expect(converted).toBe(checkValue);
    });

    it('Should return cb value if ISO string passed', () => {
        const date = new Date().toISOString();
        const checkValue = 'dummy';
        const dummyCb = () => checkValue;

        const converted = DateHelpers.toFormatIfExists(date, dummyCb);

        expect(converted).toBe(checkValue);
    });
});
