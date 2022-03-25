import axios from "axios";

export const removeFromWishlist = async (authToken, product, setWishlist) => {
  try {
    const request = await axios.delete(`/api/user/wishlist/${product._id}`, {
      headers: {
        authorization: authToken,
      },
    });
    setWishlist(request.data.wishlist);
  } catch (e) {
    console.error(e);
  }
};
