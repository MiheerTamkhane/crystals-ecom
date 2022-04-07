import axios from "axios";

export const removeFromWishlist = async (authToken, id) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: {
        authorization: authToken,
      },
    });
    return response.data.wishlist;
  } catch (e) {
    console.error(e);
  }
};
