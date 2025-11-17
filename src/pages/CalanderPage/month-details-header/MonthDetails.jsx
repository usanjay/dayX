import { Link } from "react-router";
import { getMonthName } from "../../../utils/dateUtils";
import ChangeMonth from "./changeMonth";

function MonthDetails({ date, changeMonth }) {
    return (
        <div className="flex">
            <div className="flex-1 flex justify-between bg-red-200 px-20">
                <ChangeMonth content="<" changeMonth={changeMonth} />
                <div className="flex items-center text-xl font-bold">
                    <div className="mr-2">{getMonthName(date)}</div>
                    <div>{date.getFullYear()}</div>
                </div>
                <ChangeMonth content=">" changeMonth={changeMonth} />
            </div>
            <Link to="newTask" className="flex justify-center text-center p-3">New</Link>
        </div>
    )
}
export default MonthDetails;