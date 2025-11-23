import MonthDetails from "./month-details-header/MonthDetails";
import TaskDetails from "./TaskDetails";
import Month from "./Month";
import { weekCount } from "../../utils/dateUtils";
import { useState } from "react";

function CalanderMonthly({task}) {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 14));
    const monthIdx = currentDate.getMonth();
    const year = currentDate.getFullYear();


    const firstWeekdayIdx = new Date(year, monthIdx).getDay(); //index of starting day in week
    const daysInMonth = new Date(year, monthIdx + 1, 0).getDate();

    const totalWeeks = weekCount(firstWeekdayIdx, daysInMonth);
    let currentMonthDates = new Array(totalWeeks * 7).fill(null);

    const changeMonth = (value) => {

        if (value === '<') {
            currentDate.setMonth(monthIdx - 1);
            setCurrentDate(new Date(currentDate));
        } else if (value === '>') {
            currentDate.setMonth(monthIdx + 1);
            setCurrentDate(new Date(currentDate));
        }
    }

    // if (firstWeekdayIdx > 0) {
    //     let daysInLastMont = new Date(year, monthIdx, 0).getDate();
    // }

    for (let i = 0; i < currentMonthDates.length; i++) {
        currentMonthDates[i] = new Date(year, monthIdx, i - firstWeekdayIdx + 1);
    }

    
    return (
        <div className="bg-white m-5 p-6 md:m-10 rounded-lg border border-gray-200 shadow-xl">
            <TaskDetails task={task} />
            <MonthDetails task={task} date={currentDate} changeMonth={changeMonth} />
            <Month monthIdx={monthIdx} task={task} currentMonthDates={currentMonthDates} />
        </div>
    )
}


export default CalanderMonthly;