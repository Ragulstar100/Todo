import { createContext, useContext, useEffect, useState } from "react";


const themeContext=createContext()

export const context=()=> useContext(themeContext)

export function ThemeProvider({children}){


    
    const [enableDarkMode,setEnableDarkMode]=useState(true)

    useEffect(()=>{
      if(enableDarkMode){
        document.documentElement.classList.add('dark')
      }else{
        document.documentElement.classList.remove('dark')
      }    

    },[enableDarkMode])

    const changeTheme=()=>{
        setEnableDarkMode(!enableDarkMode)
    }

   return (
   <themeContext.Provider value={{enableDarkMode,changeTheme}}>
        {children}
    </themeContext.Provider>)

    



}
