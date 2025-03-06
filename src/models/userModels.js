import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

export default mongoose.models.User || mongoose.model("User" , userSchema);