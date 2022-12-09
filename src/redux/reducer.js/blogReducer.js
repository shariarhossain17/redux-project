import { ADD_BLOG, FETCH_DATA } from "../actionType/blogActionType";

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
          blogs:[...state.blogs,action.payload]
        }
    default:
      return state;
  }
};

export default blogReducer;
