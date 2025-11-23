import { isSameDay, isPreviousDay, isWithinTaskTime, isStartDate, isEndDate } from "../../utils/dateUtils";

const isCurrentMonth = (date, monthIdx) => {
    return date.getMonth() === monthIdx;
}

function Day({ date, monthIdx, task }) {
    const today = new Date();
    let color = '';
    let border = '';
    let opacity = '';

    if (date) {
        if (isSameDay(date, today)) color = 'bg-green-200';
        else if (isWithinTaskTime(date, task.startDate, task.endDate)) {
            color = (isPreviousDay(date, today))
                ? 'bg-red-100'
                : 'bg-yellow-100';
        } else color = 'bg-gray-200';

        if (!isCurrentMonth(date, monthIdx)) opacity = 'opacity-50';
    }

    if(date) {
        if(isSameDay(date, today)) border = 'border border-green-600 border-2';
        else if(isStartDate(date,task.startDate)) border = 'border border-blue-600 border-2';
        else if(isEndDate(date,task.endDate)) border = 'border border-purple-600 border-2';
    }

    return (
        <li className={` flex justify-center items-center lg:text-xl aspect-square
        ${color} ${opacity} ${border}`}>{date && date.getDate()}</li>
    );
}

export default Day;