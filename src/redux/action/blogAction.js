import {
  ADD_BLOG,
  FETCH_DATA,
  REMOVE_BLOG,
  UPDATE_BLOG
} from "../actionType/blogActionType";

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
export const deleteBlog = (id) => {
  return {
    type: REMOVE_BLOG,
    payload: id,
  };
};
export const updateBlog = (data) => {
  return {
    type: UPDATE_BLOG,
    payload:data,
  };
};
