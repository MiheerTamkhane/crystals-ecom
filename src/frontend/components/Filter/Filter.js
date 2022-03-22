import React from "react";

import { useFilter } from "../../contexts/contextExport";
import { Accordion } from "../index";
import "./Filter.css";
import {
  PRICE_RANGE,
  BY_CATEGORY,
  BY_INTENTION,
  BY_USER_RATINGS,
  SORT_BY,
  CLEAR,
} from "../../constants/filterConstants";
import categoryData from "./filterData";
function Filter() {
  const { isMobileFilter, setIsMobileFilter, state, dispatch } = useFilter();
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
        <a onClick={() => dispatch({ type: CLEAR, payload: {} })}>Clear</a>
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
            <label>2.5k</label>
            <label>5k</label>
          </div>
          <input
            type="range"
            className="range"
            list="steplist"
            step="1000"
            min="0"
            max="5000"
            value={state.priceRange}
            onChange={(e) =>
              dispatch({ type: PRICE_RANGE, payload: e.target.value })
            }
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
      <Accordion title="Categories">
        {categoryData[0].map((item) => {
          return (
            <div key={item._id} className="accordion-input">
              <label htmlFor={item.categoryName}>
                <input
                  type="checkbox"
                  id={item.categoryName}
                  name="categories"
                  className="filter-input"
                  value={item.value}
                  checked={state.category.includes(item.value)}
                  onChange={(e) => {
                    dispatch({
                      type: BY_CATEGORY,
                      payload: e.target.value,
                    });
                  }}
                />
                {item.categoryName}
              </label>
            </div>
          );
        })}
      </Accordion>
      <Accordion title="By Intention">
        {categoryData[1].map((item) => {
          return (
            <div key={item._id} className="accordion-input">
              <label htmlFor={item.intentionName}>
                <input
                  type="checkbox"
                  id={item.intentionName}
                  name="intention"
                  className="filter-input"
                  value={item.value}
                  checked={state.intention.includes(item.value)}
                  onChange={(e) => {
                    dispatch({
                      type: BY_INTENTION,
                      payload: e.target.value,
                    });
                  }}
                />
                {item.intentionName}
              </label>
            </div>
          );
        })}
      </Accordion>

      <Accordion title="User Ratings">
        {categoryData[2].map((item) => {
          return (
            <div key={item._id} className="accordion-input">
              <label htmlFor={item.rating}>
                <input
                  type="radio"
                  id={item.rating}
                  name="ratings"
                  className="filter-input"
                  value="fourStar"
                  checked={state.userRatings === item.userRating}
                  onChange={() =>
                    dispatch({
                      type: BY_USER_RATINGS,
                      payload: item.userRating,
                    })
                  }
                />
                {item.rating}
              </label>
            </div>
          );
        })}
      </Accordion>
      <Accordion title="Sort By">
        {categoryData[3].map((item) => {
          return (
            <div key={item._id} className="accordion-input">
              <label htmlFor={item.name}>
                <input
                  type="radio"
                  id={item.name}
                  name="sort"
                  className="filter-input"
                  checked={state.sortBy === item.value}
                  onChange={() =>
                    dispatch({
                      type: SORT_BY,
                      payload: item.value,
                    })
                  }
                />
                {item.name}
              </label>
            </div>
          );
        })}
      </Accordion>
    </section>
  );
}

export { Filter };
