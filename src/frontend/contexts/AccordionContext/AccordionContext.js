import { createContext, useContext, useState } from "react";

const AccordionContext = createContext();

const useAccordion = () => useContext(AccordionContext);

const AccordionProvider = ({ children }) => {
  const data = [
    {
      title: "Categoies",
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
  ];

  // Mobile navar show-hide state here...
  const [isMobileFilter, setIsMobileFilter] = useState(false);

  return (
    <AccordionContext.Provider
      value={{ data, isMobileFilter, setIsMobileFilter }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

export { useAccordion, AccordionProvider };
