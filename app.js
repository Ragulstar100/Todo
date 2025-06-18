import exp from "express"
import { appConfig } from "./config/config.js"
import {connectToMongoDb} from "./db/mongo.js"


// const app=exp()

// const connectTODb = async () =>{
//     try{
//         if(appConfig.db="mongo"){
//             connectToMongoDb()
//         }
//     }
//     catch(err){
//         console.log("db connection failed",err)/     }
// }

// app.listen(appConfig.port,()=>{
//     connectTODb()
//     console.log("connection Sucessfully",appConfig.port)
// })