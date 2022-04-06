import axios from "axios";

export const addToCart = async (authToken, product, cart) => {
  return cart.find((productInCart) => productInCart._id === product._id)
    ? alert("Product exist in Cart")
    : (async () => {
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
        } catch (e) {
          console.error(e);
          return;
        }
      })();
};
