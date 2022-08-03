import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./Checkout.css";
import {
  useCart,
  useAddress,
  useAuth,
  useOrders,
} from "../../contexts/contextExport";
import { getAddressService } from "../../services/servicesExport";
import toast from "react-hot-toast";
const Checkout = () => {
  const { finalPrice, cart, cartDispatch } = useCart();
  const [chosenAdd, setChosenAdd] = useState(null);
  const {
    auth: { authToken },
  } = useAuth();
  const { addressState, addressDispatch } = useAddress();
  const { orderDispatch } = useOrders();

  const [paymentId, setPaymentId] = useState("");
  const { cartQuantity, cartTotalPrice, discount, discountedPrice, subtotal } =
    finalPrice;

  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    (async () => {
      const data = await getAddressService(authToken);
      addressDispatch({ type: "ADDRESS", payload: data.address });
    })();
  }, [authToken]);

  useEffect(() => {
    paymentId &&
      setTimeout(() => {
        navigate("/profile/orders", {
          state: { from: location },
        });
      }, 1000);
  }, [paymentId]);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const clearCart = async () => {
    cart?.productsInCart?.forEach((item) =>
      axios.delete(`/api/user/cart/${item._id}`, {
        headers: {
          authorization: authToken,
        },
      })
    );
    cartDispatch({ type: "CLEAR_CART" });
  };

  const paymentDisplay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_w3LARPAir5woBM", // Enter the Key ID generated from the Dashboard
      currency: "INR",
      amount: Math.floor(subtotal) * 100,
      name: "CrystalKart",
      description: "Thank you for trusting us",
      handler: async function (response) {
        orderDispatch({
          type: "SET_ORDERS",
          payload: {
            order: {
              orderData: cart?.productsInCart,
              paymentId: response.razorpay_payment_id,
              totalAmount: subtotal,
              address: chosenAdd,
            },
          },
        });
        setPaymentId(response.razorpay_payment_id);
        await clearCart();
        toast.success("Order Placed!");
      },
      prefill: {
        name: "Miheer Tamkhane",
        email: "miheer@gmail.com",
        contact: "9689565227",
      },
      theme: {
        color: "#0ea5e9",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="checkout-page-container">
      <div className="checkout-title-container">
        <h1 className="checkout-title">Checkout</h1>
        <button className="ct-btn ct-gray" onClick={() => navigate("/cart")}>
          Back to Cart
        </button>
      </div>
      {!paymentId ? (
        cart?.productsInCart?.length > 0 && (
          <div className="checkout-page">
            <div className="addresses-container">
              <div>
                {addressState?.addresses.length > 0 ? (
                  addressState?.addresses.map((addrs) => {
                    const {
                      _id,
                      name,
                      street,
                      city,
                      state,
                      country,
                      zipCode,
                      mobile,
                    } = addrs;
                    return (
                      <label
                        key={_id}
                        htmlFor={_id}
                        className="checkout-address"
                      >
                        <input
                          type="radio"
                          id={_id}
                          name="choose"
                          value={_id}
                          onChange={(e) => setChosenAdd(addrs)}
                        />
                        <div className="checkout-user-address">
                          <h2>{name}</h2>
                          <p>{street}</p>
                          <p>
                            {city}, {state}, {zipCode}, {country}
                          </p>

                          <p>{mobile}</p>
                        </div>
                      </label>
                    );
                  })
                ) : (
                  <div className="user-address">
                    <Link
                      to="/profile/addresses"
                      state={{ from: location, addAddress: true }}
                      className="ct-btn ct-gray"
                    >
                      Add Address
                    </Link>
                  </div>
                )}
              </div>
              {addressState?.addresses?.length > 0 && (
                <div className="user-address">
                  <Link
                    to="/profile/addresses"
                    state={{ from: location, addAddress: true }}
                    className="ct-btn ct-gray"
                  >
                    Add more address
                  </Link>
                </div>
              )}
            </div>
            <div className="checkout-container">
              <div className="checkout-order-container">
                <h3>Order Details</h3>
                <div className="order-detail-titles">
                  <h3>Item</h3>
                  <h3>Quantity</h3>
                </div>
                {cart?.productsInCart?.map((prod) => {
                  return (
                    <div key={prod._id} className="order-detail-titles">
                      <p>{prod.name}</p>
                      <p>{prod.qty}</p>
                    </div>
                  );
                })}
              </div>
              <div className="checkout-order-container">
                <h3>Delivery at</h3>

                {chosenAdd ? (
                  <div className="checkout-user-address">
                    <h2>{chosenAdd.name}</h2>
                    <p>{chosenAdd.street}</p>
                    <p>
                      {chosenAdd.city}, {chosenAdd.state}, {chosenAdd.zipCode},
                      {chosenAdd.country}
                    </p>

                    <p>{chosenAdd.mobile}</p>
                  </div>
                ) : (
                  <h2 disabled className="ct-btn ">
                    Select Address
                  </h2>
                )}
              </div>
              <div className="checkout-order-container">
                <h3>Price Details</h3>
                <p className="order-details">
                  <span>Price (Total Quantity : {cartQuantity})</span>
                  <span>₹{cartTotalPrice}</span>
                </p>
                <p className="order-details ">
                  <span>Discount</span>
                  <span className="discount">-₹{Math.floor(discount)}</span>
                </p>
                <p className="order-details">
                  <span>Discounted Price</span>
                  <span>₹{Math.floor(discountedPrice)}</span>
                </p>
                <hr />
                <h2 className="order-details">
                  <span>Subtotal</span>
                  <span>₹{Math.floor(subtotal)}</span>
                </h2>
                <div className="order-checkout">
                  {chosenAdd ? (
                    <button
                      onClick={paymentDisplay}
                      className="ct-btn order-checkout-btn"
                    >
                      Place Order
                    </button>
                  ) : (
                    <h2 disabled className="ct-btn">
                      Select Address
                    </h2>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="order-placed-container">
          <h2> ✨ Order placed successfully! ✨ </h2>
        </div>
      )}
    </div>
  );
};

export { Checkout };
