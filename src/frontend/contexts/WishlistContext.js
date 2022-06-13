import { createContext, useContext, useState } from "react";
import { addToWishlist, removeFromWishlist } from "../services/servicesExport";

const WishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

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
