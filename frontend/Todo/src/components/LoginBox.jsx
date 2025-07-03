import TextField from '../components/TextField.jsx'
import {  useState } from 'react';
import { login2,signUp } from '../db/Common.js';
import { ToastContainer,toast } from 'react-toastify';


export function LoginBox(){

      const loginAction= async (name,password)=>{
    
        let login = await login2(name,password)
    
    
          if(login.data?.token){
            setToken(login.data.token)
            navigator('/home')
          }else if(login.isInternalError()){
           toast.info(login.error,{autoClose:false,position:"top-center"})
          }else{
             toast.info("Server Down",{autoClose:false,position:"top-center"})
          }
      }

        const [name,setName]=useState('')
        const [pwd,setPwd] =useState('')
    

    return    <div className='flex flex-col items-center mt-5 gap-4 bg-inherit'>

                <TextField value={name} label="Name" className="w-80" onInput={(v) => setName(v)} />
                <TextField value={pwd} label="Password" className="w-80" onInput={(v) => setPwd(v)} />
                <p className='text-blue-400' onClick={()=>{setTabChange(false)}}>Don't Have Account ?</p>
                <button onClick={() => {loginAction(name,pwd)}} className='bg-blue-400 px-4 py-2 rounded-xl w-fit h-fit text-center self-end translate-x-3 -translate-y-2'>Login</button>
              
            </div>
}