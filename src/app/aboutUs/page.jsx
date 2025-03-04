import Image from "next/image";
import main from "../../../public/abcd.webp";
import React from "react";
import { FaLeaf } from "react-icons/fa";
import { PiTestTubeFill } from "react-icons/pi";
import { FaHandshakeSimple } from "react-icons/fa6";
import { TbArrowAutofitRight } from "react-icons/tb";

const page = () => {
  return (
    <div className="bg-slate-100 text-black flex flex-col h-200 w-100">
      {/* fst section start from here */}
      <div className="h-60 w-[100%] bg-green-600 flex justify-center items-center">
        <h1 className="text-center font-extrabold text-3xl text-white hover:to-blue-500">
          About CleanVeda
        </h1>
      </div>

      {/* secnd section start here */}

      <div className="flex w-full justify-around">
        <div className="flex flex-col w-[50%] justify-center items-center">
          <h1 className="font-extrabold text-2xl mb-4">
            Our Commitment to Natural Wellness
          </h1>
          <p className="mb-3">
            At CleanVeda.com, we are dedicated to providing premium natural
            health supplements, herbal personal care products, and rejuvenating
            skin and hair care solutions. Our effective, plant-based
            formulations are meticulously crafted to promote holistic health,
            vitality, and beauty.
          </p>
          <p>
            Explore our range of organic, cruelty-free products today, and
            enhance your health and beauty regimen with the transformative power
            of nature.
          </p>
        </div>
        <div className="mt-9">
          <Image src={main} alt="error" height={400} width={300} />
        </div>
      </div>
      {/* 3rd section start */}

      <div className="h-[70vh] w-full bg-gray-200 flex flex-col gap-9 mt-6 p-8 justify-center items-center">
        <h1 className="text-3xl font-bold">Our Values</h1>
        <div className="flex gap-9 flex-wrap justify-center items-center">
          <div className="h-[10rem] w-[20rem] bg-white px-3 py-3 rounded-md flex flex-col justify-center items-center">
            <FaLeaf className="text-4xl text-green-500" />
            <h1 className="font-bold text-xl">Natural Ingredients</h1>
            <p className="text-center">
              We prioritize using natural, plant-based ingredients in all our
              products.
            </p>
          </div>

          <div className="h-[10rem] w-[20rem] bg-white px-3 py-3 rounded-md flex flex-col justify-center items-center">
            <PiTestTubeFill className="text-4xl text-green-500" />
            <h1 className="font-bold text-xl">Natural Ingredients</h1>
            <p className="text-center">
              We prioritize using natural, plant-based ingredients in all our
              products.
            </p>
          </div>

          <div className="h-[10rem] w-[20rem] bg-white px-3 py-3 rounded-md flex flex-col justify-center items-center">
            <FaHandshakeSimple className="text-4xl text-green-500" />
            <h1 className="font-bold text-xl">Natural Ingredients</h1>
            <p className="text-center">
              We prioritize using natural, plant-based ingredients in all our
              products.
            </p>
          </div>

          <div className="h-[10rem] w-[20rem] bg-white px-3 py-3 rounded-md flex flex-col justify-center items-center">
            <TbArrowAutofitRight className="text-4xl text-green-500" />
            <h1 className="font-bold text-xl">Natural Ingredients</h1>
            <p className="text-center">
              We prioritize using natural, plant-based ingredients in all our
              products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
