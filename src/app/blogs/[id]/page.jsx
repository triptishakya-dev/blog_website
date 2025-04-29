"use client";

import React, { useEffect, useState } from "react";
import { assets, blog_data } from "../../../../public/Assets/assets";
import Image from "next/image";
import { use } from "react";

const Page = ({ params }) => {
  const unwrappedParams = use(params);

  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(unwrappedParams.id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(data);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28 h-full ">
        <div className="flex justify-center items-center"></div>

        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {" "}
          </h1>

          <p className="text-black text-2xl text-bold">{data.title}</p>
          <p className="text-black text-2xl">{data.d}</p>
          <Image
            className="mx-auto mt-6 border border-white rounded-full "
            src={data.author_img}
            width={60}
            height={60}
            alt=""
          />
          <p className="text-black mt-1 bp-2 text-lg mx-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={1280}
          height={720}
          alt=""
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold ">
          step 1: self-reflection and goal setting
        </h3>
        <p className="my-3 ">
          Before you can manage your lifestyle ,you must have a clear
          understanding of what you want to achieve. Start by reflecting on your
          values ,aspirations , and long-term goals.{" "}
        </p>
        <p className="my-3 ">
          Before you can manage your lifestyle ,you must have a clear
          understanding of what you want to achieve. Start by reflecting on your
          values ,aspirations , and long-term goals.{" "}
        </p>
        <h3 className="my-5 text-[18px] font-semibold ">
          step 2: self-reflection and goal setting
        </h3>
        <p className="my-3 ">
          Before you can manage your lifestyle ,you must have a clear
          understanding of what you want to achieve. Start by reflecting on your
          values ,aspirations , and long-term goals.{" "}
        </p>
        <p className="my-3 ">
          Before you can manage your lifestyle ,you must have a clear
          understanding of what you want to achieve. Start by reflecting on your
          values ,aspirations , and long-term goals.{" "}
        </p>
        <h3 className="my-5 text-[18px] font-semibold ">
          step 3: self-reflection and goal setting
        </h3>
        <p className="my-3 ">
          Before you can manage your lifestyle ,you must have a clear
          understanding of what you want to achieve. Start by reflecting on your
          values ,aspirations , and long-term goals.{" "}
        </p>
        <p className="my-3 ">
          Before you can manage your lifestyle ,you must have a clear
          understanding of what you want to achieve. Start by reflecting on your
          values ,aspirations , and long-term goals.{" "}
        </p>
        <h3 className="my-5 text-[18px] font-semibold ">Conclusion</h3>
        <p className="my-3 ">
          Reflecting on my progress has allowed me to better understand my
          strengths, recognize my areas for improvement, and appreciate the
          journey of growth I am on. Through honest self-assessment, I have
          gained valuable insights into what motivates me and what challenges I
          need to overcome. Moving forward, I am setting clear, realistic, and
          meaningful goals that align with my long-term vision. By breaking
          larger ambitions into smaller, actionable steps, I am committed to
          continuous improvement, staying focused, and adapting to new
          challenges with resilience. With renewed clarity and purpose, I am
          confident that my efforts will lead to both personal and professional
          development, helping me achieve the goals I have set for myself.
        </p>
       <div className="my-24">
         </div>
         <p className="text-white font-semibold my-4">Share this article on social media</p>
         <div className="flex">
          <Image src={assets.facebook_icon} width={50} alt=""/>
          <Image src={assets.twitter_icon} width={50} alt=""/>
          <Image src={assets.googleplus_icon} width={50} alt=""/>


         </div>
      </div>
       
    </>
  ) : (
    <></>
  );
};

export default Page;
