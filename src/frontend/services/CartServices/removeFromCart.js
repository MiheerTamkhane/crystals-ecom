import axios from "axios";

export const removeFromCart = async (authToken, id) => {
  try {
    const request = await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: authToken,
      },
    });
    return request.data.cart;
  } catch (err) {
    console.error(err);
  }
};
