import Month from "./Dates";

function Calander() {

    return (
        <div className="h-screen ">
            <h1 className="flex items-center justify-center text-4xl font-bold p-5 border-b-3 
            rounded-b-2xl bg-amber-200 ">DayX</h1>
            <Month />

        </div>

    )
}

export default Calander;