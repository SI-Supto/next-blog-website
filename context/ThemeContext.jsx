'use client'
import React, { createContext, useState } from 'react'

export const ThemeContext=createContext(); 
const ThemeProvider = ({children}) => {
    const [mode,setMode]=useState('dark');
    const toggle=()=>{
        setMode((prev)=>(prev==='dark'?'light':'dark'))
    }
  return (
    <ThemeContext.Provider value={{toggle,mode}}>
    <div className={` ${mode==='dark'?'bg-black text-white':"bg-white text-black"} duration-600 transition`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider