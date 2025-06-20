import { findUserByName,registerUser} from "../dal/UserDal.js";

export function registerService(userData){
   let user= findUserByName(userData.userName)
   if(user){  
        registerUser(userData.userName)
   }else{
        throw Error("User Already Exsists")
   }
}

export function loginService(userName,password){
    let user= findUserByName(userName)  
   if(!user||user.password==password){
        console.log("Login Sucessfully")
   }else{
        throw Error("User Not Exsists")
   }
}