import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async() => {
    try {
        if(mongoose.connection.readyState >= 1) return ;
        await mongoose.connect(process.env.MONGODB_URI);

    } catch (error) {
       console.log("Error connecting to mongodb" , error ) 
       throw new error("failed to connect to mongodb")
    }
}
export default connectDB

