import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import NewTask from "./NewTask";


function Header({ createTask }) {
    const [createTaskVisibility, setCreateTaskVisibility] = useState(false);
    const toggleVisibility = () => setCreateTaskVisibility(v => !v);
    const { id } = useParams();
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const navigate = useNavigate();
    return (

        <>
            <div className="flex flex-row md:items-center justify-between p-5 md:px-10  border-b-3 
                rounded-b-2xl bg-amber-100 my-auto">
                <div className="flex items-center">
                    <FontAwesomeIcon
                        className="text-3xl bg-yellow-600 py-2 px-1 mr-2 rounded-2xl text-white"
                        icon={faCalendar} />
                    <div className="text-4xl font-bold " >DayX</div>
                </div>
                {id
                    ? (<button
                        onClick={() => navigate('/')}
                        className="py-2 px-3 rounded-2xl
                        bg-black hover:bg-gray-900 text-white">
                        <FontAwesomeIcon icon={faArrowLeft} />
                        {!isMobile && (<span className="ml-2">Back</span>)}
                    </button>)
                    : (<button onClick={toggleVisibility}
                        className="bg-black text-white p-2 rounded-xl flex items-center justify-center">
                        <FontAwesomeIcon icon={faPlus} className="mr-1 text-sm" />
                        Create New Task
                    </button>)
                }
            </div>

            {createTaskVisibility && (
                <NewTask
                    createTask={createTask}
                    createTaskVisibility={createTaskVisibility}
                    toggleVisibility={toggleVisibility}
                />
            )}
        </>
    )
}

export default Header;