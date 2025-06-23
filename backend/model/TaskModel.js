import { Schema,model } from "mongoose";

const schema=new Schema({
description:{type:String,required:true},
status:{type:String,required:true},
userId:{type:Schema.Types.ObjectId,ref:'user',required:true}
},
{timestamps:true})

export const TaskModel=model('TaskInfo',schema)