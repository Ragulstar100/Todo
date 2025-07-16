import { useEffect, useState } from "react"
import { tasks,addTask,deleteTask, updateTask} from "../db/Common"
import { getToken, removeToken } from "../db/localDb/Token"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import TextField from '../components/TextField.jsx'
import {MyPromise} from "../MyPromise.js"
import { NavBar } from "../components/NavBar.jsx";
import { RegisterTask } from "../components/RegisterTask.jsx";
import { TaskListView } from "../components/TaskListView.jsx";




  let taskTableSheelStyle=" p-3 text-center"
 
 function Home(){
 

  const token =getToken()
  const [myRes,setMyRes]=useState(new MyPromise()) 
  const [currentTask,setCurrentTask]=useState(undefined) 

 
  const nav=useNavigate()


  const loadList=()=>{
      tasks(token).then((v)=>{
        if(v.data){

        }else if(v.isInternalError()&&v.code==401){
        toast.error("Your Session Expried Press Logout And Login Again",{autoClose:false,position:"top-center"})
        }else{
        toast.info("Server Down",{autoClose:false,position:"top-center"})
        }
        setMyRes({...myRes,...v}) 
      }
      
      )
      
  }

  useEffect(()=>{  
  loadList()  
  },[])


 
 
 return <>
    

    <div className="bg-blue-400 p-4 flex justify-end">
     <NavBar getTabChange={(v)=>{ }}/>
      </div>
    
     { myRes.code==401 ?  <h1 className="w-full text-3xl text-center py-4">401 Invalid Token</h1>:
     
        myRes.code!=200 ?  <h1 className="w-full text-3xl text-center py-4">Server Not Found</h1>:
        <div className="flex flex-wrap mt-1 gap-1 w-full justify-between">
    
        <RegisterTask currentTask={currentTask} getCurrentTask={(v)=>{setCurrentTask(v)}} userId={myRes.data?.id||''} token={token} taskChangeListner={async ()=>{ loadList() }}/>

        <TaskListView  currentTask={currentTask} taskList={myRes.data?.task} getCurrentTask={(v)=>{
          setCurrentTask(v)}} />

       </div> 
       
       }

  </>
 }







export default Home