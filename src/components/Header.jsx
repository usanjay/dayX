import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import NewTask from "./NewTask/NewTask";

function Header({ createTask }) {
    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between p-5 md:px-10  border-b-3 
                rounded-b-2xl bg-amber-100 my-auto">
                <Link to="/" className="flex items-center">
                    <FontAwesomeIcon
                        className="text-3xl bg-yellow-600 py-2 px-1 mr-2 rounded-2xl text-white"
                        icon={faCalendar} />
                    <div className="text-4xl font-bold " >DayX</div>
                </Link>
                <div className="bg-black text-white p-2 rounded-xl flex items-center justify-center mt-3 md:mt-0">
                    <FontAwesomeIcon icon={faPlus} className="mr-1 text-sm" />
                    Create New Task
                </div>
            </div>

            {/* <NewTask createTask={createTask} /> */}
        </>


    )
}

export default Header;