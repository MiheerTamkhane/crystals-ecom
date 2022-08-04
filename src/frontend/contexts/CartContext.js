import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
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

function finalPriceReducer(state, action) {
  switch (action.type) {
    case "CART_CHANGE":
      let newState = action.payload.reduce(
        (acc, curr) => {
          return {
            ...acc,
            cartQuantity: acc.cartQuantity + curr.qty,
            cartTotalPrice: acc.cartTotalPrice + curr.qty * curr.price,
            discount: acc.discount + curr.qty * (10 / 100) * curr.price,
            discountedPrice:
              acc.discountedPrice +
              curr.qty * (curr.price - (10 / 100) * curr.price),
            subtotal:
              acc.subtotal + curr.qty * (curr.price - (10 / 100) * curr.price),
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
      return newState;
    case "OFFER40":
      return {
        ...state,
        subtotal: state.subtotal - (40 / 100) * state.subtotal,
      };
    case "RMV_OFFER40":
      return {
        ...state,
        subtotal: state.discountedPrice,
      };
    case "OFFER500":
      return {
        ...state,
        subtotal: state.subtotal - 500,
      };
    case "RMV_OFFER500":
      return {
        ...state,
        subtotal: state.discountedPrice,
      };
    default:
      return state;
  }
}

const CartProvider = ({ children }) => {
  const [cart, cartDispatch] = useReducer(cartReducer, initialState);

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
        discount: acc.discount + curr.qty * (10 / 100) * curr.price,
        discountedPrice:
          acc.discountedPrice +
          curr.qty * (curr.price - (10 / 100) * curr.price),
        subtotal:
          acc.subtotal + curr.qty * (curr.price - (10 / 100) * curr.price),
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

  const [finalPrice, dispatchFinalPrice] = useReducer(
    finalPriceReducer,
    orderDetails
  );

  // Add to Cart Handler function
  const addToCartHandler = async (authToken, product) => {
    const data = await addToCart(authToken, product);
    cartDispatch({ type: "ADD_TO_CART", payload: data });
    dispatchFinalPrice({ type: "CART_CHANGE", payload: data });
  };

  // Remove product from cart Handler
  const removeFromCartHandler = async (authToken, id) => {
    const data = await removeFromCart(authToken, id);
    cartDispatch({ type: "RMV_FROM_CART", payload: data });
  };

  const updateQtyOfCartProductHandler = async (authToken, id, type) => {
    const data = await updateQtyOfCartProduct(authToken, id, type);
    cartDispatch({ type: "UPDATE_QTY", payload: data });
    dispatchFinalPrice({ type: "CART_CHANGE", payload: data });
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
        finalPrice,
        dispatchFinalPrice,
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
