import Month from "./Month";
import Header from "./Header";


function Calander({tasks}) {
    return (
        <div className="h-screen ">
            <Header />
            <Month tasks={tasks} />
        </div>

    )
}

export default Calander;