import React, { useState, useEffect } from "react";

import { useFilter } from "../../contexts/FilterContext";
import { useProducts } from "../../contexts/ProductContext";
import { Accordion, FilterInput } from "../index";
import "./Filter.css";

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
              onChange={(e) =>
                dispatch({
                  type: "BYCATEGORY",
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
              onChange={(e) =>
                dispatch({
                  type: "BYCATEGORY",
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
              onChange={(e) =>
                dispatch({
                  type: "BYCATEGORY",
                  payload: "bracelets",
                })
              }
            />
            Bracelets
          </label>
        </div>
      </Accordion>
    </section>
  );
}

export { Filter };
