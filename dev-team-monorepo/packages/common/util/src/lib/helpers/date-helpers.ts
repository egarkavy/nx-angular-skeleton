import { determine, TimeZone } from 'jstz';

export class DateHelpers {
    public static mmddyyyy(date: Date): string {
        const yyyy = date.getFullYear().toString();
        const mm = (date.getMonth() + 1).toString();
        const dd = date.getDate().toString();

        return `${mm[1] ? mm : '0' + mm[0]}/${dd[1] ? dd : '0' + dd[0]}/${yyyy}`;
    }

    public static datesEqual(a: Date, b: Date): boolean {
        return a && b && a.getTime() === b.getTime();
    }

    public static addDays(date: Date, daysToAdd: number): Date {
        const calculatedDate = new Date(date.getTime());

        calculatedDate.setUTCDate(calculatedDate.getUTCDate() + daysToAdd);

        return calculatedDate;
    }

    public static getDates(startDate: Date, stopDate: Date): Date[] {
        const dateArray = [];
        let currentDate = startDate;

        while (currentDate <= stopDate) {
            dateArray.push(new Date(currentDate));

            currentDate = DateHelpers.addDays(currentDate, 1);
        }

        return dateArray;
    }

    public static startOfDayUtc(date: Date): Date {
        return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    }

    public static timeSinceBeginningOfADay(localDate: Date): number {
        return (
            this.hoursToMs(localDate.getHours()) +
            this.minutesToMs(localDate.getMinutes()) +
            this.secondsToMs(localDate.getSeconds()) +
            localDate.getMilliseconds()
        );
    }

    public static hoursToMs(hours: number): number {
        return this.minutesToMs(hours * 60);
    }

    public static minutesToMs(minutes: number): number {
        return this.secondsToMs(minutes * 60);
    }

    public static secondsToMs(seconds: number): number {
        return seconds * 1000;
    }

    public static DateDiff(dateA: Date, dateB: Date, abs = true): number {
        const diff = dateA.getTime() - dateB.getTime();

        return abs ? Math.abs(diff) : diff;
    }

    public static addTime(date: Date, toAdd: number): Date {
        return new Date(date.getTime() + toAdd);
    }

    /**
     * Assumes local input date as UTC
     * @param date the date you want to be assumed as UTC
     * @returns Date that created from param but if it was already in utc
     */
    public static localDateAsUtc(date: Date): Date {
        return new Date(
            Date.UTC(
                date.getFullYear(),
                date.getMonth(),
                date.getDate(),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds(),
                date.getMilliseconds(),
            ),
        );
    }

    public static parsemmddyyyy(mmddyyyy: string): { date: number; month: number; year: number } {
        const [month, date, year] = mmddyyyy.split('/');

        // js counts months from 0 index
        return { date: +date, month: +month - 1, year: +year };
    }

    public static UTCmmddyyyyToLocalDate(
        mmddyyyy: string,
        hours: number = 0,
        minutes: number = 0,
        seconds: number = 0,
        ms: number = 0,
    ): Date {
        const { date, month, year } = DateHelpers.parsemmddyyyy(mmddyyyy);

        return new Date(Date.UTC(year, month, date, hours, minutes, seconds, ms));
    }

    public static localDateToUTCmmddyyyy(date: Date): string {
        const utcMonth: number = date.getUTCMonth() + 1; // js 0-based month index
        const stringifiedMonth: string = utcMonth < 10 ? `0${utcMonth}` : `${utcMonth}`;
        const utcDate: number = date.getUTCDate();
        const stringifiedDate: string = utcDate < 10 ? `0${utcDate}` : `${utcDate}`;
        const utcYear: number = date.getUTCFullYear();

        return `${stringifiedMonth}/${stringifiedDate}/${utcYear}`;
    }

    public static getMaxDate(...dates: Date[]): Date {
        if (!dates.length) {
            return null;
        }

        return dates.sort((a, b) => b.getTime() - a.getTime())[0];
    }

    public static getMinDate(...dates: Date[]): Date {
        if (!dates.length) {
            return null;
        }

        return dates.sort((a, b) => a.getTime() - b.getTime())[0];
    }

    /**
     *
     * @param short date in format like 20211030T103000000Z
     * @returns parsed date
     */
    public static fromShortNotation(short: string): Date {
        const year = short.slice(0, 4);
        const month = short.slice(4, 6);
        const day = short.slice(6, 8);
        const hour = short.slice(9, 11);
        const minute = short.slice(11, 13);
        const second = short.slice(13, 15);
        const ms = short.slice(15, 18);
        const z = short[short.length - 1] === 'Z' ? 'Z' : '';

        //2021-10-31T16:01:17.540Z
        return new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}${ms ? `.${ms}` : ''}${z}`);
    }

    public static toShort(date: Date): string {
        return `${date.toISOString().replace(/-|:|\./g, '')}`;
    }

    public static getCurrentTimezone(): string {
        const timezone: TimeZone = determine();

        return timezone.name();
    }

    public static toFormatIfExists(input: Date | string | undefined, mapCb: (input: Date | string) => string): string | undefined {
        let asDate: Date;

        if (typeof input === 'string') {
            asDate = new Date(input);
        }

        if (typeof input === 'object') {
            asDate = input;
        }

        return asDate ? mapCb(asDate) : undefined;
    }

    public static timestamp(): number {
        return new Date().getTime();
    }
}
