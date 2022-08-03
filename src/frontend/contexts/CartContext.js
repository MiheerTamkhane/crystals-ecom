import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "../contexts/contextExport";
import {
  addToCart,
  getUserCart,
  removeFromCart,
  updateQtyOfCartProduct,
} from "../services/servicesExport";

const CartContext = createContext(null);

const initialState = {
  productsInCart: [],
  isPamymentDone: false,
  paymentId: "",
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, productsInCart: action.payload };
    case "RMV_FROM_CART":
      return { ...state, productsInCart: action.payload };
    case "UPDATE_QTY":
      return { ...state, productsInCart: action.payload };
    case "CLEAR_CART":
      return { productsInCart: [], isPamymentDone: false, paymentId: "" };
    default:
      return state;
  }
}

const CartProvider = ({ children }) => {
  const [cart, cartDispatch] = useReducer(cartReducer, initialState);
  // const [cart, setCart] = useState([]);
  const { auth } = useAuth();
  useEffect(() => {
    if (auth.status) {
      (async () => {
        const newProductsInCart = await getUserCart(auth.authToken);
        cartDispatch({ type: "ADD_TO_CART", payload: newProductsInCart });
      })();
    } else {
      cartDispatch({ type: "CLEAR_CART" });
    }
  }, [auth]);

  const orderDetails = cart?.productsInCart?.reduce(
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
  const addToCartHandler = async (authToken, product) => {
    const data = await addToCart(authToken, product);
    cartDispatch({ type: "ADD_TO_CART", payload: data });
  };

  // Remove product from cart Handler
  const removeFromCartHandler = async (authToken, id) => {
    const data = await removeFromCart(authToken, id);
    cartDispatch({ type: "RMV_FROM_CART", payload: data });
  };

  const updateQtyOfCartProductHandler = async (authToken, id, type) => {
    const data = await updateQtyOfCartProduct(authToken, id, type);
    cartDispatch({ type: "UPDATE_QTY", payload: data });
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        orderDetails,
        addToCartHandler,
        removeFromCartHandler,
        updateQtyOfCartProductHandler,
        cartDispatch,
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
