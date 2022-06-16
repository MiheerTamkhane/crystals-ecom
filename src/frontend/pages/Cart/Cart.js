import "./Cart.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useWishlist, useCart, useAuth } from "../../contexts/contextExport";
import { OrderDetails } from "../../components/componentsExport";
function Cart() {
  const { auth } = useAuth();
  const { authToken } = auth;
  const {
    cart,
    orderDetails,
    removeFromCartHandler,
    updateQtyOfCartProductHandler,
  } = useCart();
  const { wishlist, addToWishlistHandler } = useWishlist();

  return (
    <main className="cart-page">
      <h2>{auth?.user?.firstName}'s Cart</h2>

      {cart.productsInCart.length !== 0 ? (
        <section className="cart-container">
          <section className="cart-items">
            {cart.productsInCart.map((product) => {
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
                            removeFromCartHandler(authToken, _id);
                            toast.error("Product removed from Cart!");
                          } else {
                            updateQtyOfCartProductHandler(
                              authToken,
                              _id,
                              "decrement"
                            );
                            toast("Decreased quantity of product!", {
                              icon: "➖",
                            });
                          }
                        }}
                      >
                        remove
                      </small>
                      <small className="ct-product-info">{qty}</small>
                      <small
                        className="material-icons"
                        onClick={() => {
                          updateQtyOfCartProductHandler(
                            authToken,
                            _id,
                            "increment"
                          );
                          toast("Increased quantity of product!", {
                            icon: "➕",
                          });
                        }}
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
                          if (
                            wishlist.find((prod) => prod._id === product._id)
                          ) {
                            toast.error("Product exist in wishlist!");
                          } else {
                            addToWishlistHandler(authToken, product);
                            toast.success("Product moved to Wishlist!");
                          }
                          removeFromCartHandler(authToken, _id);
                        }}
                      >
                        favorite
                      </button>
                      <button
                        className="ct-btn ct-red material-icons"
                        onClick={() => {
                          removeFromCartHandler(authToken, _id);
                          toast.success("Product removed from Cart!");
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
        <div className="empty-products-container">
          <h1 className="empty-products">CART IS EMPTY!</h1>
          <Link to="/products" className="go-to-products ct-btn">
            PRODUCTS
          </Link>
        </div>
      )}
    </main>
  );
}

export { Cart };
