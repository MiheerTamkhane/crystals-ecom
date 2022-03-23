import { createContext, useContext, useState, useReducer } from "react";

import {
  filterByCategory,
  filterByIntention,
  sortedProducts,
  filterByUserRatings,
  filterByPriceRange,
  composeAll,
} from "../utils/FilterUtils";
import { filterReducer } from "../reducers/filterReducer";

import { useProducts } from "./ProductContext";
const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  // Mobile filter show-hide state here...
  const [isMobileFilter, setIsMobileFilter] = useState(false);

  const [state, dispatch] = useReducer(filterReducer, {
    category: [],
    intention: [],
    sortBy: null,
    userRatings: null,
    priceRange: 0,
  });
  const { products } = useProducts();

  const filteredProducts = composeAll(
    state,
    products,
    filterByCategory,
    filterByIntention,
    sortedProducts,
    filterByUserRatings,
    filterByPriceRange
  );

  return (
    <FilterContext.Provider
      value={{
        isMobileFilter,
        setIsMobileFilter,
        state,
        dispatch,
        filteredProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => {
  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  return context;
};

export { useFilter, FilterProvider };
