import { useEffect, useState } from "react";
import "./Checkout.css";
import { useCart, useAddress, useAuth } from "../../contexts/contextExport";
import { getAddressService } from "../../services/servicesExport";
const Checkout = () => {
  const { orderDetails } = useCart();
  const { cart } = useCart();
  const [chosenAdd, setChosenAdd] = useState("");
  const {
    auth: { authToken },
  } = useAuth();
  const { addressState, addressDispatch, address } = useAddress();
  const { cartQuantity, cartTotalPrice, discount, discountedPrice, subtotal } =
    orderDetails;

  useEffect(() => {
    (async () => {
      const data = await getAddressService(authToken);
      addressDispatch({ type: "ADDRESS", payload: data.address });
    })();
  }, [authToken]);

  const deliveryAt =
    addressState.addresses.find((addrs) => addrs._id === chosenAdd) ||
    addressState.addresses[0];
  console.log(deliveryAt);
  return (
    <div className="checkout-page">
      {/* <button className="ct-btn ct-green">Back</button> */}
      <div className="addresses-container">
        {addressState?.addresses.length > 0 ? (
          addressState?.addresses.map((addrs) => {
            const { _id, name, street, city, state, country, zipCode, mobile } =
              addrs;
            return (
              <label key={_id} htmlFor={_id} className="checkout-address">
                <input
                  type="radio"
                  id={_id}
                  name="choose"
                  value={_id}
                  onChange={(e) => setChosenAdd(e.target.value)}
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
            <h2>Add Address</h2>
          </div>
        )}
      </div>
      <div className="checkout-container">
        <div className="checkout-order-container">
          <h3>Order Details</h3>
          <div className="order-detail-titles">
            <h3>item</h3>
            <h3>Quantity</h3>
          </div>
          {cart.map((prod) => {
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

          <div className="checkout-user-address">
            <h2>{deliveryAt?.name}</h2>
            <p>{deliveryAt?.street}</p>
            <p>
              {deliveryAt?.city}, {deliveryAt?.state}, {deliveryAt?.zipCode},{" "}
              {deliveryAt?.country}
            </p>

            <p>{deliveryAt?.mobile}</p>
          </div>
        </div>
        <div className="checkout-order-container">
          <h3>Price Details</h3>
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
            <button className="ct-btn order-checkout-btn">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Checkout };
