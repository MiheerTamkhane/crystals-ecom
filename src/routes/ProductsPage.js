import React from "react";
import Filter from "../components/Filter/Filter";
import ProductListing from "../components/Products/ProductListing";
import "./ProductsPage.css";
function ProductsPage() {
  return (
    <div className="products-page">
      <Filter />
      <ProductListing />
    </div>
  );
}

export default ProductsPage;
