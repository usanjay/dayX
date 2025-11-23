import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

function ChangeMonth({ icon, content, changeMonth }) {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  return (
    <div className="py-2 md:py-1 px-2 cursor-pointer rounded-sm flex border border-gray-300" onClick={() => {
      changeMonth(icon)
    }}>
      {icon === "<" && (<FontAwesomeIcon className="m-auto" icon={faAngleLeft} />)}
      {!isMobile && <div className="mx-2">{content}</div>}
      {icon === ">" && (<FontAwesomeIcon className="m-auto" icon={faAngleRight} />)}
    </div>
  )
}

export default ChangeMonth;