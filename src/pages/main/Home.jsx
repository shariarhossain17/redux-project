import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadBlogData from "../../redux/thunk/fetchBlog";

const Home = () => {
  const state = useSelector((state) => state.blog);
  const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(loadBlogData())
  },[])
  return (
    <div>
      <h1>This is Home</h1>
    </div>
  );
};

export default Home;
