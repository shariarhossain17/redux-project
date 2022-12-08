import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../cpmponent/BlogCard";
import {
  filterPostDate,
  filterUpdateDate
} from "../../redux/action/filterAction";
import loadBlogData from "../../redux/thunk/fetchBlog";

const Home = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const filters = useSelector((state) => state.filter.filters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBlogData());
  }, []);

  let content;

  if (blogs.length) {
    content = blogs.map((blog) => (
      <BlogCard key={blog._id} blog={blog}></BlogCard>
    ));
  }

  if (blogs.length && filters.length) {
    content = blogs
      .sort(function (a, b) {
        if (filters.includes("postdate")) {
          return Number(new Date(a.postDate)) - Number(new Date(b.postDate));
        }
      })
      .map((blog) => <BlogCard key={blog._id} blog={blog}></BlogCard>);
  }
  if (blogs.length && filters.includes("updatedate")) {
    content = blogs
      .sort((a, b) => new Date(a.updateDate) - new Date(b.updateDate))
      .map((blog) => <BlogCard key={blog._id} blog={blog}></BlogCard>);
  }

  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button
          onClick={() => dispatch(filterPostDate("postdate"))}
          className={`border px-3 py-2 rounded-full font-semibold  `}
        >
          Post Date
        </button>
        <button
          onClick={() => dispatch(filterUpdateDate("updatedate"))}
          className={`border px-3 py-2 rounded-full font-semibold $
        }`}
        >
          Update date
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {content}
      </div>
    </div>
  );
};

export default Home;
