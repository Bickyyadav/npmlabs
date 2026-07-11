import express from "express"
import dotenv from "dotenv"
import { connectDb } from "./configs/connectDB.js"

import dns from "dns"
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import cors from "cors"

dns.setServers(["8.8.8.8"]);

dotenv.config()

const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())


app.get("/", (req, res) => {
    res.json("hi there")
})

app.use("/api/auth", authRouter)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is listening on port number ${PORT}`);
    connectDb()
})