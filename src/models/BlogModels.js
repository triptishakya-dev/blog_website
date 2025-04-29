import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  author_img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: date.now(),
  },
});

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
