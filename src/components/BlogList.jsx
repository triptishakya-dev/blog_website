import React, { useState } from "react";
import { blog_data } from "../../public/Assets/assets.js";
import BlogCard from "./BlogCard.jsx";

const BlogList = () => {
  const [menu, setmenu] = useState("ALL");

  return (
    <div className="bg-white text-black">
      <div className="text-center ">
        <h1 className="text-3xl sm:text-5xl font-medium text-black">
          Latest Blog
        </h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base text-black">
          Blog for the latest in tech innovations, lifestyle trends, and startup
          insights{" "}
        </p>
        <form
          className="flex justify-between max-w-[700px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
          action=""
        >
          <input
            type="email"
            placeholder="enter your email"
            className="pl-4 outline-none"
          />
          <button
            type="submit"
            className="border-1 border-black px-4 py-4 sm:px-8 active:bg-gray-500 active:text-white text-black"
          >
            subcribe
          </button>
        </form>
      </div>
      <div className=" flex justify-center items-center gap-6 my-10">
        <button
          onClick={() => setmenu("ALL")}
          className={
            menu === "ALL" ? "bg-black text-white py-2 px-4 rounded-sm" : ""
          }
        >
          {" "}
          ALL
        </button>
        <button
          onClick={() => setmenu("Technology")}
          className={
            menu === "Technology"
              ? "bg-black text-white py-2 px-4 rounded-sm"
              : ""
          }
        >
          {" "}
          Technology
        </button>
        <button
          onClick={() => setmenu("Startup")}
          className={
            menu === "Startup" ? "bg-black text-white py-2 px-4 rounded-sm" : ""
          }
        >
          {" "}
          StartUp
        </button>
        <button
          onClick={() => setmenu("Lifestyle")}
          className={
            menu === "Lifestyle"
              ? "bg-black text-white py-2 px-4 rounded-sm"
              : ""
          }
        >
          {" "}
          LifeStyle
        </button>
      </div>

      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24 py-5">
        {blog_data
          .filter((item) => (menu === "ALL" ? true : item.category === menu))
          .map((item, key) => {
            return (
              <BlogCard
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                category={item.category}
                image={item.image}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
