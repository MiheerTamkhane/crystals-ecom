import axios from "axios";
import toast from "react-hot-toast";
export const addToWishlist = async (authToken, product) => {
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
  } catch (err) {
    toast.error(err.message);
  }
};
