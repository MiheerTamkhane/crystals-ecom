import React from "react";
import "./Products.css";

import { MobileFilterBtn, ProductsCard } from "../componentsExport";
import { useFilter } from "../../contexts/contextExport";
const Products = () => {
  const { filteredProducts } = useFilter();
  return (
    <div className="products-container">
      <MobileFilterBtn />
      <h2 className="no-of-products">
        Available products(
        {filteredProducts.length >= 10
          ? filteredProducts.length
          : `0${filteredProducts.length}`}
        )
      </h2>
      <ProductsCard />
    </div>
  );
};

export { Products };
