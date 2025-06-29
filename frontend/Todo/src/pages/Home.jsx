import { useEffect, useState } from "react"
import { tasks } from "../db/Common"
import { getToken } from "../db/localDb/Token"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';





function Home(){
  const token =getToken()
  const [taskList,setTaskList]=useState([])
  const [myRes,setMyRes]=useState({})  


  const loadList=()=>{
      tasks(token).then((v)=>{
        
      }
      )
  }

  useEffect(()=>{  
  loadList()
  },[])


  return <>
  <ToastContainer />
  <button>Click Now</button>
  </>
}

export default Home