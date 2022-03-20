import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const data = [
    {
      title: "Categories",
      types: [
        { typeTitle: "Necklace", inputType: "checkbox" },
        { typeTitle: "Rings", inputType: "checkbox" },
        { typeTitle: "Bracelets", inputType: "checkbox" },
      ],
    },
    {
      title: "By Intention",
      types: [
        { typeTitle: "For Anxiety/Stress", inputType: "checkbox" },
        { typeTitle: "For Clarity/Growth", inputType: "checkbox" },
        { typeTitle: "For Love/Peace", inputType: "checkbox" },
      ],
    },
    {
      title: "Sort By",
      types: [
        { typeTitle: "Low to High", inputType: "radio" },
        { typeTitle: "High to Low", inputType: "radio" },
      ],
    },
    {
      title: "Ratings",
      types: [
        { typeTitle: "4 Stars & above", inputType: "radio" },
        { typeTitle: "3 Stars & above", inputType: "radio" },
        { typeTitle: "2 Stars & above", inputType: "radio" },
      ],
    },
  ];

  // Mobile navar show-hide state here...
  const [isMobileFilter, setIsMobileFilter] = useState(false);

  return (
    <FilterContext.Provider value={{ data, isMobileFilter, setIsMobileFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };
