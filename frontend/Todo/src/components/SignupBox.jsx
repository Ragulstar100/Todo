import TextField from '../components/TextField.jsx'
import {  useState } from 'react';
import { login2,signUp } from '../db/Common.js';
import { ToastContainer,toast } from 'react-toastify';
import { errorContext } from '../context/errorContext.jsx';


export function SignupBox(){

        const {signUp,login} = errorContext()
         
        const [name,setName]=useState('')
        const [pwd,setPwd] =useState('')
        const [repwd,setRePwd] =useState('')
    

return    <div className='flex flex-col gap-4 items-center w-100 h-fit py-10 rounded-2xl shadow-lg shadow-black/40 scale-[0.9]'> 
               
                <h1 className='text-2xl'>Sign Up</h1>
                <p className='text-blue-300 text-xl' >Register Your Account</p>        
                <TextField value={name} label="Name" className="w-80" onInput={(v) => setName(v)} />
                <TextField value={pwd} label="Password" className="w-80" onInput={(v) => setPwd(v)} />
                <TextField value={repwd} label="Re-type Password" className="w-80" onInput={(v) => setRePwd(v)} />  
                <button  onClick={()=>{
                 signUp(name,pwd,repwd)
                }} className='bg-blue-400 px-4 py-2 rounded-xl w-fit h-fit text-center self-end mr-5'>Sign Up</button>
            
            </div>

            
}