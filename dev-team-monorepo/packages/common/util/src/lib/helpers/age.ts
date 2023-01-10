import { differenceInYears } from 'date-fns';

export function age(dob: Date | string | number, currentDate: Date | string | number = new Date()): number {
    const invalidDob: boolean = !(dob instanceof Date) && typeof dob !== 'string' && typeof dob !== 'number';
    const invalidCurrentDate: boolean =
        !(currentDate instanceof Date) && typeof currentDate !== 'string' && typeof currentDate !== 'number';

    if (invalidDob || invalidCurrentDate) {
        // invalid dob/currentDate
        return 0;
    }

    if (typeof dob === 'string' || typeof dob === 'number') {
        dob = new Date(dob);
    }

    if (typeof currentDate === 'string' || typeof currentDate === 'number') {
        currentDate = new Date(currentDate);
    }

    if (isNaN(dob.getTime()) || isNaN(currentDate.getTime())) {
        // invalid dob/currentDate date format
        return 0;
    }

    const age: number = differenceInYears(currentDate, dob);

    return age > 0 ? age : 0;
}
