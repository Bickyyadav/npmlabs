import express from "express"
import { getAllUsers, getCurrentUser, verifyCloudflareToken } from "../controllers/user.controller.js"
import { isAuth } from "../middlewares/isAuth.js"

let userRouter = express.Router()
userRouter.get("/currentuser", isAuth, getCurrentUser)
userRouter.get("/all-users", getAllUsers)
userRouter.post("/verify-token", verifyCloudflareToken)

export default userRouter