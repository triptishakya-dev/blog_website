import React, { useState } from "react";
import { blog_data } from "../../public/Assets/assets.js";
import BlogCard from "./BlogCard.jsx";

const BlogList = () => {
  const [menu, setmenu] = useState("All");

  

  return (
    <div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blog_data.map((item, key) => {
          return (
            <BlogCard
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
