import TextField from '../components/TextField.jsx'
import * as db from "../db/Mongo.js"
import { toast } from 'react-toastify';



export function RegisterTask({currentTask,getCurrentTask,userId,token,taskChangeListner}){


     const addTask=  async (currentTask)=>{

        db.addTask(token,userId,currentTask.status||"Not opened",currentTask.description||"none").then((v)=>{
    
        if(v.isInternalError&&v.code!=200){
          toast.error(v.code,{autoClose:false,position:"top-center"})
        }else if(v.code==200){
           toast.success("Data Added successfully",{autoClose:false,position:"top-center"})  
        }

       taskChangeListner()

       });
     }

     const updateTask = async (currentTask) =>{
    
        db.updateTask(token,currentTask._id,currentTask.status,currentTask.description).then((v)=>{
    
        if(!v.error){
          toast.success("Data Updated successfully",{autoClose:false,position:"top-center"})  
        }else {
              toast.error(v.error,{autoClose:false,position:"top-center"})
        }
       taskChangeListner()


       }
    )
     }

     const deleteTask = async (currentTask) =>{
         db.deleteTask(token,currentTask._id).then((v)=>{
          if(v.error){
          toast.error(v.error,{autoClose:false,position:"top-center"})
        }else {
           toast.success("Data Deleted successfully",{autoClose:false,position:"top-center"})  
        }
       taskChangeListner()

         }) 
     }

    return <div className="flex items-center flex-col  min-w-sm h-full">
    
     <TextField label="Description" className="w-80 mt-5" onInput={(v)=>{getCurrentTask({...currentTask,description:v}) }} value={currentTask?currentTask.description:""} ></TextField>
      <select name="" className="py-3  w-78 text-center bg-white border rounded-md shadow-sm text-gray-700 text-sm font-medium
         focus:outline-none focus:ring-2
         ring-transparent
         border-blue-500
         appearance-none pr-8 " onChange={(v)=>{ 
        getCurrentTask({...currentTask,status:v.target.value})
      }} value={currentTask?currentTask.status:'Not Open'}>
        <option  value="Not opened" className="text-blue-400 h-fit">Not Open</option>
        <option value="Cancelled" className="text-blue-400 h-fit">Cancel</option>
        <option value="Completed" className="text-blue-400 h-fit">Complete</option>
      </select>    
      <div className="flex justify-end gap-1 w-80"> {  
        currentTask?._id&&(<button className="px-6 py-3 bg-red-400! w-fit h-fit rounded-sm mt-2" onClick={ async ()=>{ deleteTask(currentTask)} }> Delete</button>) 
      }

      <button onClick={async ()=>{
      
      if(!currentTask._id) {
        await addTask(currentTask)
      }
      else{
       await updateTask(currentTask)
      }
    }
    } className="px-6 py-3  w-fit h-fit rounded-sm mt-2" >{currentTask?._id?"Update":"Add"}</button> 
    </div>

</div>
}