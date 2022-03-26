import axios from "axios";

export const addToCart = async (authToken, product, cart, setCart) => {
  cart.find((productInCart) => productInCart._id === product._id)
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
          setCart(data.cart);
        } catch (e) {
          console.error(e);
          return;
        }
      })();
};
