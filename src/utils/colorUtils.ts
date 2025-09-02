// Helper function to convert hex to rgba
export const hexToRgba = (hex: string, alpha: number): string => {
    // Remove # if present
    hex = hex.replace('#', '');

    // Parse hex values
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
