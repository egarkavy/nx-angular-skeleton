export function parseMIMEType(MIMEType: string): [string, string, string] {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
    // type/subtype;parameter=value

    // 1. drop optional parameter
    const [MIME, parameter]: string[] = MIMEType.split(';');

    // 2. extract type and subtype
    const [type, subtype]: string[] = MIME.split('/');

    return [type, subtype, parameter];
}

export function generateMIMETypesMap(types: string[]): Map<string, Set<string>> {
    const typesMap: Map<string, Set<string>> = new Map<string, Set<string>>();

    types.forEach((MIMEType: string) => {
        const [type, subtype]: [string, string, string] = parseMIMEType(MIMEType);
        if (typesMap.has(type)) {
            typesMap.get(type).add(subtype);
        } else {
            typesMap.set(type, new Set([subtype]));
        }
    });

    return typesMap;
}

export function validMIMEType(MIMEType: string, allowedTypes: string[]): boolean {
    const [type, subtype]: [string, string, string] = parseMIMEType(MIMEType);
    const typesMap: Map<string, Set<string>> = generateMIMETypesMap(allowedTypes);
    const validSubtypes: Set<string> = typesMap.has(type) ? typesMap.get(type) : new Set<string>();

    return validSubtypes.has(MIME_SUBTYPE_WILDCARD) || validSubtypes.has(subtype);
}

export const MIME_SUBTYPE_WILDCARD = '*';
