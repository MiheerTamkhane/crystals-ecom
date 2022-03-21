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
        <div className="accordion-input">
          <label htmlFor="necklace">
            <input
              type="checkbox"
              id="necklace"
              name="category"
              className="filter-input"
              value="necklace"
              checked={state.category.includes("necklace")}
              onChange={() =>
                dispatch({
                  type: BY_CATEGORY,
                  payload: "necklace",
                })
              }
            />
            Necklace
          </label>
        </div>
        <div className="accordion-input">
          <label htmlFor="rings">
            <input
              type="checkbox"
              id="rings"
              name="category"
              className="filter-input"
              value="rings"
              checked={state.category.includes("rings")}
              onChange={() =>
                dispatch({
                  type: BY_CATEGORY,
                  payload: "rings",
                })
              }
            />
            Rings
          </label>
        </div>
        <div className="accordion-input">
          <label htmlFor="bracelets">
            <input
              type="checkbox"
              id="bracelets"
              name="category"
              className="filter-input"
              value="bracelets"
              checked={state.category.includes("bracelets")}
              onChange={() =>
                dispatch({
                  type: BY_CATEGORY,
                  payload: "bracelets",
                })
              }
            />
            Bracelets
          </label>
        </div>
      </Accordion>
      <Accordion title="By Intention">
        <div className="accordion-input">
          <label htmlFor="anxiety-stress">
            <input
              type="checkbox"
              id="anxiety-stress"
              name="intention"
              className="filter-input"
              value="anxiety-stress"
              checked={state.intention.includes("anxiety-stress")}
              onChange={() =>
                dispatch({
                  type: BY_INTENTION,
                  payload: "anxiety-stress",
                })
              }
            />
            Anxiety / Stress
          </label>
        </div>
        <div className="accordion-input">
          <label htmlFor="clarity-growth">
            <input
              type="checkbox"
              id="clarity-growth"
              name="intention"
              className="filter-input"
              value="clarity-growth"
              checked={state.intention.includes("clarity-growth")}
              onChange={() =>
                dispatch({
                  type: BY_INTENTION,
                  payload: "clarity-growth",
                })
              }
            />
            Clarity / Growth
          </label>
        </div>
        <div className="accordion-input">
          <label htmlFor="love-peace">
            <input
              type="checkbox"
              id="love-peace"
              name="intention"
              className="filter-input"
              value="love-peace"
              checked={state.intention.includes("love-peace")}
              onChange={() =>
                dispatch({
                  type: BY_INTENTION,
                  payload: "love-peace",
                })
              }
            />
            Love / Peace
          </label>
        </div>
      </Accordion>

      <Accordion title="User Ratings">
        <div className="accordion-input">
          <label htmlFor="fourStars">
            <input
              type="radio"
              id="fourStars"
              name="ratings"
              className="filter-input"
              value="fourStar"
              checked={state.userRatings === 4}
              onChange={() =>
                dispatch({
                  type: BY_USER_RATINGS,
                  payload: 4,
                })
              }
            />
            4 Stars & above
          </label>
        </div>
        <div className="accordion-input">
          <label htmlFor="threeStars">
            <input
              type="radio"
              id="threeStars"
              name="ratings"
              className="filter-input"
              checked={state.userRatings === 3}
              onChange={() =>
                dispatch({
                  type: BY_USER_RATINGS,
                  payload: 3,
                })
              }
            />
            3 Stars & above
          </label>
        </div>
        <div className="accordion-input">
          <label htmlFor="twoStars">
            <input
              type="radio"
              id="twoStars"
              name="ratings"
              className="filter-input"
              checked={state.userRatings === 2}
              onChange={() =>
                dispatch({
                  type: BY_USER_RATINGS,
                  payload: 2,
                })
              }
            />
            2 Stars & above
          </label>
        </div>
      </Accordion>
      <Accordion title="Sort By">
        <div className="accordion-input">
          <label htmlFor="logToHigh">
            <input
              type="radio"
              id="logToHigh"
              name="lowhigh"
              className="filter-input"
              checked={state.sortBy === "LOW_TO_HIGH"}
              onChange={() =>
                dispatch({
                  type: SORT_BY,
                  payload: "LOW_TO_HIGH",
                })
              }
            />
            Low to High
          </label>
        </div>
        <div className="accordion-input">
          <label htmlFor="highToLow">
            <input
              type="radio"
              id="highToLow"
              name="lowhigh"
              className="filter-input"
              checked={state.sortBy === "HIGH_TO_LOW"}
              onChange={() =>
                dispatch({
                  type: SORT_BY,
                  payload: "HIGH_TO_LOW",
                })
              }
            />
            High to Low
          </label>
        </div>
      </Accordion>
    </section>
  );
}

export { Filter };
