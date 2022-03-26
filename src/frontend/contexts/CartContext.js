import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../contexts/contextExport";
import { addToCart, getUserCart } from "../services/servicesExport";
const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { auth } = useAuth();
  useEffect(() => {
    if (auth.status) {
      (async () => {
        const newCart = await getUserCart(auth.authToken);
        setCart(newCart);
      })();
    } else {
      setCart([]);
    }
  }, [auth]);

  const orderDetails = cart.reduce(
    (acc, curr) => {
      return {
        ...acc,
        cartQuantity: acc.cartQuantity + curr.qty,
        cartTotalPrice: acc.cartTotalPrice + curr.qty * curr.price,
        discount: acc.discount + curr.qty * 77,
        discountedPrice: acc.discountedPrice + curr.qty * (curr.price - 77),
        subtotal: acc.discountedPrice + curr.qty * (curr.price - 77),
      };
    },
    {
      cartQuantity: 0,
      cartTotalPrice: 0,
      discount: 0,
      discountedPrice: 0,
      subtotal: 0,
    }
  );

  return (
    <CartContext.Provider value={{ cart, setCart, orderDetails }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

export { useCart, CartProvider };
