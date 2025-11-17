import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function NewTask({ createTask, createTaskVisibility, toggleVisibility }) {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset
    } = useForm();


    const onSubmit = (data) => {
        createTask(data);
        reset();
        navigate('/');
        toggleVisibility();
    };

    const onClose = (e) => {
        e.preventDefault();
        toggleVisibility();
    }


    const display = createTaskVisibility ? 'flex' : 'hidden';

    return (
        <div className={`${display} fixed top-0 justify-center items-center z-1000 h-screen w-screen bg-gray-950/50`} >
            <div className="flex flex-col items-center p-5 bg-white rounded-2xl mx-5">

                <div className="w-full border-b-2 border-gray-200 pb-4">
                    <div className="text-xl font-bold">Create New Task</div>
                    <div className="text-sm">Add a new task to your calendar with start and end dates.</div>
                </div>


                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="task-name" className="px-2 md:mr-5">Task Name</label>
                        <input
                            {...register('taskName')}
                            className="md:w-100 bg-gray-100 outline-0 p-2 rounded-md"
                            id="task-name"
                            type="text"
                            placeholder="Enter task name"
                            required />

                        <label htmlFor="start-date" className=" px-2 mt-4">Start Date</label>
                        <input
                            {...register('startDate')}
                            className=" bg-gray-100 outline-0 p-2 rounded-md"
                            id="start-date"
                            type="date"
                            required />

                        <label htmlFor="end-date" className="px-2 mt-4">Deadline Date</label>
                        <input
                            {...register('endDate')}
                            className="bg-gray-100 outline-0 p-2 rounded-md"
                            id="end-date"
                            type="date"
                            required />
                    </div>

                    <div className="mt-6 flex justify-around md:justify-end">
                        <button className="py-2 px-4 box-border border rounded-md cursor-pointer mr-4 
                            hover:bg-gray-100 transtion duration-100 w-full" onClick={onClose}>Cancel</button>
                        <button className="px-4 bg-black text-white rounded-md cursor-pointer 
                            hover:bg-gray-900 transtion duration-100 w-full">Create Task</button>
                    </div>
                </form>

            </div>
        </div >
    );
}

export default NewTask;