import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../contexts/contextExport";
import {
  addToCart,
  getUserCart,
  removeFromCart,
  updateQtyOfCartProduct,
} from "../services/servicesExport";
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

  // Add to Cart Handler function
  const addToCartHandler = async (authToken, product, cart) => {
    const data = await addToCart(authToken, product, cart);
    setCart(data);
  };

  // Remove product from cart Handler
  const removeFromCartHandler = async (authToken, id) => {
    const data = await removeFromCart(authToken, id);
    setCart(data);
  };

  const updateQtyOfCartProductHandler = async (authToken, id, type) => {
    const data = await updateQtyOfCartProduct(authToken, id, type);
    setCart(data);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        orderDetails,
        addToCartHandler,
        removeFromCartHandler,
        updateQtyOfCartProductHandler,
      }}
    >
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
