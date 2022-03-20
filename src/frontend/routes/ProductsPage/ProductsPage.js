import React from "react";
import { Filter, Products } from "../../components/index";
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
