import dateFormat from '../../utils/dateFormat';
// import { useNavigate } from 'react-router';

// function TaskList({ tasks, createTask }) {
// const navigate = useNavigate();
// const handleClick = (task) => {
//     navigate('/calander', { state: task });
// };

function TaskList({ tasks, deleteTask }) {
    return (
        <section>
            <div className="border-t border-gray-200 flex justify-between p-3 font-medium">
                <div className="flex-1">Sr.No.</div>
                <div className="flex-5">Task Name</div>
                <div className="flex-2">Start Date</div>
                <div className="flex-2">End Date</div>
                <div className="w-15 text-right">Actions</div>
            </div>

            {tasks.map((task, index) => {
                return (
                    <div key={index} className="border-t text-sm border-gray-200 flex justify-between p-3 hover:bg-gray-300
                        cursor-pointer">
                        <div className="flex-1 my-auto ">{index + 1}</div>
                        <div className="flex-5 my-auto" onClick={() => {
                            // handleClick(task)
                        }}>{task.taskName}</div>
                        <div className="flex-2 my-auto">{dateFormat(task.startDate)}</div>
                        <div className="flex-2 my-auto">{dateFormat(task.endDate)}</div>
                        <div className="w-15 text-center cursor-pointer bg-red-500 text-white p-1 rounded-sm my-auto"
                            onClick={()=>{
                                deleteTask(task.id);
                            }}>Delete</div>
                    </div>
                );
            })}


        </section>
    )
}

export default TaskList