import { useEffect, useState } from "react"
import { tasks } from "../db/Common"
import { getToken, removeToken } from "../db/localDb/Token"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import TextField from "../ui(components)/TextField";
import {MyPromise} from "../MyPromise"


function Home(){
  const token =getToken()
  const [myRes,setMyRes]=useState(new MyPromise()) 
  const [currentTask,setCurrentTask]=useState(undefined) 

 
  const nav=useNavigate()


  const loadList=()=>{
      tasks(token).then((v)=>{
        if(v.data){
        setMyRes({...myRes,data:v.data}) 
        }else if(v.isInternalError()){
        toast.error("Your Session Expried Press Logout And Login Again",{autoClose:false,position:"top-center"})
        }else{
        toast.info("Server Down",{autoClose:false,position:"top-center"})
        }
      }
      )
  }

  const addTask=()=>{

  }


  useEffect(()=>{  
  loadList()  
  },[])

  let taskTableSheelStyle=" p-3 text-center"
  return <>
  <ToastContainer />

    <div className="bg-blue-400 p-4 flex justify-end">
    <button className="text-white text-xl" onClick={()=>{ 
      removeToken()
      nav('/')  }}>
        Logout
      </button>
      </div>
    
     {true?  <div className="flex flex-wrap mt-1 gap-1 w-full justify-between">
      
      
      <div className="flex items-center flex-col w-sm min-w-sm h-full">
      <TextField label="Description" className="w-80 mt-5" onInput={(v)=>{

      }} value={currentTask?currentTask.description:"hello"} ></TextField>
      <select name="" className="py-3  w-78 text-center
         bg-white border border-gray-300 rounded-md shadow-sm
         text-gray-700 text-sm font-medium
         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
         appearance-none pr-8 " onChange={(v)=>{
        
      }} value={"Cancelld"}>
        <option  value="Not opened" className="text-blue-400 h-fit">Not Open</option>
         <option value="Cancelled" className="text-blue-400 h-fit">Cancel</option>
        <option value="Completed" className="text-blue-400 h-fit">Complete</option>
      </select>
      <button className="self-end px-6 py-3 bg-blue-300 w-fit h-fit rounded-xl mt-2 mr-8" >{currentTask?"Update":"Add"}</button> 
      </div>



      <div className="flex flex-col  w-1/2 h-10 mr-2 min-w-sm">

      <div className="flex  bg-blue-400 w-full h-fit rounded-xl">
      <p className={taskTableSheelStyle+" w-1/9"} >S.no</p>
      <p className={taskTableSheelStyle+" w-3/9 "} >Updated Date</p>
      <p className={taskTableSheelStyle+" w-3/9 "} >Description</p>
      <p className={taskTableSheelStyle+"w-2/9"} >Status</p>
      </div> 
      
      {
        Array.from(myRes.data?.task||[]).map((v,i)=>{
         return (
  <div key={i} className={`flex hover:bg-blue-200 cursor-pointer  ${ currentTask==v? 'bg-blue-300':''}`} onClick={()=>{
    setCurrentTask(v)
  }}>
    <p className={taskTableSheelStyle+" w-1/9"}>{i+1}</p>
    <p className={taskTableSheelStyle+" w-3/9"} >{formatTimestamp(v.updatedAt)}</p>
    <p className={taskTableSheelStyle+" w-3/9"}>{v.description}</p>
    <p className={taskTableSheelStyle+" w-2/9"}>{v.status}</p>
  </div>
) 
        })   
      }
      
     <button className="p-3 hover:bg-blue-200" onClick={()=>{
      setCurrentTask(undefined)
     }}>Add Task</button>

      </div>



       </div> :<h1 className="w-full text-6xl text-center py-4">401 Invalid Token</h1>}

  </>
}



function formatTimestamp(timestamp) {
  const date = new Date(timestamp);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

// Example usage:
const ts = "2025-07-01T08:20:00Z";
console.log(formatTimestamp(ts));


export default Home