import React from "react";
import "./OrderDetails.css";
const OrderDetails = ({ orderDetails }) => {
  const { cartQuantity, cartTotalPrice, discount, discountedPrice, subtotal } =
    orderDetails;
  return (
    <div className="order-container">
      <h2>Order Details</h2>
      <small className="order-offer">
        <small>Price</small>
        <small>₹12312</small>
      </small>
      <p className="order-details">
        <span>Price (Total Quantity : {cartQuantity})</span>
        <span>₹{cartTotalPrice}</span>
        {/* {cart.reduce((acc, curr) => acc.price + curr.price)} */}
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
        <span>{subtotal}</span>
      </h2>
      <div className="order-checkout">
        <label htmlFor="giftbox" className="giftbox">
          <input type="checkbox" id="giftbox" />
          🎁 Add Gift Wrap
        </label>
        <button className="ct-btn order-checkout-btn">Check Out</button>
      </div>
    </div>
  );
};

export { OrderDetails };
