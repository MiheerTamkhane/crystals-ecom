import axios from "axios";

export const addToWishlist = async (authToken, product, wishlist) => {
  return wishlist.find(
    (productInWishlist) => productInWishlist._id === product._id
  )
    ? alert("product exist in wishlist")
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
          return data.wishlist;
        } catch (e) {
          console.error(e);
        }
      })();
};
