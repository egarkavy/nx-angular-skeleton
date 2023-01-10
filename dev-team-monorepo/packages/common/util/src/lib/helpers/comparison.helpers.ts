import { isEqual } from 'lodash-es';

export class ComparisonHelpers {
    public static valueExists<T>(value: T): boolean {
        return value !== undefined && value !== null;
    }

    //consider object prop order may be different, in this case this method will not work
    public static objectEqualsDeep<T>(a: T, b: T): boolean {
        return isEqual(a, b);
    }
}
