import { TaskModel } from "../model/TaskModel.js";
import { UserModel } from "../model/UserModel.js";

export const findUserByName = async (userName) => {
 return UserModel.findOne({ userName }); 
};

export const registerUser = (userData)=>{
       return UserModel.create(userData) 
}

export const addTask = (taskData)=>{
       return TaskModel.create(taskData)
}

export const readTask = async (taskId) =>{
       return TaskModel.findById(taskId)
}

export const updateTask = async (taskId,taskData) =>{
     
     return TaskModel.findByIdAndUpdate(
      taskId,
      { $set: taskData},
      { new: true }
    )
}

export const deleteTask = (taskId) => {
       return TaskModel.findByIdAndDelete(taskId)
}