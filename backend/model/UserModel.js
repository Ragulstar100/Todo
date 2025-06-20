import mongoose,{model,Schema} from "mongoose"


const userSchema=new Schema({
    userName : {type:String,required:true},
    password:{type:String,required:true},
    createdAt:{type:Date,default:Date.now}
})

export const UserModel =model("UserInfo",userSchema)