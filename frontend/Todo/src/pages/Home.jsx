import { useEffect, useState } from "react"
import { tasks } from "../db/Common"
import { getToken, removeToken } from "../db/localDb/Token"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import TextField from "../ui(components)/TextField";



function Home(){
  const token =getToken()
  const [taskList,setTaskList]=useState([])
  const [myRes,setMyRes]=useState({}) 
  const [currentTask,setCurrentTask]=useState({}) 

  const nav=useNavigate()


  const loadList=()=>{
      tasks(token).then((v)=>{
        setMyRes(v)
        if(v.data){
        console.log(v.data)  
        setTaskList(v.data)
        }else if(v.isInternalError()){
         nav('/')
        }else{
          console.log("nothing")
        }
      }
      )
  }

  useEffect(()=>{  
  loadList()  
  },[])

  let taskTableSheelStyle=" p-3 text-center"
  return <>
  <ToastContainer />

    <div className="bg-blue-400 p-4 flex justify-end">
    <button className="text-white" onClick={()=>{ 
      removeToken()
      nav('/')  }}>
        Logout
      </button>
      </div>
    
      <div className="flex flex-wrap mt-1 gap-1 w-full justify-between">
      
      <div className="flex flex-col w-[350px] h-full">
      <button className="px-6 py-3 bg-green-300 w-fit h-fit rounded-xl mt-2 ml-2" >Add</button> 
       
      <TextField label="Description"></TextField>
      <select name="" onChange={(v)=>{
        console.log(v.target.value)
      }}>
        <option value="none">--Select Any One--</option>
        <option value="Assigned">Assign</option>
         <option value="Cancelld" >Cancel</option>
        <option value="Completed">Complete</option>
      </select>
      </div>
     
      <table className="w-1/2 items-end mr-2">
            <tr className=" bg-blue-400">
      <th className={taskTableSheelStyle+" rounded-l-xl p-2"}>S.no</th>
      <th className={taskTableSheelStyle} >Updated Date</th>
      <th className={taskTableSheelStyle}>Description</th>
      <th className={taskTableSheelStyle+" rounded-r-xl p-2"}>Status</th>
    </tr>
    {
      taskList.map((v,i)=>{
        console.log(v)
        return  <tr key={i}>
          <td className={taskTableSheelStyle}>{i}</td>
          <td className={taskTableSheelStyle}>{formatTimestamp(v.updatedAt)}</td>
          <td className={taskTableSheelStyle}>{v.description}</td>
          <td className={taskTableSheelStyle}>{v.status}</td>
        </tr>
        
      })
    }
      </table>

    </div>

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