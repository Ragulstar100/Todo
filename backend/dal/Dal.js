import { appConfig } from "../config/Config.js"
import * as mongoDal from "./MongoDal.js"

const selectedDal =appConfig.db=="mongo"?mongoDal:null

export const {findUserByName,registerUser,addTask,readTask,updateTask,deleteTask}= selectedDal;


