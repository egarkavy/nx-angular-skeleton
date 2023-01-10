export function clamp(value: number, max: number, min: number = 0): number {
    return Math.max(min, Math.min(value, max));
}
