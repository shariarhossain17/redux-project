import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BlogSIngleCard = () => {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blog.blogs);
  const blog = blogs.find((blog) => blog._id === id);
  console.log(blog);
  return (
    <div className="shadow-lg mx-auto relative rounded-3xl border p-3 flex  flex-col text-indigo-900 w-[400px]">
      <div className=" mx-auto">
        <img
          width="400px"
          className="h-[200px] rounded-3xl"
          src={blog.img}
          alt=""
        />
      </div>
      <div className="text-center">
        <h4>
          <span className="font-bold">Author:</span>
          {blog.name}
        </h4>
        <p>
          post:<span className="ml-2">{blog.postDate}</span>
        </p>
        <p>
          update:<span className="ml-2">{blog.updateDate}</span>
        </p>
      </div>
      <h1 className="font-bold text-center text-2xl">{blog.title}</h1>
      <p className=" font-semibold mb-3">{`${blog.blog}`}</p>
      <div className="flex justify-end gap-4"></div>
    </div>
  );
};

export default BlogSIngleCard;
