import mongoose,{model,Schema} from "mongoose"
import bcrypt from "bcryptjs"


const userSchema=new Schema({
    userName : {type:String,required:true},
    password:{type:String,required:true},
    createdAt:{type:Date,default:Date.now}
})

userSchema.pre("save", async function hashPassword (next) {
    if (!this.isModified('password')) {
        return next()
    }



    this.password = await bcrypt.hash(this.password, 16);
    next();
})

export const UserModel =model("UserInfo",userSchema)