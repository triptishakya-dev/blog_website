import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
