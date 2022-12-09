import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addBlog from "../../redux/thunk/addBlog";
const AddBlog = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const submit = (data) => {
    const blog = {
      name: data.name,
      category: data.brand,
      img: data.image,
      title: data.tile,
      blog: data.blog,
    };
    dispatch(addBlog(blog))
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
          >
            <option value="programming">Programming</option>
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

export default AddBlog;
