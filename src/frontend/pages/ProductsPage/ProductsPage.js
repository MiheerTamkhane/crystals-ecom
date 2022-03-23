import React from "react";
import { Filter, Products } from "../../components/componentsExport";
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
