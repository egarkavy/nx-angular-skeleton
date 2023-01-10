export const coerceBase64StringIfExists = (string: string | null): string | null => {
    return string ? (string.startsWith('data:image/png;base64,') ? string : `data:image/png;base64,${string}`) : null;
};
