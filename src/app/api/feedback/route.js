import connectDB from "@/lib/dbConnect";
import contactModels from "@/models/contactModels";
import feedbackModels from "@/models/feedbackModels";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, message } = await req.json();

    console.log(message);
    console.log(name);

    console.log("Connecting to the database");
    await connectDB();
    console.log("Connected to the database");

    const receivedData = {
      name,
      message,
    };

    const newMessage = new feedbackModels(receivedData);
    await newMessage.save();

    return NextResponse.json(
      { success: true, message: "Message saved successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
