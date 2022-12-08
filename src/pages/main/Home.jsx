import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => state.blog);
  return (
    <div>
      <h1>This is Home</h1>
    </div>
  );
};

export default Home;
