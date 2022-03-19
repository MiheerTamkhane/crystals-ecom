import React from "react";
import { Filter } from "../../components/index";
import { Products } from "../../components/index";
import "./ProductsPage.css";
function ProductsPage() {
  return (
    <div className="products-page">
      <Filter />
      <Products />
    </div>
  );
}

export { ProductsPage };
