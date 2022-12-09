import {
  ADD_BLOG,
  FETCH_DATA,
  REMOVE_BLOG,
  UPDATE_BLOG
} from "../actionType/blogActionType";

const initialState = {
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  console.log(action.payload?.id);
  const isBlog = state.blogs.filter((blog) => blog._id === action.payload.id);
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
    case UPDATE_BLOG:
      if (isBlog) {
        isBlog[0].name = action.payload?.editData?.name;
        isBlog[0].title = action.payload.editData?.title;
        isBlog[0].blog = action.payload.editData?.blog;

        return {
          ...state,
          blogs: isBlog,
        };
      } else {
        return {
          ...state,
          blogs: [...state.blogs],
        };
      }
    default:
      return state;
  }
};

export default blogReducer;
