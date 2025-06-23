import { addTask, readTask, updateTask } from "../dal/MongoDal.js"
import { TaskModel } from "../model/TaskModel.js"

export const addTaskService= (taskdata)=>{
return addTask(taskdata)
}

export const readTaskService= async (taskId)=>{
return await readTask(taskId)
}

export const updateTaskService= async (taskId,taskData)=>{
     return await updateTask(taskId, taskData);
}

export const deleteTaskService = async (taskId) => {

     if (!taskId) {
        throw new Error("Task ID is required for deletion");

    return await deleteTask(taskId);
}