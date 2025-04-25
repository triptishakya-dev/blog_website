
import mongoose from "mongoose";
const feedbackSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    email:{
        type:String,
        required: true,
    },

    phoneNo:{
        type:Number,
        required: true,
    },

    feedback:{
        type:String,
        required: true,
    },
    rating:{
        type:Number,
        required:true,
    }


    
},
)
export default mongoose.models.Feedback || mongoose.model("Feedback" , feedbackSchema);
 