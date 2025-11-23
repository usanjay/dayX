import React from 'react';
import Day from "./Day";
import { useMediaQuery } from "react-responsive";

function Month({ monthIdx, task, currentMonthDates }) {
    const weekDays = [{ short: 'S', mid: 'Sun', full: 'Sunday' },
    { short: 'M', mid: 'Mon', full: 'Monday' },
    { short: 'T', mid: 'Tue', full: 'Tuesday' },
    { short: 'W', mid: 'Wed', full: 'Wednesday' },
    { short: 'T', mid: 'Thu', full: 'Thursday' },
    { short: 'F', mid: 'Fri', full: 'Friday' },
    { short: 'S', mid: 'Sat', full: 'Saturday' }
    ];
    const isMobile = useMediaQuery({ maxWidth: 768 })

    return (
        <div className='border border-gray-300 rounded-lg md:max-w-2/3 lg:max-w-1/2 mx-auto'>
            {/* Week Days Headline */}
            <div className="grid grid-cols-7 gap-0.5">
                {weekDays.map((day, index) => (
                    <div key={index} className="px-5 py-2 flex justify-center items-center aspect-2/1">
                        {isMobile ? day.short : day.mid}
                    </div>)
                )}
            </div>

            {/* Dates of month */}
            <div className="grid grid-cols-7 gap-0.5">
                {currentMonthDates.map((date, index) => {
                    return (
                        <Day key={index}
                            date={date}
                            monthIdx={monthIdx}
                            task={task}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Month