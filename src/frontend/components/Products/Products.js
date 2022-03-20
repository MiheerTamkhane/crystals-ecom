import React from "react";
import "./Products.css";

import { MobileFilterBtn, ProductsCard } from "../index";

const Products = () => {
  return (
    <div className="products-container">
      <MobileFilterBtn />
      <ProductsCard />
    </div>
  );
};

export { Products };
