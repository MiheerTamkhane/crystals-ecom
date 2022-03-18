import React from "react";
import { useAccordion } from "../../contexts/AccordionContext/AccordionContext";
import Accordion from "../Accordion/Accordion";
import "./Filter.css";

function Filter() {
  const { data, isMobileFilter, setIsMobileFilter } = useAccordion();
  console.log("from filter : " + data[0]);
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
        <Accordion data={item} />
      ))}
    </section>
  );
}

export default Filter;

{
  /* <div class="filter-comp">
<h3 class="filter-heading">Category</h3>
<ul class="list">
  <li>
    <input type="checkbox" id="all" />
    <label for="all">All Jewellery</label>
  </li>
  <li>
    <input type="checkbox" id="necklace" />
    <label for="necklace">Necklace</label>
  </li>
  <li>
    <input type="checkbox" id="rings" />
    <label for="rings">Rings</label>
  </li>
</ul>
</div>
<div class="filter-comp">
<h3 class="filter-heading">Rating</h3>
<ul class="list">
  <li>
    <input type="radio" name="rate" id="fourstar" />
    <label for="fourstar"> 4 Stars & above</label>
  </li>
  <li>
    <input type="radio" name="rate" id="threestar" />
    <label for="threestar">3 Stars & above</label>
  </li>
  <li>
    <input type="radio" name="rate" id="twostar" />
    <label for="twostar"> 2 Stars & above</label>
  </li>
</ul>
</div>
<div class="filter-comp">
<h3 class="filter-heading">Sort by</h3>
<ul class="list">
  <li>
    <input type="radio" name="sort" id="sortzero" />
    <label for="sortzero">$50 to $100</label>
  </li>
  <li>
    <input type="radio" name="sort" id="sortone" />
    <label for="sortone">$100 to $200</label>
  </li>
</ul>
</div> */
}
