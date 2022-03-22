import {
  PRICE_RANGE,
  BY_CATEGORY,
  BY_INTENTION,
  BY_USER_RATINGS,
  SORT_BY,
  CLEAR,
} from "../constants/filterConstants";

function filterReducer(state, action) {
  switch (action.type) {
    case SORT_BY:
      return { ...state, sortBy: action.payload };
    case BY_CATEGORY:
      return {
        ...state,
        category: state.category.includes(action.payload)
          ? state.category.filter((val) => val !== action.payload)
          : [...state.category, action.payload],
      };
    case BY_INTENTION:
      return {
        ...state,
        intention: state.intention.includes(action.payload)
          ? state.intention.filter((val) => val !== action.payload)
          : [...state.intention, action.payload],
      };
    case BY_USER_RATINGS:
      return { ...state, userRatings: action.payload };
    case PRICE_RANGE:
      return { ...state, priceRange: action.payload };
    case CLEAR:
      return {
        ...state,
        category: [],
        intention: [],
        sortBy: null,
        userRatings: null,
        priceRange: 0,
      };
    default:
      return state;
  }
}

export { filterReducer };
