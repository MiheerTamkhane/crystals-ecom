import { createContext, useContext, useState, useEffect } from "react";
import {
  addToWishlist,
  removeFromWishlist,
  getUserWishlist,
} from "../services/servicesExport";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { auth } = useAuth();
  // Add to wishlist Handler function
  const addToWishlistHandler = async (authToken, product) => {
    const data = await addToWishlist(authToken, product);
    setWishlist(data);
  };

  // Remove from wishlist Handler function
  const removeFromWishlistHandler = async (authToken, id) => {
    const data = await removeFromWishlist(authToken, id);
    setWishlist(data);
  };

  useEffect(() => {
    if (auth.status) {
      (async () => {
        const newProductsInWishlist = await getUserWishlist(auth.authToken);
        setWishlist(newProductsInWishlist);
      })();
    } else {
      setWishlist([]);
    }
  }, [auth]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        setWishlist,
        addToWishlistHandler,
        removeFromWishlistHandler,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => {
  const context = useContext(WishlistContext);

  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

export { useWishlist, WishlistProvider };
