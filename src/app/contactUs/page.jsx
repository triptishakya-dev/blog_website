"use client";
import React, { useState } from "react";
import Image from "next/image";
import main from "../../../public/imagecontactUs.jpg";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, message };

    try {
      const response = await fetch("/api/contactUs", {
        method: POST,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="bg-green-600 h-[30vh] w-full flex flex-col text-center justify-center text-2xl  ">
        <h1>Get in touch</h1>
        <p>Our friendly team is here to assist you.</p>
      </div>
      {/* 2nd start */}
      <div className="bg-white h-[80vh] w-full flex justify-around">
        <div className="flex flex-col w-[40%] justify-center">
          <h1 className="text-black font-bold text-4xl">Leave Us a message</h1>

          <form className="flex flex-col" onSubmit={handleSubmit}>
            {/* Full Name Field */}
            <label htmlFor="name" className="text-black mt-5">
              Full Name
            </label>
            <input
              className="border border-black w-[20rem] rounded-md px-3 py-2 text-gray-500"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              required
            />

            {/* Email Field */}
            <label htmlFor="email" className="text-black mt-5">
              Email
            </label>
            <input
              className="border border-black w-[20rem] rounded-md px-3 py-2 text-gray-500"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              required
            />

            {/* Message Field */}
            <label htmlFor="message" className="text-black mt-5">
              Message
            </label>
            <textarea
              className="border border-black w-[20rem] rounded-md px-3 py-2 text-gray-500"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter Your Message"
              required
            />

            {/* Submit Button */}
            <button
              className="bg-blue-600 w-[50%] py-2 mt-6 rounded-lg cursor-pointer hover:bg-blue-800"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="flex items-center justify-center">
          <Image src={main} alt="error" height={700} width={500} />
        </div>
      </div>
    </div>
  );
};

export default page;
