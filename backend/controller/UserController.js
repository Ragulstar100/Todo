import { data } from "react-router-dom"
import { loginService, registerService } from "../service/UserService.js"


export const regUserController = async (req,res) =>{

    try{
         await registerService(req.body)   
         res.status(200).json({msg:"User Added Sucessfully"})
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

export const loginUserController = async (req,res) =>{
   
    try{ 
        var token= await loginService(req.body.userName,req.body.password)
        res.status(200).json({token:token}) 
    }catch(err){
        res.status(400).json({error:err.message})
    }

}


//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NTYyYzUyYTU5Y2YyZTQ3Nzg5Y2U5NCIsImlhdCI6MTc1MDQ4OTY2OSwiZXhwIjoxNzUwNDkzMjY5fQ.zqkHDgKPIYeqJKhPdm4AMR2TyV4AZB6wUIlhgZCpcpE"