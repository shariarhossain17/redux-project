import { FETCH_DATA } from "../actionType/blogActionType";

export const fetchBlogData = (blog) => {
  return {
    type: FETCH_DATA,
    payload: blog,
  };
};
