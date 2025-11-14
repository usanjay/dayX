function ChangeMonth({content, changeMonth}) {
  return (
    <div className="bg-red-400 px-5 py-2" onClick={()=>{
        changeMonth(content)
    }}>{content}</div>
  )
}

export default ChangeMonth;