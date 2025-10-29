import express, { json } from "express";
import userRoute from "./routes/userRoute.js";
import connectDB from "./utils/connectDB.js";
import cors from "cors";
import UserController from "./controllers/userController.js";
const PORT=process.env.PORT || 8000;

const app=express();
app.use(cors());
app.use(express.json());

connectDB();
app.get("/",(req,res)=>{
    res.send("Welcome to GKMIT");
})
app.use("/",userRoute);
// UserController.addUser("govind");

app.listen(PORT,()=>console.log(`Server is running ${PORT}`));