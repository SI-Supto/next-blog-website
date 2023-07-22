'use client'
import { useContext } from "react"
import { ThemeContext } from "@/context/ThemeContext"
const ToggleButton=()=>{

    const {mode,toggle}=useContext(ThemeContext);
    return(
        <div 
        className="relative flex items-center w-[48px] px-1 h-auto ring-2 ring-blue-500 rounded-full cursor-pointer"
        onClick={toggle}
        >
        <div className="icon">🔆</div>
        <div className="icon">🌙</div>
        <div className={`ball flex items-center absolute w-[19px] h-[19px] rounded-full bg-blue-500 ${mode==='dark'?'right-[2px]':'left-[2px]'} duration-100 transition-all`}></div>
        </div>
    )
}
export default ToggleButton