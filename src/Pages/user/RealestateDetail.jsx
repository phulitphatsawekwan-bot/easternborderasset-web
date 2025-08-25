import { ReadRealestate } from "@/api/realestate";
import Mainmap from "@/components/map/Mainmap";
import Breadcrums from "@/components/realestates/Breadcrums";
import Description from "@/components/realestates/Description";
import ImageContainer from "@/components/realestates/ImageContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { MapPin, Bed, Bath, Ruler } from 'lucide-react';
import ContactForm from "@/components/contact/ContactForm";
import ShareButton from "@/components/realestates/ShareButton";
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import RealestateContainer from "@/components/home/RealestateContainer";
import { useTranslation } from "react-i18next";


function RealestateDetail() {
    const { t, i18n } = useTranslation();
    const [realestate, setRealestate] = useState([]);
    const { id } = useParams();
    const lang = i18n.language || "en";
    // console.log(id);

    // Mapping คำแปล
    const typeLabels = {
        rent: { en: "Rent", th: "เช่า" },
        sell: { en: "Sell", th: "ขาย" },
        purchase: { en: "Purchase", th: "ซื้อ" },
        เช่า: { en: "Rent", th: "เช่า" },
        ขาย: { en: "Sell", th: "ขาย" },
        ซื้อ: { en: "Purchase", th: "ซื้อ" },
    };

    const categoryLabels = {
        house: { en: "House", th: "บ้าน" },
        condo: { en: "Condo", th: "คอนโด" },
        apartment: { en: "Apartment", th: "อพาร์ตเมนต์" },
        "commercial building": { en: "Commercial Building", th: "อาคารพาณิชย์" },
        land: { en: "Land", th: "ที่ดิน" },
        townhouse: { en: "Townhouse", th: "ทาวน์เฮาส์" },
        villa: { en: "Villa", th: "วิลล่า" },
        hotel: { en: "Hotel", th: "โรงแรม" },
        บ้าน: { en: "House", th: "บ้าน" },
        คอนโด: { en: "Condo", th: "คอนโด" },
        อพาร์ตเมนต์: { en: "Apartment", th: "อพาร์ตเมนต์" },
        อาคารพาณิชย์: { en: "Commercial Building", th: "อาคารพาณิชย์" },
        ที่ดิน: { en: "Land", th: "ที่ดิน" },
        ทาวน์เฮาส์: { en: "Townhouse", th: "ทาวน์เฮาส์" },
        วิลล่า: { en: "Villa", th: "วิลล่า" },
        โรงแรม: { en: "Hotel", th: "โรงแรม" },
    };

    const bathbedLabels = {
        studio: { en: "Studio", th: "สตูดิโอ" },
        "1 room": { en: "1 Room", th: "1 ห้อง" },
        "2 rooms": { en: "2 Rooms", th: "2 ห้อง" },
        "3 rooms": { en: "3 Rooms", th: "3 ห้อง" },
        "4 rooms": { en: "4 Rooms", th: "4 ห้อง" },
        "5 rooms": { en: "5 Rooms", th: "5 ห้อง" },
        "more than 5": { en: "More than 5", th: "มากกว่า 5" },
        สตูดิโอ: { en: "Studio", th: "สตูดิโอ" },
        "1 ห้อง": { en: "1 Room", th: "1 ห้อง" },
        "2 ห้อง": { en: "2 Rooms", th: "2 ห้อง" },
        "3 ห้อง": { en: "3 Rooms", th: "3 ห้อง" },
        "4 ห้อง": { en: "4 Rooms", th: "4 ห้อง" },
        "5 ห้อง": { en: "5 Rooms", th: "5 ห้อง" },
        "มากกว่า 5": { en: "More than 5", th: "มากกว่า 5" },
    };

    useEffect(() => {
        fetchRealestateDetail(id)
    }, [id])

    const fetchRealestateDetail = async (id) => {
        try {
            const res = await ReadRealestate(id);
            setRealestate(res.data.result);
        } catch (error) {
            console.log(error);
        }
    };
    // console.log(realestate)
    if (!realestate.title) {
        return <div>Loading...</div>; // รอข้อมูลโหลดก่อน
    }

    return (
        <div className="px-10 pb-10">
            {/* Breadcrums */}
            <Breadcrums name={realestate.title} />

            {/* Header */}
            <header className="flex flex-col sm:flex-row sm:items-center justify-between mt-3">
                <div>
                    <h1 className="break-words text-3xl font-bold text-blue-800">{realestate.title}</h1>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                        <div className="flex gap-3 mt-2">
                            {realestate.bedroom && (
                                <>
                                    <Bed className="text-blue-800" /><p>
                                        {bathbedLabels[realestate.bedroom?.toLowerCase()]?.[lang] || realestate.bedroom}
                                        </p>
                                </>)}
                            {realestate.bathroom && (
                                <>
                                    <Bath className="text-blue-800" /><p>
                                        {bathbedLabels[realestate.bathroom?.toLowerCase()]?.[lang] || realestate.bathroom}
                                        </p>
                                </>)}
                            <Ruler className='text-blue-800' /><p>{realestate.space} {t("sqm")}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-2 mt-2 ">
                        <h1 className="break-words text-2xl text-blue-800">
                            {typeLabels[realestate.type?.toLowerCase()]?.[lang] || realestate.type}:
                            </h1>
                        <h1 className="break-words text-2xl font-bold text-blue-800">฿{(realestate.price ?? 0).toLocaleString()}</h1>
                    </div>
                    <div className="flex gap-2 mt-2 sm:justify-end">
                        <ShareButton />
                    </div>
                </div>

            </header>
            {/* Image */}
            <ImageContainer image={realestate.secure_url} name={realestate.name} />
            {/* Description */}

            <div className="flex flex-col px-5 sm:flex-row justify-between">
                <h2 className="text-2xl font-bold my-2 mt-10">{t("General Information")}</h2>
                <hr />

                <div className="px-5 grid grid-cols-2 sm:hidden">
                    <div className="mt-6">
                        <p className="text-gray-600">{t("Property Category")}</p>
                        <p className="font-semibold">{typeLabels[realestate.type?.toLowerCase()]?.[lang] || realestate.type}</p>
                    </div>
                    <div className="mt-6">
                        {realestate.bedroom && (
                            <><Bed /><p>{bathbedLabels[realestate.bedroom?.toLowerCase()]?.[lang] || realestate.bedroom}</p></>)}
                    </div>
                    <div className="mt-6">
                        {realestate.bathroom && (
                            <><Bath /><p>{bathbedLabels[realestate.bathroom?.toLowerCase()]?.[lang] || realestate.bathroom}</p></>)}
                    </div>
                    <div className="mt-6">
                        <p className="text-gray-600">{t("space")}</p>
                        <p className="font-semibold">{realestate.space} {t("sqm")}</p>
                    </div>
                </div>
                <div className="sm:w-[110vh] mt-8">
                    {realestate.lat && <Mainmap Location={[realestate.lat, realestate.lng]} />}
                    <h1 className="font-semibold mt-4">{t("description")}</h1>
                    <span className="text-light text-gray-600"><Description text={realestate.description} /></span>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between">
                <h2 className="text-2xl font-bold my-2 mt-10 mb-5">{t("Property Overview")}</h2>


                <div className="sm:w-[110vh] sm:mt-8 p-5 rounded-xl" style={{ backgroundColor: "#f0f0f0" }}>

                    <div className="flex justify-between my-4">
                        <p className="font-semibold">{t("Property ID")}</p>
                        <p className="font-light">{realestate.id}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between my-4">
                        <p className="font-semibold">{t("price")}</p>
                        <p className="font-light">฿ {(realestate.price ?? 0).toLocaleString()}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between my-4">
                        <p className="font-semibold">{t("space")}</p>
                        <p className="font-light">{realestate.space} {t("sqm")}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between my-4">
                        <p className="font-semibold">{t("bedroom")}</p>
                        <p className="font-light">{bathbedLabels[realestate.bedroom?.toLowerCase()]?.[lang] || realestate.bedroom}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between my-4">
                        <p className="font-semibold">{t("bathroom")}</p>
                        <p className="font-light">{bathbedLabels[realestate.bathroom?.toLowerCase()]?.[lang] || realestate.bathroom}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between my-4">
                        <p className="font-semibold">{t("Property Type")}</p>
                        <p className="font-light">{typeLabels[realestate.type?.toLowerCase()]?.[lang] || realestate.type}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between my-4">
                        <p className="font-semibold">{t("category")}</p>
                        <p className="font-light">{categoryLabels[realestate.category?.toLowerCase()]?.[lang] || realestate.category}</p>
                    </div>

                </div>

            </div>
            <div className="flex flex-col sm:flex-row justify-between">
                <h2 className="text-2xl font-bold my-2 mt-10 mb-5">{t("Contact Us")}</h2>


                <div className="">
                    <ContactForm propertyTitle={realestate.title} />
                </div>

            </div>
            <div>
                <h1 className="text-blue-800 text-xl font-semibold">{t("recommend")}</h1>
                <RealestateContainer />
            </div>


        </div>
    )
}
export default RealestateDetail