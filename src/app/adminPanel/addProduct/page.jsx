"use client";

import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("subTitle", subTitle);
    formData.append("content", content);
    formData.append("image", image);

    try {
      const response = await fetch("/api/addBlog", {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-full bg-gray-50 flex justify-center items-center flex-col">
      <h1 className="text-black font-bold text-2xl my-5">Add Blog</h1>
      <form action="" className="flex gap-5 flex-col " onSubmit={submitHandler}>
        <div className="flex gap-4 justify-center items-center ">
          <label className="text-black" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title "
            className="px-2 py-2 border-black border rounded-lg text-black"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="subTitle" className="text-black">
            SubTitle
          </label>
          <input
            type="text"
            id="subTitle"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            className="px-2 py-2 border-black border rounded-lg text-black"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="Image" className="text-black">
            Image
          </label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files?.[0])}
            className="px-2 py-2 border-black border rounded-lg text-black"
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="content" className="text-black">
            Content
          </label>
          <input
            type="text"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="px-2 py-2 border-black border rounded-lg text-black w-80 h-60"
          />
        </div>

        <button className="px-3 py-4 bg-blue-500 w-40 rounded-lg text-2xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
