import axios from "axios";

export const updateQtyOfCartProduct = async (authToken, id, setCart, type) => {
  try {
    const { data } = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type,
        },
      },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    setCart(data.cart);
  } catch (error) {
    console.error(error.message);
  }
};
