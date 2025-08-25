import axios from "axios";

export const uploadImage = async (token, form) => {
    return await axios.post('https://easternborderasset-api.vercel.app/api/images',
        { image: form }, 
        {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    )
};