import axios from "axios";

export const addAddressService = async (token, address) => {
  try {
    const response = await axios.post(
      "/api/user/address",
      {
        address,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response;
  } catch (err) {
    console.error(err);
  }
};
