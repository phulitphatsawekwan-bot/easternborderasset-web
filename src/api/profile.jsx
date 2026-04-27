import axios from "axios";

export const createProfile = async (token, data) => {
  return await axios.post(
    "https://easternborderasset-api.vercel.app/api/profile",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};
