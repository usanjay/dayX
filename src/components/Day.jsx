import { isSameDay, isPreviousDay, isWithinTaskTime } from "../utils/dateUtils";

function Day({ date, taskStartDate, taskEndDate }) {
    const today = new Date();
    let color = '';

    if (date) {
        if (isSameDay(date, today)) color = 'bg-green-400';
        else if (isWithinTaskTime(date, taskStartDate, taskEndDate)) {
            color = (isPreviousDay(date, today))
                ? 'bg-red-300'
                : 'bg-yellow-200';
        }
    }

    return (
        <li className={`bg-gray-200 p-5 flex justify-center items-center text-xl 
        ${color}`}>{date && date.getDate()}</li>
    );
}

export default Day;