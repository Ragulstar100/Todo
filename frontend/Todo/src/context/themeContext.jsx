import { createContext, useContext, useEffect, useState } from "react";


const themeContext=createContext()

export const context=()=> useContext(themeContext)

export function ThemeProvider({children}){

   const [enableDarkMode,setEnableDarkMode]=useState(true)

   const getTheme= ()=>{
            if(enableDarkMode){
                return "dark"
            }else{
                return "light"
            }
   }

    useEffect(()=>{    
    document.getElementById("root").setAttribute("theme", getTheme());  

    },[enableDarkMode])

    const changeTheme=()=>{
        setEnableDarkMode(!enableDarkMode)
    }

    

   return (
   <themeContext.Provider value={{enableDarkMode,changeTheme,getTheme}}>
        
        {children}

    </themeContext.Provider>)

    



}
