import dateFormat from '../../utils/dateFormat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function TaskList({ tasks, deleteTask, openTask }) {

    return (
        <section>
            <div className="border-t border-gray-200 flex justify-between p-3 font-medium">
                <div className="flex-1">Sr.No.</div>
                <div className="flex-5">Task Name</div>
                <div className="flex-2">Start Date</div>
                <div className="flex-2">End Date</div>
                <div className="flex-1 text-right">Actions</div>
            </div>

            {tasks.map((task, index) => {
                return (
                    <div key={index} className="border-t text-sm border-gray-200 flex 
                    justify-between p-3 hover:bg-gray-300">
                        <div className="flex-1 my-auto">{index + 1}</div>
                        <div className="flex-5 my-auto">{task.taskName}</div>
                        <div className="flex-2 my-auto">{dateFormat(task.startDate)}</div>
                        <div className="flex-2 my-auto">{dateFormat(task.endDate)}</div>
                        <div className='flex-1 flex justify-end'>
                            <button
                                onClick={() => openTask(task.id)}
                                className="cursor-pointer p-1 text-yellow-700">
                                <FontAwesomeIcon icon={faEye} />
                            </button>
                            <button onClick={() => deleteTask(task.id)}
                                className="cursor-pointer p-1 text-red-500 ml-2">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>

                    </div>
                );
            })}


        </section>
    )
}

export default TaskList;