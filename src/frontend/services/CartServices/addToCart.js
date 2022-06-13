import axios from "axios";
import toast from "react-hot-toast";
export const addToCart = async (authToken, product) => {
  try {
    const { data } = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return data.cart;
  } catch (err) {
    toast.error(err.message);
  }
};
