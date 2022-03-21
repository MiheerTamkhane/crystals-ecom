import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import axios from "axios";
const FilterContext = createContext();

const useFilter = () => {
  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error("useProvider must be used within a ProductsProvider");
  }

  return context;
};

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

  function reducer(state, action) {
    console.log(state, action);
    switch (action.type) {
      case "BYCATEGORY":
        return {
          ...state,
          category: state.category.includes(action.payload)
            ? state.category.filter((val) => val !== action.payload)
            : [...state.category, action.payload],
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    category: [],
  });
  return (
    <FilterContext.Provider
      value={{
        isMobileFilter,
        setIsMobileFilter,
        categories,
        state,
        dispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };
