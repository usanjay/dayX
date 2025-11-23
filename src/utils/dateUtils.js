export const isSameDay = (date, today) => {
    return date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate();
}

export const isStartDate = (date, startDate) => {
    return date.getFullYear() === startDate.getFullYear() &&
        date.getMonth() === startDate.getMonth() &&
        date.getDate() === startDate.getDate();
}

export const isEndDate = (date, endDate) => {
    return date.getFullYear() === endDate.getFullYear() &&
        date.getMonth() === endDate.getMonth() &&
        date.getDate() === endDate.getDate();
}

export const isPreviousDay = (date, today) => date.getTime() < today.getTime();

export const isWithinTaskTime = (date, taskStartDate, taskEndDate) => {
    return date.getTime() >= taskStartDate.getTime() &&
        date.getTime() <= taskEndDate.getTime();
}

export const weekCount = (monthStartDayIdx, daysInMonth) => {
    return Math.ceil((monthStartDayIdx + daysInMonth) / 7);
}


export const getMonthName = date => {
    return date.toLocaleString('default', {month: 'long'});
}