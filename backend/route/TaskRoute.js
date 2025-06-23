import exp from "express"
import { authenticate } from "../middleware/UserMiddleWare.js";
import { addTaskAction,updateTaskAction,readTaskAction,deleteTaskAction } from "../controller/TaskController.js";
import { TaskModel } from "../model/TaskModel.js";
import { updateTaskService } from "../service/TaskService.js";


const taskRouter=exp.Router()

taskRouter.use(authenticate)
taskRouter.post('/create',addTaskAction)
taskRouter.patch('/update/:id',updateTaskAction)
taskRouter.get('/read',readTaskAction)
taskRouter.delete('/delete',deleteTaskAction)
export default taskRouter;