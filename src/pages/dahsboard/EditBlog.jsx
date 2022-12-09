import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import updateBlogData from "../../redux/thunk/updateBlog";

const EditBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const blogs = useSelector((state) => state.blog.blogs);
  const blog = blogs.find((b) => b._id === id);

  const [name, setName] = useState(blog.name);
  const [title, setTitle] = useState(blog.title);
  const [blogNew, setBlog] = useState(blog.blog);
  const dispatch = useDispatch();
  const submit = (data) => {
    const editData = {
      name: name,
      category: blog.category,
      title: title,
      blog: data.blog,
    };

    dispatch(updateBlogData(editData, id));
    reset();
  };
  return (
    <div className="flex justify-center items-center h-full ">
      <form
        className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="outline-none border border-1 border-gray px-2 rounded py-2"
            type="text"
            id="Name"
            {...register("name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="title">
            Blog Title
          </label>
          <input
            className="outline-none border border-1 border-gray px-2 rounded py-2"
            type="text"
            id="Name"
            {...register("tile")}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-3" htmlFor="brand">
            Blog Type
          </label>
          <select
            className="outline-none border border-1 border-gray py-1"
            name="brand"
            id="brand"
            {...register("brand")}
            disabled
          >
            <option value="programming">{blog.category}</option>
            <option value="sports">Sports</option>
            <option value="personal">Personal</option>
          </select>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="image">
            Image
          </label>
          <input
            className="outline-none border border-1 border-gray px-2 rounded py-2"
            type="text"
            name="image"
            id="image"
            {...register("image")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="blog">
            Blog
          </label>
          <textarea
            className="outline-none border border-1 border-gray px-2 rounded py-2"
            type="text"
            name="blog"
            cols="10"
            rows="4"
            id="blog"
            {...register("blog")}
            value={blogNew}
            onChange={(e) => setBlog(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center w-full">
          <button
            className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlog;
