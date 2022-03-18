import React from "react";
import Filter from "../../components/Filter/Filter";
import Products from "../../components/Products/Products";
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
