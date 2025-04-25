import React from "react";

const page = () => {
  return (
    <div className="h-full w-[100vh] bg-stone-500">
      <div className="bg-pink-300 h-40 w-32 flex flex-col justify-center items-center">
        <form className="flex flex-col py-5  gap-4">
          <div className="flex flex-col">
            <label className="text-black" htmlFor="name">
              name
            </label>
            <input
              className="px-3 py-2 text-base border border-black rounded-md text-black"
              type="text"
              id="email"
              placeholder="Type your Email"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-black" htmlFor="name">
              email
            </label>
            <input
              className="px-3 py-2 text-base border border-black rounded-md text-black"
              type="text"
              id="email"
              placeholder="Type your Email"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-black" htmlFor="name">
              password
            </label>
            <input
              className="px-3 py-2 text-base border border-black rounded-md text-black"
              type="text"
              id="email"
              placeholder="Type your Email"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
