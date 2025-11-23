import CalanderMonthly from "./CalanderMonthly";
import Header from "../../components/Header/Header"
import { useParams } from "react-router-dom";

function Calander({ tasks, createTask }) {
    const { id } = useParams();
    const task = tasks.find(task => task.id === id);

    return (
        <div className="h-screen ">
            <Header createTask={createTask} />
            <CalanderMonthly task={task} />
        </div>
    )
}

export default Calander;