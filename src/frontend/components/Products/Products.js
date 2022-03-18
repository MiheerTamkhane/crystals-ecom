import React from "react";
import "./Products.css";

import MobileFilter from "../MobileFilter/MobileFilter";
import ProductsCard from "../ProductsCard/ProductsCard";

const Products = () => {
  return (
    <div className="products-container">
      <MobileFilter />
      <ProductsCard />
    </div>
  );
};

export default Products;
