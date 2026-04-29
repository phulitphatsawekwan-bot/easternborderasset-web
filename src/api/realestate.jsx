import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const createRealestate = async (token, data) => {
    return await axios.post(`${API_BASE_URL}/api/realestate`, data
        , {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    )
};

export const listRealestate = async (id) =>
    await axios.get(`${API_BASE_URL}/api/realestates/${id}`);


export const ReadRealestate = async (id) =>
    await axios.get(`${API_BASE_URL}/api/realestate/${id}`);





export const addOrRemoveFavorite = async (token, data) => {
    return await axios.post(`${API_BASE_URL}/api/favorite`, data
        , {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    )
};

export const listFavorites = async (token) => {
    return await axios.get(`${API_BASE_URL}/api/favorites`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    )
};

// Filter
export const filterRealestate = (category, search, type, price) => {
    return axios.get(
        `${API_BASE_URL}/api/recommend/filter-realestate?category=${category}&search=${search}&type=${type}&price=${price}`
    )
};
