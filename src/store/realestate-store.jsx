import { addOrRemoveFavorite, filterRealestate, listFavorites, listRealestate } from "@/api/realestate";
import { success } from "zod";
import { create } from "zustand";


// Step 1 Create Store
const realestateStore = (set, get) => ({
    realestates: [],
    favorites: [],
    actionListRealestate: async (id) => {
        try {
            const res = await listRealestate(id);
            // console.log('This is Zustand', res.data.result)
            set({ realestates: res.data.result })
        } catch (error) {
            console.log(error);
        }
    },
    actionAddorRemoveFavorite: async (token, data) => {
        try {
            const res = await addOrRemoveFavorite(token, data);
            const realestate = get().realestates
            console.log(realestate);
            const { realestateId, isFavorite } = data;

            const updatedRealestate = realestate.map((item) => {
                return item.id === realestateId
                    ? { ...item, isFavorite: !isFavorite }
                    : item
            })

            // console.log(updatedRealestate)
            set({ realestates: updatedRealestate });

            // Update favorites
            const favorites = get().favorites
            const updatedFavorite = favorites.filter((item) => {
                return item.eastborder.id !== realestateId
            })
            set({ favorites: updatedFavorite });




            // console.log(res.data.message)
            return { success: true, message: res.data.message }
            // logic
        } catch (error) {
            const err = error?.response?.data?.message;
            return { success: false, message: err }
        }
    },
    actionListFavorites: async (token) => {
        try {
            const res = await listFavorites(token);
            // console.log(res.data.result);
            set({ favorites: res.data.result })
        } catch (error) {
            console.log(error);
        }
    },
    actionFilter: async (category = '', search = '', type = '', price = '') => {
        try {
            const res = await filterRealestate(category, search, type, price)
            console.log('This is Zustand', res.data.result)
            set({realestates: res.data.result})
        } catch (error) {
            console.log(error)
        }
    },

});

const useRealestateStore = create(realestateStore);
// Step 2 Export Store
export default useRealestateStore;