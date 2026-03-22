 import express from "express";
 import cors from "cors";
 import "dotenv/config";
import connectDB from "./config/mongodb.js";


 //APP config `
 const app = express();
 const port = process.env.PORT || 4000;
 connectDB();

 //middleware
 app.use(express.json());
 app.use(cors());

 // api endpounts
 app.get("/", (req,res)=>{
    res.send("API Is Working")
 })

 app.listen(port, ()=> console.log(`Server runing on Port: ${port}`))