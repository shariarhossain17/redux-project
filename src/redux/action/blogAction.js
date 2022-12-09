import { ADD_BLOG, FETCH_DATA } from "../actionType/blogActionType";

export const fetchBlogData = (blog) => {
  return {
    type: FETCH_DATA,
    payload: blog,
  };
};
export const addNewBlog = (blog) => {
  return {
    type: ADD_BLOG,
    payload: blog,
  };
};


