import axios from "axios";

export const getUserWishlist = async (authToken) => {
  try {
    const response = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: authToken,
      },
    });
    return response.data.wishlist;
  } catch (err) {
    console.error(err);
  }
};
