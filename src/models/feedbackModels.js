import mongoose from "mongoose";
const feedbackSchema = mongoose.Schema({
    name:{
        type:string,
    },

    message:{
        type:String,
    }
},
)
export default mongoose.models.feedback || mongoose.model("feedback" , feedbackSchema);
 