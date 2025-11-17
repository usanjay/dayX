import { isSameDay, isPreviousDay, isWithinTaskTime } from "../../utils/dateUtils";

const isCurrentMonth = (date, monthIdx) => {
    return date.getMonth() === monthIdx;
}

function Day({ date, monthIdx, taskStartDate, taskEndDate }) {
    const today = new Date();
    let color = '';
    let opacity = '';

    if (date) {
        if (isSameDay(date, today)) color = 'bg-green-400';
        else if (isWithinTaskTime(date, taskStartDate, taskEndDate)) {
            color = (isPreviousDay(date, today))
                ? 'bg-red-300'
                : 'bg-yellow-200';
        } else color = 'bg-gray-200';

        if (!isCurrentMonth(date, monthIdx)) opacity = 'opacity-50';
    }

    return (
        <li className={`p-5 flex justify-center items-center text-xl 
        ${color} ${opacity}`}>{date && date.getDate()}</li>
    );
}

export default Day;