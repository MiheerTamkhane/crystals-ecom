import { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { Modal } from "../Modal/Modal";
import "./OrderDetails.css";

const OrderDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const { finalPrice, dispatchFinalPrice } = useCart();
  const [offerFourtyCheckbox, setOfferFourtyCheckbox] = useState(false);
  const [offerFiveCheckbox, setOfferFiveCheckbox] = useState(false);
  const { cartQuantity, cartTotalPrice, discount, subtotal, discountedPrice } =
    finalPrice;
  const navigate = useNavigate();

  return (
    <div className="order-container">
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <div className="coupon-section">
            <h2>Offers for you</h2>
            <ul className="coupon-container">
              <li className="ct-btn coupon-item">
                <div className="first-child">
                  <input
                    type="checkbox"
                    id="offerFourty"
                    className="ct-checkbox"
                    checked={offerFourtyCheckbox}
                    onChange={() => {
                      setOfferFourtyCheckbox((prevState) => !prevState);
                      if (offerFourtyCheckbox) {
                        dispatchFinalPrice({ type: "RMV_OFFER40" });
                      } else {
                        dispatchFinalPrice({ type: "OFFER40" });
                      }
                    }}
                  />
                  <label htmlFor="offerFourty">GHEFUKAT</label>
                </div>
                <hr />
                <span>Get 40% off on your order</span>
              </li>
              <li className="coupon-item ct-btn">
                <div className="first-child">
                  <input
                    type="checkbox"
                    id="offerFiveHundred"
                    className="ct-checkbox"
                    checked={offerFiveCheckbox}
                    onChange={() => {
                      setOfferFiveCheckbox((prevState) => !prevState);
                      if (offerFiveCheckbox) {
                        dispatchFinalPrice({ type: "RMV_OFFER500" });
                      } else {
                        dispatchFinalPrice({ type: "OFFER500" });
                      }
                    }}
                  />
                  <label htmlFor="offerFiveHundred">OFF500</label>
                </div>
                <hr />
                <span>Get 500Rs off on your order</span>
              </li>
            </ul>
          </div>
        </Modal>
      )}
      <button
        className="ct-btn coupon-btn ct-blue"
        onClick={() => setShowModal((prevState) => !prevState)}
      >
        Apply Coupon
        <span className="material-symbols-rounded fiber-sell">sell</span>
      </button>

      <h2>Order Details</h2>

      <p className="order-details">
        <span>Price (Total Quantity : {cartQuantity})</span>
        <span>₹{cartTotalPrice}</span>
      </p>
      <p className="order-details ">
        <span>Discount (10%)</span>
        <span className="discount">-₹{Math.floor(discount)}</span>
      </p>
      <p className="order-details">
        <span>Discounted Price</span>
        <span>₹{Math.floor(discountedPrice)}</span>
      </p>
      {offerFourtyCheckbox && (
        <div className="order-details">
          <small className="order-offer">
            GHEFUKAT <span className="material-icons ">local_offer</span>
          </small>
          <small>40%</small>
        </div>
      )}
      {offerFiveCheckbox && (
        <div className="order-details">
          <small className="order-offer">
            OFF500 <span className="material-icons ">local_offer</span>
          </small>
          <small>-500Rs</small>
        </div>
      )}
      <hr />
      <h2 className="order-details">
        <span>Subtotal</span>
        <span>₹{Math.floor(subtotal)}</span>
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
