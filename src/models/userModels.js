import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required : true,
    },

    email: {
      type: String,
      required : true,
    },

    password: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
