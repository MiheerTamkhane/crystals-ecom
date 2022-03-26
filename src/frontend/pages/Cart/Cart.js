import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useWishlist, useCart, useAuth } from "../../contexts/contextExport";
import {
  removeFromCart,
  addToWishlist,
  updateQtyOfCartProduct,
} from "../../services/servicesExport";
import { OrderDetails } from "../../components/componentsExport";
function Cart() {
  const { auth } = useAuth();
  const { authToken } = auth;
  const { cart, setCart, orderDetails } = useCart();
  const { wishlist, setWishlist } = useWishlist();

  return (
    <main className="cart-page">
      <h2>{auth.user}'s Cart</h2>

      {cart.length !== 0 ? (
        <section className="cart-container">
          <section className="cart-items">
            {cart.map((product) => {
              const { _id, isBestSeller, image, name, price, rating, qty } =
                product;
              return (
                <a
                  key={_id}
                  className="ct-basic-card ct-card-badge-div cart-card"
                >
                  {isBestSeller && (
                    <span className="titled-badge ct-violet ct-card-badge">
                      BESTSELLER
                    </span>
                  )}
                  <img src={image} alt="products" className="ct-card-img" />
                  <div className="ct-product-stats">
                    <h4>{name}</h4>
                    <div className="qnty-inc-dec">
                      <small
                        className="material-icons"
                        onClick={() => {
                          if (qty === 1) {
                            removeFromCart(authToken, product, setCart);
                          } else {
                            updateQtyOfCartProduct(
                              authToken,
                              _id,
                              setCart,
                              "decrement"
                            );
                          }
                        }}
                      >
                        remove
                      </small>
                      <small className="ct-product-info">{qty}</small>
                      <small
                        className="material-icons"
                        onClick={() =>
                          updateQtyOfCartProduct(
                            authToken,
                            _id,
                            setCart,
                            "increment"
                          )
                        }
                      >
                        add
                      </small>
                    </div>
                    <div className="price-rating">
                      <h3>₹{price}</h3>
                      <div className="rating-div">
                        <span className="material-icons star">star</span>/
                        <span>{rating}</span>
                      </div>
                    </div>

                    <div className="ct-card-btns">
                      <button
                        className="ct-btn ct-addcart material-icons ct-wishlist"
                        onClick={() => {
                          addToWishlist(
                            authToken,
                            product,
                            wishlist,
                            setWishlist
                          );
                          if (!wishlist.includes(product)) {
                            removeFromCart(authToken, product, setCart);
                          }
                        }}
                      >
                        favorite
                      </button>
                      <button
                        className="ct-btn ct-red material-icons"
                        onClick={() => {
                          removeFromCart(authToken, product, setCart);
                        }}
                      >
                        delete
                      </button>
                    </div>
                  </div>
                </a>
              );
            })}
          </section>
          <OrderDetails orderDetails={orderDetails} />
        </section>
      ) : (
        <h1 className="empty-products">
          CART IS EMPTY! CHECK OUT
          <Link to="/ProductsPage">products</Link>
        </h1>
      )}
    </main>
  );
}

export { Cart };
