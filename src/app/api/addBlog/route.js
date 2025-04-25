import connectDB from "@/lib/dbConnect";
import BlogModels from "@/models/BlogModels";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const title = formData.get("title");
    const subTitle = formData.get("subTitle");
    const content = formData.get("content");
    const image = formData.get("image"); // This is a File object

    // Proper conditional check
    if (!title || !subTitle || !image || !content) {
      return NextResponse.json(
        { error: "title, subTitle, image, content not found" },
        { status: 400 }
      );
    }

    console.log("Database is connecting.....");
    await connectDB(); // await is important
    console.log("Database connected....");

    console.log("Title:", title);
    console.log("SubTitle:", subTitle);
    console.log("Content:", content);
    console.log("Image file:", image);

    // Create and save the blog
    const blog = new BlogModels({
      title,
      subTitle,
      content,
    });

    await blog.save();

    return NextResponse.json({ message: "successful" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}

  export async function GET(req, res){
    try {
      console.log("databse is connectimng.....")
      connectDB()
      console.log("databse is connected....")


      const blog = await BlogModels.find()
      console.log(blog)

      return NextResponse.json(
        {status: 200},
        {message: "Blog fetchged succesfully"},
        
      )
    } catch (error) {
      console.log(error)
    }
  }
