"use client";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("")



  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, phoneNo, feedback, rating };
    console.log(formData)

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
   
    <div className="bg-white w-full h-screen flex justify-center items-center">
      <div className="bg-[#EAD196] h-[90vh] w-[30vw] flex flex-col justify-center items-center rounded-2xl">
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


          {/* email field */}
          <label htmlFor="email" className="text-black mt-5">
          email
        </label>
        <textarea
          className="border border-black w-[20rem] rounded-md px-3 py-2 text-gray-500"
          id="message"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your phoneNo"
          required
        />

        {/* no field */}
        <label htmlFor="number" className="text-black mt-5">
          phoneNo
        </label>
        <textarea
          className="border border-black w-[20rem] rounded-md px-3 py-2 text-gray-500"
          id="message"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          placeholder="Enter Your feedback"
          required
        />


        {/* feedback Field */}
        <label htmlFor="message" className="text-black mt-5">
          feedback
        </label>
        <textarea
          className="border border-black w-[20rem] rounded-md px-3 py-2 text-gray-500"
          id="message"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter Your feedback"
          required
        />

        {/* rating field */}
        <label htmlFor="rating" className="text-black mt-5">
          Rate Us:
        </label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="border border-black w-[20rem] rounded-md px-3 py-2 text-gray-500"
          required
        >
          <option value="">Select a rating</option>
          <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
          <option value="4">⭐⭐⭐⭐ - Good</option>
          <option value="3">⭐⭐⭐ - Average</option>
          <option value="2">⭐⭐ - Poor</option>
          <option value="1">⭐ - Very Poor</option>
        </select>


     {/* Submit Button */}
        <button
          className="bg-blue-600 w-[50%] py-2 mt-6 rounded-lg cursor-pointer hover:bg-blue-800"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default page;
