import Day from "./Day";
import { weekCount } from "../utils/dateUtils";

function currentMonthDates() {

    const today = new Date(2025, 10, 14);
    const monthIdx = today.getMonth();
    const year = today.getFullYear();
    const taskStartDate = new Date(2025, 10, 5);
    const taskEndDate = new Date(2025, 10, 20);

    const firstWeekdayIdx = new Date(year, monthIdx).getDay(); //index of starting day in week
    const daysInMonth = new Date(year, monthIdx + 1, 0).getDate();

    const totalWeeks = weekCount(firstWeekdayIdx, daysInMonth);
    let currentMonthDates = new Array(totalWeeks * 7).fill(null);

    // if (firstWeekdayIdx > 0) {
    //     let daysInLastMont = new Date(year, monthIdx, 0).getDate();
    // }

    for (let i = 0; i < currentMonthDates.length; i++) {
        currentMonthDates[i] = new Date(year, monthIdx, i - firstWeekdayIdx + 1);
    }

    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <>
            {/* <div>
                <div>{today.getFullYear()}</div>
                <div>{today.getMonth() + 1}</div>
            </div> */}

            {/* Week Days Headline */}
            <div className="grid grid-cols-7 gap-0.5 mx-6">
                {weekDays.map((day, index) => (
                    <div key={index} className="px-5 py-2 flex justify-center items-center
                        text-xl">{day}</div>)
                )}
            </div>

            {/* Dates of month */}
            <div className="grid grid-cols-7 gap-0.5 mx-6">
                {currentMonthDates.map((date, index) => {
                    return (
                        <Day key={index}
                            date={date}
                            monthIdx={monthIdx}
                            taskStartDate={taskStartDate}
                            taskEndDate={taskEndDate}
                        />
                    )
                })}
            </div>
        </>
    )
}


export default currentMonthDates