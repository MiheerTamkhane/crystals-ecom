import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useCart, useAuth, useWishlist } from "../../contexts/contextExport";
import axios from "axios";
import "./SingleProductPage.css";
const SingleProductPage = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { productId } = useParams();
  const { cart, addToCartHandler } = useCart();
  const {
    auth: { status, authToken },
  } = useAuth();
  const { wishlist, addToWishlistHandler, removeFromWishlistHandler } =
    useWishlist();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setSingleProduct(data?.product);
    })();
  }, []);

  return (
    <div className="single-product-page">
      <div className="product-container">
        <div>
          <img
            src={singleProduct?.image}
            alt={singleProduct.name}
            className="ct-img"
          />
        </div>
        <div className="product-div">
          <h2>{singleProduct?.name}</h2>
          <div className="details">
            <h4>
              Rating :<span className="material-icons star">star</span>/
              {singleProduct.rating}{" "}
            </h4>
            <h4>Name : {singleProduct.name}</h4>
            <h4>Intention : {singleProduct.intention}</h4>
            <h4>Material : {singleProduct.material}</h4>
            <h2>Price : ₹{singleProduct.price}</h2>
          </div>
          <div className="ct-card-btns single-page-btn">
            {wishlist.find(
              (productInWishlist) => productInWishlist._id === singleProduct._id
            ) ? (
              <button
                className="ct-btn ct-wishlist add-to-wishlist"
                onClick={() => {
                  navigate("/wishlist");
                }}
              >
                GO TO WISHLIST
              </button>
            ) : (
              <button
                className="ct-btn ct-store add-to-wishlist"
                onClick={() => {
                  if (status) {
                    addToWishlistHandler(authToken, singleProduct);
                    toast.success("Product added to wishlist!");
                  } else {
                    navigate("/login");
                    toast.error("Pleast login first!");
                  }
                }}
              >
                ADD TO WISHLIST
              </button>
            )}
          </div>
          <div className="ct-card-btns single-page-btn">
            {cart.find(
              (productInCart) => productInCart._id === singleProduct._id
            ) ? (
              <button
                className="ct-btn card-btn ct-pay"
                onClick={() => {
                  navigate("/Cart");
                }}
              >
                GO TO CART
              </button>
            ) : (
              <button
                className="ct-btn ct-addcart card-btn"
                onClick={() => {
                  if (status) {
                    addToCartHandler(authToken, singleProduct);
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
    </div>
  );
};

export { SingleProductPage };
