"use client";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, message };

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error(error);
    }
  };
  ;

  return (
    <div className="bg-green-600 h-[30rem] w-full flex justify-center items-center text-2xl">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        {/* Full Name Field */}
        <label htmlFor="name" className="text-black mt-5">
          Name
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
  );
};

export default page;
