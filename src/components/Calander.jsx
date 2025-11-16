import Month from "./Month";
import Header from "./Header";


function Calander({ tasks, createTask }) {
    return (
        <div className="h-screen ">
            <Header createTask={createTask} />
            <Month tasks={tasks} />
        </div>

    )
}

export default Calander;