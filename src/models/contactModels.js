import mongoose from "mongoose";
const contactUsSchema = mongoose.Schema({

    name:{
        type: String
    },
    email:{
        type:String,
    },
    message:{
        type:String,
    }
},
{
    timestamps:true

})
export default mongoose.models.contactUS || mongoose.model("contactUS" , contactUsSchema);
 