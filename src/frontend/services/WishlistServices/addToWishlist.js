import axios from "axios";

export const addToWishlist = (authToken, product, wishlist, setWishlist) => {
  wishlist.find((productInWishlist) => productInWishlist._id === product._id)
    ? alert("%cproduct exist in wishlist", "color : red")
    : (async () => {
        try {
          const { data } = await axios.post(
            "/api/user/wishlist",
            { product },
            {
              headers: {
                authorization: authToken,
              },
            }
          );
          setWishlist(data.wishlist);
        } catch (e) {
          console.error(e);
        }
      })();
};
