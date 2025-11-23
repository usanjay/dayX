import { Link } from "react-router";
import { getMonthName } from "../../../utils/dateUtils";
import ChangeMonth from "./changeMonth";

function MonthDetails({ date, changeMonth }) {
    return (
        <div className="flex-1 flex justify-center px-20">
            <ChangeMonth content="<" changeMonth={changeMonth} />
            <div className="flex items-center text-xl font-bold px-4">
                <div className="mr-2">{getMonthName(date)}</div>
                <div>{date.getFullYear()}</div>
            </div>
            <ChangeMonth content=">" changeMonth={changeMonth} />
        </div>
    )
}
export default MonthDetails;