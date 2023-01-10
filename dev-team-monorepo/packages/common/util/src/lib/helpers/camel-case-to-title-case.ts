import { CAMEL_CASE_REGEXP } from '../constants';

export function camelCaseToTitleCase(str: string): string {
    return str.replace(CAMEL_CASE_REGEXP, '$1 $2');
}
