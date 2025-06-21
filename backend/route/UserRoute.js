import exp from "express"
import { loginUserController, regUserController } from "../controller/UserController.js";



const userRouter=exp.Router()

userRouter.post('/register',regUserController)
userRouter.post('/login',loginUserController)

export default userRouter;