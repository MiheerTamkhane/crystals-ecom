import axios from "axios";

export const getAddressService = async (token) => {
  try {
    const { data } = await axios.get("/api/user/address", {
      headers: {
        authorization: token,
      },
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};
