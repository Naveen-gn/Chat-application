
export function extractTime(dateString) {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const twelveHourFormat = hours % 12 || 12;
    const formattedHours = padZero(twelveHourFormat);
    const formattedMinutes = padZero(minutes);
    return `${formattedHours}:${formattedMinutes} ${period}`;
}

function padZero(number) {
    return number.toString().padStart(2, "0");
}
