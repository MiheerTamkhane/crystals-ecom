import React from "react";
import Products from "../../components/Products/Products";
import "./ProductsPage.css";
function ProductsPage() {
  return (
    <div className="products-page">
      <h1>Product Page</h1>
      {/* //FIlter */}
      <Products />
    </div>
  );
}

export { ProductsPage };
