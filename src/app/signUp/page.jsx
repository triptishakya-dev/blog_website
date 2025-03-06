"use client";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, password };

    try {
      const response = await fetch("/api/contactUs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="h-[100vh] w-full bg-gradient-to-r from-green-100 via-blue-500 to-purple-500 flex justify-center items-center">
      <div className="h-[35rem] w-[25rem] bg-white flex justify-center items-center rounded-md ">
      <form className="flex justify-center items-center flex-col ">
        <h1 className="text-black text-3xl mb-24">SignUp</h1>

        <label htmlFor="name"></label>
        <p className="text-black text-xl">username</p>
        <input className="px-3 py-4 text-xl border border-black rounded-md text-black"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your Name"
          required
        />

        <label className="text-black" htmlFor="name"></label>
        <p className="text-black text-xl">email</p>
        <input className="px-3 py-4 text-xl border border-black rounded-md text-black"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type your Email"
          required
        />

        <label htmlFor="name"></label>
        <p className="text-black text-xl">password</p>
        <input className="px-3 py-4 text-xl border border-black rounded-md text-black"
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type your password"
          required
        />

        <button
          className="bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 w-[50%] py-4 mt-6 rounded-lg cursor-pointer hover:bg-blue-800"
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
