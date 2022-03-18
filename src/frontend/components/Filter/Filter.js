import React from "react";
import { useAccordion } from "../../contexts/AccordionContext/AccordionContext";
import Accordion from "../Accordion/Accordion";
import "./Filter.css";

function Filter() {
  const { data, isMobileFilter, setIsMobileFilter } = useAccordion();

  return (
    <section
      className={
        isMobileFilter
          ? "filter-bar add-filter-bar"
          : "filter-bar remove-filter"
      }
    >
      <div className="filter-comp flex-row">
        <h3>Filters</h3>
        <a href="">Clear</a>
        {isMobileFilter && (
          <span
            className="material-icons mobile-filter-close"
            onClick={() => setIsMobileFilter(false)}
          >
            close
          </span>
        )}
      </div>
      <div className="filter-comp">
        <h3 className="filter-heading">Price</h3>
        <div>
          <div className="prices list">
            <label>50</label>
            <label>150</label>
            <label>200</label>
          </div>
          <input type="range" className="range" />
        </div>
      </div>

      {data.map((item, i) => (
        <Accordion key={i} data={item} />
      ))}
    </section>
  );
}

export default Filter;
