import { findUserByName,registerUser} from "../dal/Dal.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { appConfig } from "../config/Config.js";

export const registerService = async (userData)=>{
    let user = await findUserByName(userData.userName);
    if (user) {
        throw new Error("User already exists")
    }
    user = await registerUser(userData);
    return user;
}

export const loginService = async (userName,password)=>{
    let user=  await findUserByName(userName) 
    
    //!user used for null check if not used give exception if user is null
    if(!user|| !(await bcrypt.compare(password,user.password))){
          throw Error("Not Valid:Check your User Name Or password")
    }

   const token=jwt.sign({id:user._id},appConfig.jwt_key,{expiresIn:'1h'})
   return {user,token};
}