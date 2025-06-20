import { loginService, registerService } from "../service/UserService.js"


export const regUserController = async (req,res) =>{

    try{
         registerService("ahi")   
         res.status(200).json({msg:"User Added Sucessfully"+req.password})
    }catch(err){
        res.status(400).json({error:err.message})
    }
}


export const loginUserController = async (req,res) =>{
   
    try{
        loginService(req.userName,req.password)
        res.status(200).json({msg:"Sucessfully Login"}) 
    }catch(err){
        res.status(400).json({error:err.message})
    }
}