import TextField from '../components/TextField.jsx'
import {  useState } from 'react';
import { login2,signUp } from '../db/Common.js';
import { ToastContainer,toast } from 'react-toastify';
import { errorContext } from '../context/errorContext.jsx';
import { setToken } from '../db/localDb/Token.js';
import { useNavigate } from 'react-router-dom';


export function LoginBox(){

        const {signUp,login} = errorContext()


        const [name,setName]=useState('')
        const [pwd,setPwd] =useState('')

        const navigate = useNavigate();
    

    return    <div className='flex flex-col gap-4 items-center w-100 h-fit py-10 rounded-xl shadow-lg shadow-black/40 scale-[1.0]'> 

                <h1 className='-m-2 text-2xl'>Log In</h1>
                <p className='text-blue-300 text-xl'>Login Your Account</p>
                <TextField value={name} label="Name" className="w-80" onInput={(v) => setName(v)} />
                <TextField value={pwd} label="Password" className="w-80" onInput={(v) => setPwd(v)} />
                <button onClick={async () => {  await login(name,pwd).then((v)=>{
                        setToken(v);
                        navigate('/home')
                }) }} className='bg-blue-400 px-4 py-2 rounded-xl w-fit h-fit text-center self-end mr-5'>Login</button>

        </div>


}