import connectDB from "@/lib/dbConnect";
import contactModels from "@/models/contactModels";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        console.log(name);
        console.log(email);
        console.log(message);

        console.log("Connecting to the database");
        await connectDB();
        console.log("Connected to the database");


        const receivedData = {
            name , 
            email , 
            message
        }

        const newMessage = new contactModels();
        await newMessage.save()




        return NextResponse.json({ success: true, message: "Message saved successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
