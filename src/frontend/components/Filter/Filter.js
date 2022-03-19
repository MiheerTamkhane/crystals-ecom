import React from "react";
import { useFilter } from "../../contexts/FilterContext";
import { Accordion } from "../index";
import "./Filter.css";

function Filter() {
  const { data, isMobileFilter, setIsMobileFilter } = useFilter();

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
            <label>0</label>
            <label>2500</label>
            <label>5000</label>
          </div>
          <input
            type="range"
            className="range"
            list="steplist"
            min="0"
            max="5000"
            step="1000"
          />
          <datalist id="steplist">
            <option>0</option>
            <option>1000</option>
            <option>2000</option>
            <option>3000</option>
            <option>4000</option>
            <option>5000</option>
          </datalist>
        </div>
      </div>

      {data.map((item, i) => (
        <Accordion key={i} data={item} />
      ))}
    </section>
  );
}

export { Filter };
