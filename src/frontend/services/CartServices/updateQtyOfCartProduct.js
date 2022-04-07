import axios from "axios";

export const updateQtyOfCartProduct = async (authToken, id, type) => {
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

    return data.cart;
  } catch (error) {
    console.error(error.message);
  }
};
