import exp from "express"
import { loginUserController, regUserController } from "../controller/UserController.js";


const userRouter=exp.Router()

userRouter.get('/reg',regUserController)
userRouter.route('/login',loginUserController)

export default userRouter;