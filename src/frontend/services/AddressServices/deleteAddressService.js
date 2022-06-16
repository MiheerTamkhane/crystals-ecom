import axios from "axios";

export const deleteAddressService = async (token, id) => {
  try {
    const { data } = await axios.delete(`/api/user/address/${id}`, {
      headers: {
        authorization: token,
      },
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};
