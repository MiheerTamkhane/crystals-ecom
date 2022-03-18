import React from "react";
import "./MobileFilter.css";
import { useAccordion } from "../../contexts/AccordionContext/AccordionContext";
import Filter from "../Filter/Filter";
const MobileFilter = () => {
  const { isMobileFilter, setIsMobileFilter } = useAccordion();
  return (
    <div className="mobile-filter">
      <button
        className="mobile-filter-btn ct-gray-bd ct-btn"
        onClick={() => setIsMobileFilter((isTrue) => (isTrue ? false : true))}
      >
        <span>Filter</span> <span className="material-icons">sort</span>
      </button>
      {/* {isMobileFilter && <Filter />} */}
    </div>
  );
};

export default MobileFilter;
