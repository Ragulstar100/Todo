import { TaskModel } from "../model/TaskModel.js"
import { addTaskService, readTaskService, updateTaskService,deleteTaskService} from "../service/TaskService.js"

export const addTaskAction = async (req,res)=>{
    try{
    await addTaskService(req.body)
    res.status(200).json({msg:"Your Data added Sucessfully"})    
    }catch(error){
    res.status(400).json({msg:error.message})
    }

}

export const readTaskAction = async (req,res)=>{
    try{
    var task= await readTaskService(req.user.id)
    res.status(200).json({id:req.user.id,task:task})    
    }catch(error){
    res.status(400).json({msg:error.message})
    }
}



export const updateTaskAction = async (req, res) => {
  try {
   const result = await updateTaskService(req.params.id, req.body);
    res.status(200).json({ msg: "Data Updated" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export const deleteTaskAction = async (req,res)=>{
    try{
     await deleteTaskService(req.params.id)
    res.status(200).json({msg:"Your Data Delete Sucessfully"})    
    }catch(error){
    res.status(400).json({msg:error.message})
    }
}

