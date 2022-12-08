import {
    FILTER_CLEAR,
    FILTER_POSTDATE,
    FILTER_UPDATE_DATE
} from "../actionType/filterAcionType";

const initialState = {
  filters: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_POSTDATE:
      if (!state.filters.includes(action.payload)) {
        return {
          ...state,
          filters: [...state.filters, action.payload],
        };
      } else {
        return {
          ...state,
          filters: state.filters.filter((post) => post !== action.payload),
        };
      }
    case FILTER_UPDATE_DATE:
      if (!state.filters.includes(action.payload)) {
        return {
          ...state,
          filters: [...state.filters, action.payload],
        };
      } else {
        return {
          ...state,
          filters: state.filters.filter((update) => update !== action.payload),
        };
      }
    case FILTER_CLEAR:
      if (!state.filters.includes(action.payload)) {
        return {
          ...state,
          filters: [...state.filters, action.payload],
        };
      } else {
        return {
          ...state,
          filters: state.filters.filter((update) => update !== action.payload),
        };
      }

    default:
      return state;
  }
};

export default filterReducer;
