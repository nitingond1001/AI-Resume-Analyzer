/**
 * Format a file size in bytes to a human-readable string (KB, MB, GB)
 * @param bytes - The size in bytes
 * @returns A formatted string with the appropriate
 */
export function formatSize(bytes: number): string {
    if(bytes === 0) return '0 bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

    // Determine the appropriate unit by calculating the log

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    // Format with 2 decimal places and round

    const value = bytes / Math.pow(k, i);
    return `${value.toFixed(2)} ${sizes[i]}`;
}

export const generateUUID = () => crypto.randomUUID();