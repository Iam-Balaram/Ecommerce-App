 import express from "express";
 import cors from "cors";
 import 'dotenv/config' 
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


 //APP config `
 const app = express();
 const port = process.env.PORT || 4000;
 connectDB();
 connectCloudinary();

 //middleware
 app.use(express.json());
 app.use(cors());

 // Api endpounts
app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/order", orderRouter);

 app.get("/", (req,res)=>{
    res.send("API Is Working")
 })

 app.listen(port, ()=> console.log(`Server runing on Port: ${port}`))