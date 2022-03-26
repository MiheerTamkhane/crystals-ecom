import axios from "axios";

export const removeFromCart = async (authToken, product, setCart) => {
  try {
    const request = await axios.delete(`/api/user/cart/${product._id}`, {
      headers: {
        authorization: authToken,
      },
    });
    setCart(request.data.cart);
  } catch (e) {
    console.error(e);
  }
};
