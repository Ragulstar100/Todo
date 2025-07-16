import { context } from "../context/themeContext"
import { useEffect, useState } from "react";
import { getToken,removeToken} from "../db/localDb/Token";
import { useNavigate } from 'react-router-dom';


export function NavBar({getTabChange}){

        const {enableDarkMode,changeTheme} = context();

          const [tabChange,setTabChange]=useState(true)
          const navigator=useNavigate()
        
        useEffect(() => {
        getTabChange(tabChange);
        }, [tabChange]);

    return <div className="flex justify-end gap-5 p-4 items-center">

    
        {/* <img src={enableDarkMode?"sun.png":"moon.png"} className="w-12 h-12  rounded-xl bg-black/10"  onClick={()=>{ changeTheme()  }} /> */}

        
        <h1 className="w-18 text-center text-sm" onClick={()=>{ changeTheme()  }} >{enableDarkMode?"DARK MODE":"LIGHT MODE"}</h1>

         {
          !getToken()?<div className=' border-1 !border-blue-400 flex w-[200px] h-12  rounded-xl items-center'>
            <p  onClick={() => setTabChange(true)} className={`bg-clip-border w-1/2 h-full p-3 rounded-l-xl ${!tabChange ? 'bg-transparent' : 'bg-blue-400'}`}> Log In </p>
            <p onClick={() => setTabChange(false)} className={`bg-clip-border w-1/2 h-full p-3 rounded-r-xl ${!tabChange ? 'bg-blue-400' : 'bg-transparent'}`}> Sign Up </p>
          </div>:  <button  onClick={
            () => {
              removeToken()
              navigator('/')
            }
            } className={`bg-clip-border w-25 h-full p-3 rounded-sm bg-blue-400`}> Log Out </button>}


        </div>
}