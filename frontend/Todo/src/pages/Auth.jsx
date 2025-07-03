
import {  useState } from 'react';
import TextField from '../components/TextField.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import { useNavigate } from 'react-router-dom';
import { login2,signUp } from '../db/Common.js';
import { getToken, setToken } from '../db/localDb/Token.js';
import { ToastContainer,toast } from 'react-toastify';
import { NavBar } from "../components/NavBar.jsx";
import { LoginBox } from '../components/LoginBox.jsx';
import { SignupBox } from '../components/SignupBox.jsx';



function Auth(){
  
  const [count, setCount] = useState(0)
  const [tabChange,setTabChange]=useState(true)

  const [name,setName]=useState('')
  const [pwd,setPwd] =useState('')
  const [repwd,setRePwd] =useState('')

 
  const token=getToken()
  const navigator=useNavigate()
  
  
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

 


  return (
    <>

        <NavBar getTabChange={(v)=>{ setTabChange(v)}}/>

         <div className='h-full flex items-center justify-center'>

         <div className='flex flex-col gap-2 items-center w-100 h-fit py-2 rounded-xl shadow-2xl' >

          { !tabChange? (<h1>Sign Up</h1>) : <h1>Log In</h1> }

          {
          tabChange ? (
            <LoginBox/>
            // <div className='flex flex-col items-center mt-5 gap-4 bg-inherit'>

            //     <TextField value={name} label="Name" className="w-80" onInput={(v) => setName(v)} />
            //     <TextField value={pwd} label="Password" className="w-80" onInput={(v) => setPwd(v)} />
            //     <p className='text-blue-400' onClick={()=>{setTabChange(false)}}>Don't Have Account ?</p>
            //     <button onClick={() => {loginAction(name,pwd)}} className='bg-blue-400 px-4 py-2 rounded-xl w-fit h-fit text-center self-end translate-x-3 -translate-y-2'>Login</button>
              
            // </div>
          ) 
          :
          (
            <SignupBox/>
            // <div>
            //     <div className='flex flex-col items-center mt-5 gap-4'>
            //     <TextField value={name} label="Name" className="w-80" onInput={(v) => setName(v)} />
            //     <TextField value={pwd} label="Password" className="w-80" onInput={(v) => setPwd(v)} />
            //     <TextField value={repwd} label="Re-type Password" className="w-80" onInput={(v) => setRePwd(v)} />  
            //     <p className='text-blue-400' onClick={()=>{setTabChange(true)}}>Already Have Account ?</p>
            //     <button  onClick={()=>{
            //       if(pwd.trim()!=''&&pwd==repwd&&name.trim()!=''){
            //         signUp(name,pwd).then((v)=>{
            //           if(!v.error){          
            //           toast.success(msg,{autoClose:false,position:"top-center"})
            //           }else if(v.code&&v.error){
            //                toast.error(v.error,{autoClose:false,position:"top-center"})
            //           }else{
            //              toast.error(v.error,{autoClose:false,position:"top-center"})
            //           }

                    
            //         }).catch((e)=>{
            //                toast.error(e,{autoClose:false,position:"top-center"})
            //         })
            //       }else if(name.trim()==''){
            //          toast.error("Enter Your User Name",{autoClose:false,position:"top-center"})
            //       }
            //       else{
            //       toast.error("Enter Your Password Correctly",{autoClose:false,position:"top-center"})
            //       }
            //     }} className='bg-blue-400 px-4 py-2 rounded-xl w-fit h-fit text-center self-end translate-x-3 -translate-y-2'>Sign Up</button>
              

            // </div>
            // </div>
          )
          }

      </div>

      </div>
              
    </>
  )
}

export default Auth