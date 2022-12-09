import React from 'react';
import { useSelector } from 'react-redux';
import BlogCard from '../../cpmponent/BlogCard';

const Allblog = () => {
    const blogs = useSelector((state)=> state.blog.blogs)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 bg-white">
        {
            blogs.map(blog => <BlogCard key={blog._id}blog={blog}></BlogCard>)
        }
      </div>
    );
};

export default Allblog;