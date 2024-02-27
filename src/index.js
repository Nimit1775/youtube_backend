
//require("dotenv").config({ path: './env' })

import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({

    path:'./env'
})

connectDB()









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