import Header from "../../components/Header";
import NewTask from "../NewTask";
import { Link } from "react-router";

function Home() {
    return (
        <div className="bg-gray-100">
            <Header />
            <div className="bg-white m-10 rounded-lg border border-gray-200 shadow-xl">
                <section className="p-5">
                    <h2>All Tasks</h2>
                    <div className="text-gray-500 mt-2">1 task in total</div>
                </section>

                <section>
                    <div className="border-t border-gray-200 flex justify-between p-2 font-medium">
                        <div className="flex-1">Sr.No.</div>
                        <div className="flex-5">Task Name</div>
                        <div className="flex-2">Start Date</div>
                        <div className="flex-2">End Date</div>
                        <div className="w-15 text-right">Actions</div>
                    </div>
                    <div className="border-t text-sm border-gray-200 flex justify-between px-2 py-3 hover:bg-gray-300
                    cursor-pointer">
                        <div className="flex-1 my-auto">1</div>
                        <div className="flex-5 my-auto">Complete Coding</div>
                        <div className="flex-2 my-auto">Nov 21, 2025</div>
                        <div className="flex-2 my-auto">Nov 07, 2025</div>
                        <div className="w-15 text-center cursor-pointer bg-red-500 text-white p-1 rounded-sm my-auto ">Delete</div>
                    </div>
                    <div className="border-t text-sm border-gray-200 flex justify-between px-2 py-3 hover:bg-gray-300
                    cursor-pointer">
                        <div className="flex-1 my-auto">1</div>
                        <div className="flex-5 my-auto">Complete Coding</div>
                        <div className="flex-2 my-auto">Nov 21, 2025</div>
                        <div className="flex-2 my-auto">Nov 07, 2025</div>
                        <div className="w-15 text-center cursor-pointer bg-red-500 text-white p-1 rounded-sm my-auto ">Delete</div>
                    </div>
                    <div className="border-t text-sm border-gray-200 flex justify-between px-2 py-3 hover:bg-gray-300
                    cursor-pointer">
                        <div className="flex-1 my-auto">1</div>
                        <div className="flex-5 my-auto">Complete Coding</div>
                        <div className="flex-2 my-auto">Nov 21, 2025</div>
                        <div className="flex-2 my-auto">Nov 07, 2025</div>
                        <div className="w-15 text-center cursor-pointer bg-red-500 text-white p-1 rounded-sm my-auto ">Delete</div>
                    </div>
                    


                </section>
            </div>
        </div>
    )
}

export default Home