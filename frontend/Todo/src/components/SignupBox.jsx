import TextField from '../components/TextField.jsx'
import {  useState } from 'react';
import { login2,signUp } from '../db/Common.js';
import { ToastContainer,toast } from 'react-toastify';
import { errorContext } from '../context/errorContext.jsx';


export function SignupBox(){

        const {signUp} = errorContext()
         
        const [name,setName]=useState('')
        const [pwd,setPwd] =useState('')
        const [repwd,setRePwd] =useState('')
    

return      <div>
                <div className='flex flex-col items-center mt-5 gap-4'>
                <TextField value={name} label="Name" className="w-80" onInput={(v) => setName(v)} />
                <TextField value={pwd} label="Password" className="w-80" onInput={(v) => setPwd(v)} />
                <TextField value={repwd} label="Re-type Password" className="w-80" onInput={(v) => setRePwd(v)} />  
                <p className='text-blue-400' onClick={()=>{setTabChange(true)}}>Already Have Account ?</p>
                <button  onClick={()=>{
                 signUp(name,pwd,repwd)
                }} className='bg-blue-400 px-4 py-2 rounded-xl w-fit h-fit text-center self-end translate-x-3 -translate-y-2'>Sign Up</button>
            </div>
            </div>
}