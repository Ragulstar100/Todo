import { addTask, readTask, updateTask,deleteTask} from "../dal/MongoDal.js"
import jwt from "jsonwebtoken"

export const addTaskService= (taskdata)=>{
return addTask(taskdata)
}

export const readTaskService= async (id)=>{

     
return await readTask(id)
}

export const updateTaskService= async (taskId,taskData)=>{
     let task = await readTask(taskId);

       if (!task) { throw new Error("Task not found"); }

     if (task.userId!=taskData.userId) { throw new Error("Invalid User"); }
   

     return await updateTask(taskId, taskData);
}

export const deleteTaskService = async (taskId) => {

     let task = await readTask(taskId);
     if (!task) {  throw new Error("Task Not Avaiable"); }

    return await deleteTask(taskId);
}