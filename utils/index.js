export const formatTime = (timestamp) => {
    const created = new Date(timestamp);
    let minutes = created.getMinutes();
    if (minutes < 10) {
        minutes = "0" + String(minutes);
    }
    let hours = created.getHours();
    if (hours < 10) {
        hours = "0" + String(hours);
    }
    return hours + ":" + minutes;
}

export const formatDate = (timestamp) => {
    const created = new Date(timestamp);
    return created.toLocaleDateString();
}