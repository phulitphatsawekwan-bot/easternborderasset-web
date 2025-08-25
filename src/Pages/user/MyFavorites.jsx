import RealestateCard from "@/components/card/RealestateCard";
import useRealestateStore from "@/store/realestate-store";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const MyFavorites = () => {
    const { i18n, t } = useTranslation();
    const { getToken } = useAuth();
    const actionListFavorites = useRealestateStore((state) => state.actionListFavorites);
    const favorites = useRealestateStore((state) => state.favorites);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFavorites();
    }, []);

    const fetchFavorites = async () => {
        try {
            setLoading(true);
            const token = await getToken();
            await actionListFavorites(token);
        } catch (error) {
            console.error("Error fetching favorites:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="px-11 pt-8">
                <h1 className="text-2xl font-bold">{t("myfavorite")}</h1>
                <hr className="my-4 border border-black border-[1px]" />
            </div>
            <div className="h-[100vh]">
                {loading ? (
                    <p className="text-center mt-20 text-lg">{t("loading")}</p>
                ) : (
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4 p-10">
                        {favorites && favorites.length > 0 ? (
                            favorites.map((item) => (
                                <RealestateCard key={item.id} realestates={item.eastborder} />
                            ))
                        ) : (
                            <p className="text-center col-span-full">{t("nofavorite")}</p>
                        )}
                    </section>
                )}
            </div>
        </div>
    );
};

export default MyFavorites;
