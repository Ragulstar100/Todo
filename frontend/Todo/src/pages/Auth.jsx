
import { useState } from 'react';
import TextField from '../ui(components)/TextField.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import { useNavigate } from 'react-router-dom';


function Auth(){
  
  const [count, setCount] = useState(0)
  const [tabChange,setTabChange]=useState(true)

  const [name,setName]=useState('')
  const [pwd,setPwd] =useState('')
 
  const [res,setRes]=useState({res:'',token:(localStorage.getItem('token'))})
  
  const loginAction= async (name,password)=>{

      const user={
        userName:name,
        password:password
      }

   
 
      fetch("http://localhost:5000/auth/login",{
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)  
        }) .then(response => response.json())
    .then(data => {
    console.log('Login:',data.error?data.error:data.msg);
    if(data.error){
      setRes((d)=>{return {...d,res:data.error}})
    }else{
      setRes({res:'',token:data.token})
      localStorage.setItem('token',data.token)

    }                       
    // maybe save token here
  })
  .catch(error => {
    console.error('Login failed:', error);
  });

  }

 


  return (
    <>

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
                <p className='text-red-400 text-[13px]'>{res.res==''?res.token:res.res}</p>
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
                <p className='text-red-400 text-[13px]'>{res}</p>
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