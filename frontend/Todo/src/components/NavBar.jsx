import { context } from "../context/themeContext"
import { useEffect, useState } from "react";


export function NavBar({getTabChange}){

        const {enableDarkMode,changeTheme} = context();

          const [tabChange,setTabChange]=useState(true)
        
        useEffect(() => {
        getTabChange(tabChange);
        }, [tabChange]);

    return <div className="flex justify-end gap-5 p-4">
        
          <div className=' border-1 border-blue-400 flex w-[200px] h-12  rounded-xl items-center mt-2.5'>
            <p  onClick={() => setTabChange(true)} className={`bg-clip-border w-1/2 h-full p-3 rounded-l-xl ${!tabChange ? 'bg-transparent' : 'bg-blue-400'}`}> Log In </p>
            <p onClick={() => setTabChange(false)} className={`bg-clip-border w-1/2 h-full p-3 rounded-r-xl ${!tabChange ? 'bg-blue-400' : 'bg-transparent'}`}> Sign Up </p>
          </div>

        <button onClick={()=>{
            changeTheme()
        }}>{enableDarkMode?"Light Theme":"Dark Theme"}</button>
        </div>
}