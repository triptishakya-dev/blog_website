import connectDB from "@/lib/dbConnect";
import userModels from "@/models/userModels";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        const {name , email , password} = await req.json()

       await connectDB();

       const newUser = userModels({name , email,password})

       savedData.save()

       return NextResponse.json(
             { success: true, message: "User saved successfully" },
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