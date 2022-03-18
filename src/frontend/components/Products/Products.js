import React from "react";
import "./Products.css";
import { useProducts } from "../../contexts/ProductContext/ProductContext";
import MobileFilter from "../MobileFilter/MobileFilter";

const Products = () => {
  const { products } = useProducts();
  return (
    <div className="products-container">
      <MobileFilter />
      <div className="products-div">
        {products.map((product) => {
          return (
            <a
              key={product._id}
              className="ct-basic-card ct-card-badge-div product-card"
            >
              {product.isBestSeller && (
                <span className="titled-badge ct-violet ct-card-badge">
                  BESTSELLER
                </span>
              )}
              <span className="material-icons  ct-card-wish">
                favorite_border
              </span>
              <img src={product.image} alt="fist" className="ct-card-img" />
              <div className="ct-product-stats">
                <h4>{product.name}</h4>
                <small className="ct-product-info">{product.material}</small>
                <h4>₹ {product.price}</h4>
                <div className="ct-card-btns">
                  <button className="ct-btn ct-addcart card-btn">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
