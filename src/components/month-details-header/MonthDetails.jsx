import { getMonthName } from "../../utils/dateUtils";
import ChangeMonth from "./changeMonth";

function MonthDetails({ date, changeMonth }) {
    return (
        <div className="flex justify-between bg-red-200 px-20">
            <ChangeMonth content="<" changeMonth={changeMonth} />
            <div className="flex">
                <div className="mr-2">{getMonthName(date)}</div>
                <div>{date.getFullYear()}</div>
            </div>
            <ChangeMonth content=">" changeMonth={changeMonth} />
        </div>
    )
}
export default MonthDetails;