import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import dateFormat from '../../utils/dateFormat'

function TaskListMobile({ tasks, deleteTask, openTask }) {

    return (
        <section>

            {tasks.map((task, index) => {
                return (
                    <div key={index} className="border-t-2 border-gray-200 p-4">
                        <div className="flex items-center">
                            <div className="bg-blue-100 px-2 py-1 rounded-md mr-2">#{index + 1}</div>
                            <div className="w-full font-medium overflow-hidden text-nowrap mr-2">{task.taskName}</div>
                            <button className="flex justify-center items-center"
                                onClick={() => openTask(task.id)}>
                                <FontAwesomeIcon icon={faEye}
                                    className="text-yellow-700 mr-2 p-1" />
                            </button>
                            <button className="flex justify-center items-center"
                                onClick={() => deleteTask(task.id)}>
                                <FontAwesomeIcon icon={faTrashCan} className="text-red-500 p-1" />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 mt-3 gap-2 text-gray-600 text-sm">
                            <div>Start Date:</div>
                            <div className="text-right">{dateFormat(task.startDate)}</div>
                            <div>Start Date:</div>
                            <div className="text-right">{dateFormat(task.endDate)}</div>
                        </div>
                    </div>
                )
            })}

        </section>
    )
}

export default TaskListMobile