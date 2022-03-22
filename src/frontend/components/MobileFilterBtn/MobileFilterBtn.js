import React from "react";
import "./MobileFilterBtn.css";
import { useFilter } from "../../contexts/contextExport";
const MobileFilterBtn = () => {
  const { setIsMobileFilter } = useFilter();
  return (
    <div className="mobile-filter">
      <button
        className="mobile-filter-btn ct-gray-bd ct-btn"
        onClick={() => setIsMobileFilter((isTrue) => !isTrue)}
      >
        <span>Filter</span> <span className="material-icons">sort</span>
      </button>
    </div>
  );
};

export { MobileFilterBtn };
