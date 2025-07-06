import { TaskModel } from "../model/TaskModel.js";
import { UserModel } from "../model/UserModel.js";

export const findUserByName = async (userName,select) => {
    
 if(select){         
 return  UserModel.findOne({ userName }).select(select); 
 }else{
  return UserModel.findOne({ userName })    
 }
};

export const registerUser = (userData)=>{
       return UserModel.create(userData) 
}

export const addTask = (taskData)=>{
       return TaskModel.create(taskData)
}

export const readTask = async (id) =>{
      
       
       return await TaskModel.find({userId:id})
}

export const updateTask = async (taskId,taskData) =>{
     
     return TaskModel.findByIdAndUpdate(
      taskId,
      { $set: taskData},
      { new: true }
    )
}

export const deleteTask =async (taskId) => {
       return await TaskModel.findByIdAndDelete(taskId)
}