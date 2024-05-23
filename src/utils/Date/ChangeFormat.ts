export function ChangeformatDate(dateString:string) {
    const dateObject = new Date(dateString);
    const formattedDate = `${dateObject.toLocaleDateString()} ${dateObject.toLocaleTimeString()}`;
    return formattedDate;
}