import axios from "axios";

export const createProfile = async(token, data) => {
    // console.log('func create profile', token, data);
    return await axios.post('https://easternborderasset-api.vercel.app/api/profile', data
        , {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    )
};