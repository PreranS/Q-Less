import dotenv from "dotenv"
import mongoose from "mongoose";
import express from "express"

const app = express()

import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is running at the port ${process.env.PORT}`);
        
    })
    .catch((err)=>{
        console.log("MONGODB connection failed!!!",err);
        
    })
})