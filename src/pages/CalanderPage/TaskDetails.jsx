import React from 'react'
import dateFormat from '../../utils/dateFormat';

function TaskDetails({ task }) {
    return (
        <div>
            <div className="text-xl" >{task.taskName}</div>
            <div className='flex text-sm gap-2 text-gray-700'>
                <div className="" >{dateFormat(task.startDate)}</div>
                <div>-</div>
                <div className="" >{dateFormat(task.endDate)}</div>
            </div>
        </div>
    )
}

export default TaskDetails;