import { useState } from 'react'

import './App.css'
import TextField from './ui(components)/TextField'

function App() {
  const [count, setCount] = useState(0)
  const [tabChange,setTabChange]=useState(false)

  const [name,setName]=useState('')


  return (
    <>
      <div className='flex justify-end items-center pr-5 h-15 bg-amber-500'>Welcome Todo Application</div>

      <div className='h-full flex items-center justify-center'>
        <div className='flex flex-col gap-2 items-center w-100 h-85 rounded-xl shadow-2xl'>

          <div className=' border-1 flex w-10/12 h-12  rounded-xl items-center mt-2.5'>
            <p  onClick={() => setTabChange(true)} className={`bg-clip-border w-1/2 h-full p-3 rounded-l-xl ${tabChange ? 'bg-transparent' : 'bg-amber-500'}`}>
              Log In
            </p>
            <p
              onClick={() => setTabChange(false)}
              className={`bg-clip-border w-1/2 h-full p-3 rounded-r-xl ${tabChange ? 'bg-amber-500' : 'bg-transparent'}`}
            >
              Sign Up
            </p></div>

          {tabChange ? (
            <div className='flex flex-col gap-4'>
                <TextField value={name} label="Name" className="w-2" onInput={(v) => setName(v)} />
                <TextField value={name} label="Name"  onInput={(v) => setName(v)} />

<div className="relative w-80 p-4 bg-white">
  <div className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-blue-500"></div>
  <div className="absolute bottom-0 right-0 w-1/3 h-[2px] bg-blue-500"></div>

  <p className="text-center">Border with a gap in the center 👇</p>
</div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
  
