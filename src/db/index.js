import mongoose from "mongoose";
import { DBNAME } from "../constants.js";

const connectDB = async () => {
    try {
      const connection = await mongoose.connect(
        "mongodb+srv://nimitsodhani1:nimit@youtube.sojnuol.mongodb.net"
      );
  
      console.log(`\n MongoDB connected !! DB HOST : $
              {connectionInstance.connection.host} `);
    } catch (error) {
      console.log("MONGODB connection error: ", error);
      process.exit(1);
    }
  };



  
/*
const connectDB = async () => {

    try {
        const connection =  await mongoose.connect
        (`  ${process.env.
            MONGODB_URI}/${DBNAME}`)

            console.log(`\n MongoDB connected !! DB HOST : $
            {connectionInstance.connection.host} `);

    } catch (error) {
        console.log("MONGODB connection error: ", error);
        process.exit(1);

    }

}*/

export default connectDB;
  
  
  