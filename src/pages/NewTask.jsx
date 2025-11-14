import { useForm } from "react-hook-form";
import Header from "../components/Header";
import Calander from "../components/Calander";
import { useNavigate } from "react-router";


function Home({createTask}) {

    const {
        register,
        handleSubmit
    } = useForm();

    const navigate = useNavigate();
    const onSubmit = (data) => {
        createTask(data);
        navigate('/');
    };

    return (
        <>
            <Header />

            <div className="flex flex-col items-center p-5">
                <div className="p-5 text-2xl font-bold outline mb-5 bg-blue-200">Create New Task</div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-5 p-4 outline">
                        <label htmlFor="task-name" className="outline p-1">Task Name</label>
                        <input
                            {...register('taskName')}
                            className="outline p-1 w-50"
                            id="task-name"
                            type="text"
                            required />

                        <label htmlFor="start-date" className="outline p-1">Start Date</label>
                        <input
                            {...register('startDate')}
                            className="outline p-1"
                            id="start-date"
                            type="date"
                            required />



                        <label htmlFor="end-date" className="outline p-1">Deadline Date</label>
                        <input
                            {...register('endDate')}
                            className="outline p-1"
                            id="end-date"
                            type="date"
                            required />

                        <button type="reset" className="outline p-2 bg-blue-300 cursor-pointer">Reset</button>
                        <button className="outline p-2 bg-blue-500 cursor-pointer">Submit</button>
                    </div>
                </form>

            </div>
        </>
    );
}

export default Home;