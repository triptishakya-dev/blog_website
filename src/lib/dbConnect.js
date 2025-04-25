import mongoose from "mongoose";


const connectDB = async() => {
    try {
        
        await mongoose.connect(process.env.MONGODB_URI);

    } catch (error) {
       console.log("Error connecting to mongodb" , error ) 
       throw new error("failed to connect to mongodb")
    }
}
export default connectDB

