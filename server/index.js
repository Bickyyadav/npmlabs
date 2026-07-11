import express from "express"
import dotenv from "dotenv"
import { connectDb } from "./configs/connectDB.js"

import dns from "dns"
dns.setServers(["8.8.8.8"]);

dotenv.config()

const app = express()
app.get("/", (req, res) => {
    res.json("hi there")
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is listening on port number ${PORT}`);
    connectDb()
})