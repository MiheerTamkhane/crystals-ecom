import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import axios from "axios";
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
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/categories");

        setCategories(data.categories);
      } catch (err) {
        console.error(err.message);
      }
    })();
  }, []);

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
        categories,
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
    throw new Error("useProvider must be used within a ProductsProvider");
  }

  return context;
};

export { useFilter, FilterProvider };
