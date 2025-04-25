import React from "react";
import logo from "../../public/Assets/logo.png";
import arrow from "../../public/Assets/arrow.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28 bg-white">
      <div className="flex justify-between items-center">
        <Image src={logo} width={180} alt="" className="w-[130px] sm:w-auto" />
        <button className="text-black rounded-md px-3 py-1 sm:px-6 sm:py-3 border border-solid font-medium flex gap-2 items-center shadow-[-7px_7px_0px_#000000]">
          get started
          <Image src={arrow} alt="" />
        </button>
      </div>

      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium text-black">
          Latest Blog
        </h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base text-black">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos?
        </p>
        <form
          className="flex justify-between max-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
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
    </div>
  );
};

export default Navbar;
