import React from "react";
import { useOrders } from "../../contexts/contextExport";
import "./UserOrders.css";
const UserOrders = () => {
  const { orderState } = useOrders();
  const { orders } = orderState;
  return (
    <div>
      {orders.length > 0 ? (
        orders.map((order) => {
          const { paymentId, address, totalAmount, orderData } = order;
          const { name, street, city, state, zipCode, country, mobile } =
            address;
          return (
            <div key={paymentId} className="order-bill-card">
              <h3>Order Confirmed</h3>
              <div className="bill-details">
                <div className="bill-titles">
                  <p>
                    Payment Id : <b>{paymentId}</b>
                  </p>
                  <p>
                    Bill paid : <b>₹{totalAmount}</b>
                  </p>
                </div>
                <div className="checkout-user-address">
                  <p>Order will deliver at</p>
                  <h3>{name}</h3>
                  <p>{street}</p>
                  <p>
                    {city}, {state}, {zipCode}, {country}
                  </p>

                  <p>{mobile}</p>
                </div>
                {orderData.length > 0 &&
                  orderData.map((item) => (
                    <div key={item._id} className="order-items">
                      <div className="order-img">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="ct-img"
                        />
                      </div>
                      <div className="order-item-details">
                        <p>name : {item.name}</p>
                        <p>Qty : {item.qty}</p>
                        <p>Price : {item.price}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          );
        })
      ) : (
        <h3>No orders yet!</h3>
      )}
    </div>
  );
};

export { UserOrders };
