import Header from "../components/Header/Header";
import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

function Home({ createTask }) {
    return (
        <div className="bg-gray-100">
            <Header createTask={createTask} />

            <div className="bg-white m-5 md:m-10 rounded-lg border border-gray-200 shadow-xl">
                <section className="p-3 md:p-5">
                    <h2>All Tasks</h2>
                    <div className="text-gray-500 md:mt-2">1 task in total</div>
                </section>

                {/* Tasks list - Desktop View*/}
                <section>
                    <div className="border-t border-gray-200 flex justify-between p-3 font-medium">
                        <div className="flex-1">Sr.No.</div>
                        <div className="flex-5">Task Name</div>
                        <div className="flex-2">Start Date</div>
                        <div className="flex-2">End Date</div>
                        <div className="w-15 text-right">Actions</div>
                    </div>
                    <div className="border-t text-sm border-gray-200 flex justify-between p-3 hover:bg-gray-300
                    cursor-pointer">
                        <div className="flex-1 my-auto ">1</div>
                        <div className="flex-5 my-auto">Complete Coding</div>
                        <div className="flex-2 my-auto">Nov 21, 2025</div>
                        <div className="flex-2 my-auto">Nov 07, 2025</div>
                        <div className="w-15 text-center cursor-pointer bg-red-500 text-white p-1 rounded-sm my-auto ">Delete</div>
                    </div>
                    <div className="border-t text-sm border-gray-200 flex justify-between p-3 hover:bg-gray-300
                    cursor-pointer">
                        <div className="flex-1 my-auto">1</div>
                        <div className="flex-5 my-auto">Complete Coding</div>
                        <div className="flex-2 my-auto">Nov 21, 2025</div>
                        <div className="flex-2 my-auto">Nov 07, 2025</div>
                        <div className="w-15 text-center cursor-pointer bg-red-500 text-white p-1 rounded-sm my-auto ">Delete</div>
                    </div>
                    <div className="border-t text-sm border-gray-200 flex justify-between p-3 hover:bg-gray-300
                    cursor-pointer">
                        <div className="flex-1 my-auto">1</div>
                        <div className="flex-5 my-auto">Complete Coding</div>
                        <div className="flex-2 my-auto">Nov 21, 2025</div>
                        <div className="flex-2 my-auto">Nov 07, 2025</div>
                        <div className="w-15 text-center cursor-pointer bg-red-500 text-white p-1 rounded-sm my-auto ">Delete</div>
                    </div>
                </section>

                {/* Ṭasks List - Mobile View */}
                <section>
                    <div className="border-t-2 border-gray-200 p-4">
                        <div className="flex items-center">
                            <div className="bg-blue-100 px-2 py-1 rounded-md mr-2">#1</div>
                            <div className="w-full font-medium overflow-hidden text-nowrap mr-2">Complete dayX project</div>
                            <button><FontAwesomeIcon icon={faTrashCan} className="text-red-500" /></button>
                        </div>
                        <div className="grid grid-cols-2 mt-3 gap-2 text-gray-600 text-sm">
                            <div>Start Date:</div>
                            <div className="text-right"> Nov 16, 2025</div>
                            <div>Start Date:</div>
                            <div className="text-right">Nov 20, 2025</div>
                        </div>
                    </div>
                    <div className="border-t-2 border-gray-200 p-4">
                        <div className="flex items-center">
                            <div className="bg-blue-100 px-2 py-1 rounded-md mr-2">#1</div>
                            <div className="w-full font-medium overflow-hidden text-nowrap mr-2">Complete dayX project</div>
                            <button><FontAwesomeIcon icon={faTrashCan} className="text-red-500" /></button>
                        </div>
                        <div className="grid grid-cols-2 mt-3 gap-2 text-gray-600 text-sm">
                            <div>Start Date:</div>
                            <div className="text-right"> Nov 16, 2025</div>
                            <div>Start Date:</div>
                            <div className="text-right">Nov 20, 2025</div>
                        </div>
                    </div>
                </section>

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