import axios from "axios";

export const editAddressService = async (id, address, token) => {
  try {
    const { data } = await axios.post(
      `/api/user/address/${id}`,
      { address },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
