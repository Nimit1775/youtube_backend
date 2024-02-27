
//require("dotenv").config({ path: './env' })

import dotenv from "dotenv";

import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({

    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , () => {
        console.log(` server is running at port :$
        {process.env.PORT}`);
    })
}) 
.catch((err)=>{
    console.log("MONGO db connection error", err);
})









/*
import { Express } from "express";
const app = Express()

( async () => {

    try{
        await mongoose.connect(`${process.env.
            MONGODB_URI}/${DBNAME}`)
            app.on("error",()=>{
                console.log("ERRR" , error)  ;
                throw error
            })  

            app.listen(process.env.PORT, () => {
                console.log(' app is listening on porrt $    {process.env.PORT}');
            
            })
         }catch (error){
        console.error("ERROR :" , error)
        throw err 
    }

}) ()
*/