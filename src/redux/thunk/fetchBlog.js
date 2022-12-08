import { fetchBlogData } from "../action/blogAction";

const loadBlogData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/blog");
    const data =await res.json();
    if (data.length) {
      dispatch(fetchBlogData(data));
    }
  };
};

export default loadBlogData;
