import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connectDB from "@/lib/dbConnect";
import userModels from "@/models/userModels";
import jwt from 'jsonwebtoken'

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    console.log("Received email:", email);
    console.log("Received password:", password);

    console.log("Connecting to the database...");
    await connectDB();
    console.log("Connected to the database");

    // यूज़र को ईमेल से ढूँढें
    const user = await userModels.findOne({ email });
    if (!user) {
      console.log("User not found:", email);
      return NextResponse.json({ msg: "Invalid email or password" }, { status: 401 });
    }

    // पासवर्ड मिलान करें
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password does not match for email:", email);
      return NextResponse.json({ msg: "Invalid email or password" }, { status: 401 });
    }

    // set cookies in the brower 
    console.log("Generating token ")
    const token = generateToken({email: user.email , id:user._id})

    
    const response = NextResponse.json(
      { success: true, message: "Login successful" },
      { status: 200 }
    );
    
    response.cookies.set('userAuth' , token ,  {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'strict',
      maxAge:  60 * 60 * 24 * 7, 
      path: '/'
    })
    return response;
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

function generateToken(user){
  return jwt.sign(user , process.env.JWT_SECRET , {expiresIn:'1w'})
}
