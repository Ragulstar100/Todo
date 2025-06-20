import { UserModel } from "../model/UserModel.js";

export const findUserByName = (userName)=>{
      return UserModel.findOne({userName:userName})  
}

export const registerUser = (userData)=>{
    
        UserModel.create({userName:"Ragul",password:"100"}) 
}