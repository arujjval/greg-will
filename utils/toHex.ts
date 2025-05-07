export default function rgbaToHex(rgba: string): string {
    const matches = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)/);
    if (!matches) return '';

    const r = parseInt(matches[1]) / 255;
    const g = parseInt(matches[2]) / 255;
    const b = parseInt(matches[3]) / 255;
    const a = matches[4] ? parseFloat(matches[4]) : 1;

    const toHex = (n: number): string => {
        const hex = Math.round(n * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    return '#' + 
        toHex(r) + 
        toHex(g) + 
        toHex(b) + 
        (a < 1 ? toHex(a) : '');
}