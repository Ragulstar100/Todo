
import { use, useState } from 'react';
import TextField from '../ui(components)/TextField.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import { useNavigate } from 'react-router-dom';
import { login2 } from '../db/Common.js';
import { getToken, setToken } from '../db/localDb/Token.js';
import { ToastContainer } from 'react-toastify';


function Auth(){
  
  const [count, setCount] = useState(0)
  const [tabChange,setTabChange]=useState(true)

  const [name,setName]=useState('')
  const [pwd,setPwd] =useState('')
 
  const token=getToken()
  const navigator=useNavigate()
  
  const loginAction= async (name,password)=>{

    let login = await login2(name,password)

      if(login.data){
        setToken(login.data.token)
        navigator('/home')
      }
  }

 


  return (
    <>

      <ToastContainer/>
      <div className='flex justify-end items-center pr-5 h-15 bg-blue-400'>Welcome Todo Application</div>

      <div className='h-full flex items-center justify-center'>

        <div className='flex flex-col gap-2 items-center w-100 h-fit py-2 rounded-xl shadow-2xl'>

          <div className=' border-1 border-blue-400 flex w-10/12 h-12  rounded-xl items-center mt-2.5'>
            <p  onClick={() => setTabChange(true)} className={`bg-clip-border w-1/2 h-full p-3 rounded-l-xl ${tabChange ? 'bg-transparent' : 'bg-blue-400'}`}> Log In </p>
            <p onClick={() => setTabChange(false)} className={`bg-clip-border w-1/2 h-full p-3 rounded-r-xl ${tabChange ? 'bg-blue-400' : 'bg-transparent'}`}> Sign Up </p>
          </div>

          {
          tabChange ? (
            <div className='flex flex-col items-center mt-5 gap-4'>

                <TextField value={name} label="Name"  onInput={(v) => setName(v)} />
                <TextField value={pwd} label="Password"  onInput={(v) => setPwd(v)} />
                <p className='text-blue-400' onClick={()=>{setTabChange(false)}}>Don't Have Account ?</p>
                <button onClick={() => {loginAction(name,pwd)}} className='bg-blue-400 px-4 py-2 rounded-xl w-fit h-fit text-center self-end translate-x-3 -translate-y-2'>Login</button>
              
            </div>
          ) 
          :
          (
            <div>
                <div className='flex flex-col items-center mt-5 gap-4'>
               
                <TextField value={name} label="Name"  onInput={(v) => setName(v)} />
                <TextField value={pwd} label="Password"  onInput={(v) => setPwd(v)} />
                <p className='text-blue-400' onClick={()=>{setTabChange(true)}}>Already Have Account ?</p>
                <button  onClick={()=>{}} className='bg-blue-400 px-4 py-2 rounded-xl w-fit h-fit text-center self-end translate-x-3 -translate-y-2'>Sign Up</button>
              

            </div>
            </div>
          )
          }

        </div>

      </div>

    </>
  )
}

export default Auth