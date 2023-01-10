import { validUrlRegexp } from '../constants';

export class UrlHelper {
    public static isValidUrl(url: string): boolean {
        if (!url || typeof url !== 'string') {
            return false;
        }

        return validUrlRegexp.test(url);
    }
}
