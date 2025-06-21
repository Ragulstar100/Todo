import { UserModel } from "../model/UserModel.js";

export const findUserByName = async (userName) => {
 return UserModel.findOne({ userName }); 
};

export const registerUser = (userData)=>{
       return UserModel.create(userData) 
}