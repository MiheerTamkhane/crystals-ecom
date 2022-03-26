import React from "react";
import { Link } from "react-router-dom";
import { useWishlist, useAuth, useCart } from "../../contexts/contextExport";
import { removeFromWishlist, addToCart } from "../../services/servicesExport";
import "./Wishlist.css";
function Wishlist() {
  const { auth } = useAuth();
  const { authToken } = auth;
  const { wishlist, setWishlist } = useWishlist();
  const { cart, setCart } = useCart();
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
                <button className="material-icons  ct-card-wish added-wishlist">
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
                    <button
                      className="ct-btn ct-addcart material-icons"
                      onClick={() => {
                        addToCart(authToken, product, cart, setCart);
                        removeFromWishlist(authToken, product, setWishlist);
                      }}
                    >
                      shopping_bag
                    </button>
                    <button
                      className="ct-btn ct-wishlist material-icons"
                      onClick={() => {
                        removeFromWishlist(authToken, product, setWishlist);
                      }}
                    >
                      delete
                    </button>
                  </div>
                </div>
              </a>
            );
          })
        ) : (
          <h1 className="empty-products">
            WISHLIST IS EMPTY! CHECK OUT
            <Link to="/ProductsPage">products</Link>
          </h1>
        )}
      </section>
    </main>
  );
}

export { Wishlist };
