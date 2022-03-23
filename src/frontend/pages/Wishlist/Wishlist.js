import React from "react";
import { NavLink } from "react-router-dom";
import { useWishlist, useAuth } from "../../contexts/contextExport";
import { removeFromWishlist } from "../../services/servicesExport";
import "./Wishlist.css";
function Wishlist() {
  const { auth } = useAuth();
  const { authToken } = auth;
  const { wishlist, setWishlist } = useWishlist();

  return (
    <main className="wishlist-page">
      <h2>{auth.user}'s Wishlist</h2>
      <section className="wishlist-items">
        {wishlist.length !== 0 ? (
          wishlist.map((product) => {
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
                <button
                  className="material-icons  ct-card-wish added-wishlist"
                  onClick={() => {
                    removeFromWishlist(authToken, product, setWishlist);
                  }}
                >
                  favorite
                </button>
                <img src={image} alt="fist" className="ct-card-img" />
                <div className="ct-product-stats">
                  <h4>{name}</h4>
                  <small className="ct-product-info">{material}</small>
                  <small className="ct-product-info">{category}</small>
                  <div className="price-rating">
                    <h4>₹{price}</h4>
                    <div className="rating-div">
                      <span className="material-icons star">star</span>/
                      <span>{rating}</span>
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
          <h1 className="empty-products">
            WISHLIST IS EMPTY! CHECK OUT
            <NavLink to="/ProductsPage">products</NavLink>
          </h1>
        )}
      </section>
    </main>
  );
}

export { Wishlist };