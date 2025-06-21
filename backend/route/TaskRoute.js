import exp from "express"
import { authenticate } from "../middleware/UserMiddleWare.js";


const taskRouter=exp.Router()

taskRouter.use(authenticate)


export default taskRouter;