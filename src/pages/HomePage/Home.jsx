import Header from "../../components/Header/Header";
import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

import TaskList from "./TaskList";
import TaskListMobile from "./TaskListMobile";

import { useMediaQuery } from "react-responsive";

function Home({ createTask, tasks }) {
    const isMobile = useMediaQuery({ maxWidth: 768 })

    return (
        <div className="bg-gray-100">
            <Header createTask={createTask} />

            <div className="bg-white m-5 md:m-10 rounded-lg border border-gray-200 shadow-xl">
                <section className="p-3 md:p-5">
                    <h2>All Tasks</h2>
                    <div className="text-gray-500 md:mt-2">{tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} in total</div>
                </section>

                {/* Tasks list - Desktop View*/}
                {isMobile
                    ? (<TaskListMobile tasks={tasks} createTask={createTask} />)
                    : (<TaskList tasks={tasks} createTask={createTask} />)}


                {/* Empty List */}
                <section className="border-t-2 border-gray-200 py-10 flex flex-col items-center text-gray-500">
                    <FontAwesomeIcon icon={faCalendar} className="text-4xl mb-3" />
                    <p>No tasks yet</p>
                    <p className="text-sm text-gray-400">Create your first task to get started</p>
                </section>
            </div>
        </div>
    )
}

export default Home