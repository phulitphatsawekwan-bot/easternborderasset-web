import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const uploadImage = async (token, form) => {
    return await axios.post(`${API_BASE_URL}/api/images`,
        { image: form }, 
        {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    )
};
