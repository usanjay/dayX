import Month from "./Month";
import Header from "../../components/Header/Header"
import { useParams } from "react-router-dom";

function Calander({ tasks, createTask }) {
    const { id } = useParams();
    const task = tasks.find(task => task.id === id);

    return (
        <div className="h-screen ">
            <Header createTask={createTask} />
            <Month task={task} />
        </div>

    )
}

export default Calander;