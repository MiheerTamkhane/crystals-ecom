import axios from "axios";

export const getUserCart = async (authToken) => {
  try {
    const { data } = await axios.get("/api/user/cart", {
      headers: {
        authorization: authToken,
      },
    });
    return data.cart;
  } catch (e) {
    console.error(e);
    return;
  }
};
