export function toKilobytes(bytes: number): number {
    return bytes / 1024;
}

export function toMegabytes(bytes: number): number {
    return toKilobytes(bytes) / 1024;
}
