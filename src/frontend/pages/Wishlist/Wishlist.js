import React from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useWishlist, useAuth, useCart } from "../../contexts/contextExport";
import "./Wishlist.css";
function Wishlist() {
  const { auth } = useAuth();
  const { authToken } = auth;
  const { wishlist, removeFromWishlistHandler } = useWishlist();
  const { cart, addToCartHandler } = useCart();
  return (
    <main className="wishlist-page">
      <h2>{auth?.user?.firstName}'s Wishlist</h2>
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
                      className="ct-btn ct-wishlist material-icons"
                      onClick={() => {
                        removeFromWishlistHandler(authToken, _id);
                        toast.success("Product removed from Wishlist!");
                      }}
                    >
                      delete
                    </button>
                    <button
                      className="ct-btn ct-addcart material-icons"
                      onClick={() => {
                        if (
                          cart.productsInCart.find(
                            (productInCart) => productInCart._id === product._id
                          )
                        ) {
                          toast.error("Product exist in Cart!");
                        } else {
                          addToCartHandler(authToken, product);
                          toast.success("Product moved to Cart!");
                        }
                        removeFromWishlistHandler(authToken, _id);
                      }}
                    >
                      shopping_bag
                    </button>
                  </div>
                </div>
              </a>
            );
          })
        ) : (
          <div className="empty-products-container-wishlist">
            <h1 className="empty-products">CART IS EMPTY! CHECK OUT</h1>
            <Link to="/products" className="go-to-products-wishlist ct-btn">
              PRODUCTS
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}

export { Wishlist };
