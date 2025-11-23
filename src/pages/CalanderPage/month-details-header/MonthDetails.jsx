import { Link } from "react-router";
import { getMonthName } from "../../../utils/dateUtils";
import ChangeMonth from "./ChangeMonth";

function MonthDetails({ date, changeMonth }) {
    return (
        <div className="flex-1 flex justify-between my-6 font-semibold">
            <ChangeMonth content="Previous" icon="<" changeMonth={changeMonth} />
            <div className="flex items-center md:text-xl  px-4">
                <div className="mr-2">{getMonthName(date)}</div>
                <div>{date.getFullYear()}</div>
            </div>
            <ChangeMonth content="Next" icon=">" changeMonth={changeMonth} />
        </div>
    )
}
export default MonthDetails;