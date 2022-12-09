import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import deleteBlogById from "../redux/thunk/deleteBlog";

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="shadow-lg relative rounded-3xl border p-3 flex  flex-col text-indigo-900">
      <div className=" mx-auto">
        <img
          width="400px"
          className="h-[200px] rounded-3xl"
          src={blog.img}
          alt=""
        />
      </div>
      <h1 className="font-bold text-center text-2xl">{blog.title}</h1>
      <p className=" font-semibold mb-3">{blog.blog}</p>
      <div>
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
      <div className="flex justify-end gap-4">
        {pathname.includes("dashboard") && (
          <button
            onClick={() => navigate(`edit-blog/${blog._id}`)}
            className="bg-indigo-500 text-white px-2 rounded-md"
          >
            Edit
          </button>
        )}
        {pathname.includes("dashboard") && (
          <button
            onClick={() => dispatch(deleteBlogById(blog._id))}
            className="bg-indigo-500 text-white px-2 rounded-md"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
