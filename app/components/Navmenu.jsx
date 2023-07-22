'use client'
import { AiOutlineMenu } from "react-icons/ai"
import { useContext, useState } from "react"
import { ThemeContext } from "@/context/ThemeContext"
import Link from "next/link"
import ToggleButton from "./ToogleButton"

const Navmenu = () => {
    const {mode}=useContext(ThemeContext);
    const [showDropdown,setShowDropdown]=useState(false)
  return (
    <div className="relative">
        <div className="icon" onClick={()=>{setShowDropdown(!showDropdown)}}>
            <AiOutlineMenu size={26} color={mode==='dark'?'#fff':"#000"}/>
        </div>
        <div className={`item fixed z-[999] top-[62px]  ${showDropdown?'translate-x-[-90%]':'translate-x-[100%]'} transition duration-700`}>
        <ul className={`flex gap-5 flex-col ring-1 px-6 py-4 ${mode==='dark'?'bg-black ring-white ':'bg-white ring-black'}`}>
              <li>
               <Link href={'/'}>Home</Link> 
            </li>
              <li>
               <Link href={'/blogs'}> Blogs</Link>
               </li>
              <li>
              <Link href={'/dashboard'}> Dashboard</Link>
                </li>
              <li>
              <Link href={'/about'}> About us</Link>
                </li>
              <li>
                <ToggleButton />
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Navmenu