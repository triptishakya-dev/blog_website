import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    image:{
        type: String
    },
    heading:{
        type:String,
    },
    content:{
        type:String,
    }
},
{
    timestamps:true
})


export default mongoose.models.Blog || mongoose.model("Blog" , blogSchema);