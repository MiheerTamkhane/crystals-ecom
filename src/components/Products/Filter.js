import React from "react";
import "./Filter.css";
function Filter() {
  return (
    <section class="filter-bar">
      <div class="filter-comp flex-row">
        <h3>Filters</h3>
        <a href="" s>
          Clear
        </a>
      </div>
      <div class="filter-comp">
        <h3 class="filter-heading">Price</h3>
        <div>
          <div class="prices list">
            <label>50</label>
            <label>150</label>
            <label>200</label>
          </div>
          <input type="range" class="range" />
        </div>
      </div>
      <div class="filter-comp">
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
      </div>
    </section>
  );
}

export default Filter;
