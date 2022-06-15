import { useContext, createContext, useReducer } from "react";

const OrdersContext = createContext();
const initialState = {
  orders: [],
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case "SET_ORDERS":
      return { orders: [...state.orders, action.payload] };
    case "CLEAR_ORDERS":
      return { orders: [] };
    default:
      return state;
  }
};
const OrdersProvider = ({ children }) => {
  const [orderState, orderDispatch] = useReducer(orderReducer, initialState);
  return (
    <OrdersContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </OrdersContext.Provider>
  );
};

const useOrders = () => {
  const context = useContext(OrdersContext);

  if (context === undefined) {
    throw new Error("useOrders must be used within OrderProvider");
  }
  return context;
};

export { useOrders, OrdersProvider };
