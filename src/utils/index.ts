export const getFormattedDateString = (date: Date): string => {
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}