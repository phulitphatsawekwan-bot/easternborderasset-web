import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const createProfile = async(token, data) => {
    // console.log('func create profile', token, data);
    return await axios.post(`${API_BASE_URL}/api/profile`, data
        , {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    )
};
