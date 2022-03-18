import React from "react";
import "./MobileFilter.css";
import { useAccordion } from "../../contexts/AccordionContext/AccordionContext";
const MobileFilter = () => {
  const { setIsMobileFilter } = useAccordion();
  return (
    <div className="mobile-filter">
      <button
        className="mobile-filter-btn ct-gray-bd ct-btn"
        onClick={() => setIsMobileFilter((isTrue) => (isTrue ? false : true))}
      >
        <span>Filter</span> <span className="material-icons">sort</span>
      </button>
    </div>
  );
};

export default MobileFilter;
