import connectDB from "@/lib/dbConnect";
import userModels from "@/models/userModels";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();

        console.log(name);
        console.log(email);
        console.log(password);

        console.log("Connecting to the database");
        await connectDB();
        console.log("Connected to the database");

        const hassedPassword = await bcrypt.hash(password , 15)
        console.log(hassedPassword)


        const newMessage = new userModels({name,email,password: hassedPassword});
        await newMessage.save()




        return NextResponse.json({ success: true, message: "Message saved successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
