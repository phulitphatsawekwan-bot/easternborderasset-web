import axios from "axios";

export const createRealestate = async (token, data) => {
    return await axios.post('https://easternborderasset-api.vercel.app/api/realestate', data
        , {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    )
};

export const listRealestate = async (id) =>
    await axios.get(`https://easternborderasset-api.vercel.app/api/realestates/${id}`);


export const ReadRealestate = async (id) =>
    await axios.get(`https://easternborderasset-api.vercel.app/api/realestate/${id}`);





export const addOrRemoveFavorite = async (token, data) => {
    return await axios.post('https://easternborderasset-api.vercel.app/api/favorite', data
        , {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    )
};

export const listFavorites = async (token) => {
    return await axios.get('https://easternborderasset-api.vercel.app/api/favorites',
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
        `https://easternborderasset-api.vercel.app/api/recommend/filter-realestate?category=${category}&search=${search}&type=${type}&price=${price}`
    )
};
