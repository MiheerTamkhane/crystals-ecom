import axios from "axios";

export const getUserWishlist = (wishlist, setWishist) => {
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/wishlist", {
          headers: {
            authorization: authToken,
          },
        });
        setWishist(response.data.wishlist);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [wishlist]);
};
