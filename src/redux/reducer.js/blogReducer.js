import {
  ADD_BLOG,
  FETCH_DATA,
  REMOVE_BLOG
} from "../actionType/blogActionType";

const initialState = {
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        blogs: action.payload,
      };
    case ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case REMOVE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      };
    default:
      return state;
  }
};

export default blogReducer;
