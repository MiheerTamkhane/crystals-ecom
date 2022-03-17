import React from "react";
import "./Products.css";
import { useProducts } from "../../contexts/ProductContext/ProductContext";
const Products = () => {
  const { products } = useProducts();
  return (
    <div className="products-div">
      {products.map((product) => {
        return (
          <a className="ct-basic-card ct-card-badge-div product-card">
            <span className="titled-badge ct-violet ct-card-badge">NEW</span>
            <span className="material-icons ct-card-wish">favorite</span>
            <img src={product.image} alt="fist" className="ct-card-img" />
            <div className="ct-product-stats">
              <h4>{product.name}</h4>
              <p className="ct-product-info">{product.material}</p>
              <div className="ct-card-btns">
                <button className="ct-btn ct-addcart card-btn">
                  ADD TO CART
                </button>
                {/* <button className="ct-btn ct-ebtn ct-pay">BUY</button> */}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Products;
