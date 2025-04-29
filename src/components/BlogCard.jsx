import Image from "next/image";
import React from "react";
import arrow from "../../public/Assets/arrow.png";
import Link from "next/link";

const BlogCard = ({ title, description, category, image, id }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] cursor-pointer">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="border-b border-black"
        />

        <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
          {category}
        </p>

        <div className="p-5">
          <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="mb-3 text-sm tracking-tight text-gray-700">
            {description}
          </p>
          <div className="inline-flex items-center py-2 font-semibold text-center text-black hover:underline">
            Read more
            <Image
              src={arrow}
              alt="arrow"
              width={12}
              height={12}
              className="ml-2"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
