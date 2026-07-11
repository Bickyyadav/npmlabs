import express from "express"
import { getAllUsers, getCurrentUser } from "../controllers/user.controller.js"
import { isAuth } from "../middlewares/isAuth.js"

let userRouter = express.Router()
userRouter.get("/currentuser", isAuth, getCurrentUser)
userRouter.get("/all-users", getAllUsers)

export default userRouter