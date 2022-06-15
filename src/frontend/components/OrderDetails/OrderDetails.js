import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderDetails.css";
const OrderDetails = ({ orderDetails }) => {
  const { cartQuantity, cartTotalPrice, discount, discountedPrice, subtotal } =
    orderDetails;
  const navigate = useNavigate();
  return (
    <div className="order-container">
      <h2>Order Details</h2>
      <small className="order-details">
        <small className="order-offer">
          CODEGHEFUKAT <span className="material-icons ">local_offer</span>
        </small>
        <small>-₹77</small>
      </small>
      <p className="order-details">
        <span>Price (Total Quantity : {cartQuantity})</span>
        <span>₹{cartTotalPrice}</span>
      </p>
      <p className="order-details ">
        <span>Discount</span>
        <span className="discount">-₹{discount}</span>
      </p>
      <p className="order-details">
        <span>Discounted Price</span>
        <span>₹{discountedPrice}</span>
      </p>
      <hr />
      <h2 className="order-details">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </h2>
      <div className="order-checkout">
        <label htmlFor="giftbox" className="giftbox">
          <input type="checkbox" id="giftbox" />
          🎁 Add Gift Wrap
        </label>
        <button
          onClick={() => navigate("/checkout")}
          className="ct-btn order-checkout-btn"
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export { OrderDetails };
