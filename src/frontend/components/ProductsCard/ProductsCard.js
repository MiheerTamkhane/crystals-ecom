import React from "react";
import "./ProductsCard.css";
import { useFilter, useAuth, useWishlist } from "../../contexts/contextExport";
import {
  removeFromWishlist,
  addToWishlist,
} from "../../services/servicesExport";
import { useNavigate } from "react-router-dom";
const ProductsCard = () => {
  const navigate = useNavigate();
  const { filteredProducts } = useFilter();
  const { auth } = useAuth();
  const { authToken } = auth;
  const { wishlist, setWishlist } = useWishlist();

  return (
    <div className="products-div">
      {filteredProducts.length !== 0 ? (
        filteredProducts.map((product) => {
          const {
            _id,
            isBestSeller,
            image,
            name,
            price,
            rating,
            material,
            category,
          } = product;
          return (
            <a
              key={_id}
              className="ct-basic-card ct-card-badge-div product-card"
            >
              {isBestSeller && (
                <span className="titled-badge ct-violet ct-card-badge">
                  BESTSELLER
                </span>
              )}
              {wishlist.find(
                (productInWishlist) => productInWishlist._id === product._id
              ) ? (
                <button
                  className="material-icons  ct-card-wish added-wishlist"
                  onClick={() => {
                    removeFromWishlist(authToken, product, setWishlist);
                  }}
                >
                  favorite
                </button>
              ) : (
                <button
                  className="material-icons  ct-card-wish"
                  onClick={() => {
                    if (auth.status) {
                      addToWishlist(authToken, product, wishlist, setWishlist);
                    } else {
                      navigate("/Login");
                    }
                  }}
                >
                  favorite_border
                </button>
              )}
              <img src={image} alt="fist" className="ct-card-img" />
              <div className="ct-product-stats">
                <h4>{name}</h4>
                <small className="ct-product-info">{material}</small>
                <small className="ct-product-info">{category}</small>
                <div className="price-rating">
                  <h4>₹ {price}</h4>
                  <div className="rating-div">
                    <span className="material-icons star">star</span>/
                    <span> {rating}</span>
                  </div>
                </div>

                <div className="ct-card-btns">
                  <button className="ct-btn ct-addcart card-btn">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </a>
          );
        })
      ) : (
        <h1 className="empty-products">THE PRODUCT IS NOT AVAILABLE</h1>
      )}
    </div>
  );
};

export { ProductsCard };
