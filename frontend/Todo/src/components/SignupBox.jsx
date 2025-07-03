import TextField from '../components/TextField.jsx'
import {  useState } from 'react';
import { login2,signUp } from '../db/Common.js';
import { ToastContainer,toast } from 'react-toastify';


export function SignupBox(){


        const [name,setName]=useState('')
        const [pwd,setPwd] =useState('')
        const [repwd,setRePwd] =useState('')
    

return             <div>
                <div className='flex flex-col items-center mt-5 gap-4'>
                <TextField value={name} label="Name" className="w-80" onInput={(v) => setName(v)} />
                <TextField value={pwd} label="Password" className="w-80" onInput={(v) => setPwd(v)} />
                <TextField value={repwd} label="Re-type Password" className="w-80" onInput={(v) => setRePwd(v)} />  
                <p className='text-blue-400' onClick={()=>{setTabChange(true)}}>Already Have Account ?</p>
                <button  onClick={()=>{
                  if(pwd.trim()!=''&&pwd==repwd&&name.trim()!=''){
                    signUp(name,pwd).then((v)=>{
                      if(!v.error){          
                      toast.success(msg,{autoClose:false,position:"top-center"})
                      }else if(v.code&&v.error){
                           toast.error(v.error,{autoClose:false,position:"top-center"})
                      }else{
                         toast.error(v.error,{autoClose:false,position:"top-center"})
                      }

                    
                    }).catch((e)=>{
                           toast.error(e,{autoClose:false,position:"top-center"})
                    })
                  }else if(name.trim()==''){
                     toast.error("Enter Your User Name",{autoClose:false,position:"top-center"})
                  }
                  else{
                  toast.error("Enter Your Password Correctly",{autoClose:false,position:"top-center"})
                  }
                }} className='bg-blue-400 px-4 py-2 rounded-xl w-fit h-fit text-center self-end translate-x-3 -translate-y-2'>Sign Up</button>
              

            </div>
            </div>
}