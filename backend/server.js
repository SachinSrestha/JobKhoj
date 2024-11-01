import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDb from "./config/dbConnection.js";
import dotenv from 'dotenv'; 
import errorHandler from "./middleware/errorHandler.js";
dotenv.config();

import userRoutes from "./routes/userRoutes.js"
import companyRoutes from "./routes/companyRoutes.js"
import jobRoutes from "./routes/jobRoutes.js"
import applicationRoutes from "./routes/applicationRoutes.js"

const app = express();
const PORT = process.env.PORT || 4000;

app.use("/home", (req,res)=>{
    return res.send("hello")
})

app.use(
    cors({
        origin:"http://localhost:5173",
        credentials:true,
    })
);
app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);
app.use(express.urlencoded({ extended: true }));

app.use("/job/user", userRoutes);
app.use("/job/company", companyRoutes);
app.use("/job/", jobRoutes);
app.use("/job/application", applicationRoutes);

app.listen(PORT, ()=>{
    connectDb();
    console.log(`Listening the server on port ${PORT}`)
})