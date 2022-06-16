import React from "react";
import toast from "react-hot-toast";
import "./ProductsCard.css";
import {
  useFilter,
  useAuth,
  useWishlist,
  useCart,
} from "../../contexts/contextExport";
import { useNavigate, Link } from "react-router-dom";
const ProductsCard = () => {
  const navigate = useNavigate();
  const { filteredProducts } = useFilter();
  const { auth } = useAuth();
  const { authToken } = auth;
  const { wishlist, addToWishlistHandler, removeFromWishlistHandler } =
    useWishlist();
  const { cart, addToCartHandler } = useCart();

  return (
    <div className="products-div">
      {filteredProducts.length !== 0 ? (
        filteredProducts.map((product) => {
          const { _id, isBestSeller, image, name, price, rating, material } =
            product;
          return (
            <div
              key={_id}
              onClick={() => navigate(`/products/${_id}`)}
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
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromWishlistHandler(authToken, _id);
                    toast.success("Product removed from wishlist!");
                  }}
                >
                  favorite
                </button>
              ) : (
                <button
                  className="material-icons ct-card-wish"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (auth.status) {
                      addToWishlistHandler(authToken, product);
                      toast.success("Product added to wishlist!");
                    } else {
                      navigate("/login");
                      toast.error("Pleast login first!");
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
                <div className="price-rating">
                  <h4>₹ {price}</h4>
                  <div className="rating-div">
                    <span className="material-icons star">star</span>/
                    <span> {rating}</span>
                  </div>
                </div>

                <div className="ct-card-btns">
                  {cart.productsInCart.find(
                    (productInCart) => productInCart._id === product._id
                  ) ? (
                    <button
                      className="ct-btn card-btn ct-pay"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/Cart");
                      }}
                    >
                      GO TO CART
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="ct-btn ct-addcart card-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (auth.status) {
                          addToCartHandler(authToken, product);
                          toast.success("Product added to Cart!");
                        } else {
                          navigate("/login");
                          toast.error("Pleast login first!");
                        }
                      }}
                    >
                      ADD TO CART
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="empty-products">THE PRODUCT IS NOT AVAILABLE</h1>
      )}
    </div>
  );
};

export { ProductsCard };
