
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

  
  
  return (
    <>

        <NavBar getTabChange={(v)=>{ setTabChange(v)}}/>
       
           <div className='h-full flex items-center justify-center'> 

          { tabChange ? <LoginBox/>:<SignupBox/> }
          </div>
          <style>
            
          </style>
    
       </>
  )
}

export default Auth