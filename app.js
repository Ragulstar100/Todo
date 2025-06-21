import exp from "express"
import { appConfig } from "./backend/config/Config.js"
import {connectToMongoDb} from "./backend/db/MongoDb.js"
import userRouter from "./backend/route/UserRoute.js"
import taskRouter from "./backend/route/TaskRoute.js"


const app=exp()

app.use(exp.json())

app.use('/auth',userRouter)
app.use('/task',taskRouter)

const connectTODb = async () =>{
    try{
        if(appConfig.db="mongo"){
            connectToMongoDb()
        }
    }
    catch(err){
        console.log("db connection failed",err)    }
}

app.listen(appConfig.port,()=>{
    connectTODb()
    console.log("DB connection Sucessfully",appConfig.port)
})

