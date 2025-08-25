import { MapPin, Bed, Bath, Ruler } from "lucide-react";
import { Link } from "react-router";
import FavoriteToggleButton from "./FavoriteToggleButton";
import RealEstateAddress from "../map/RealEstateAddress";
import { useTranslation } from "react-i18next";

const RealestateCard = ({ realestates }) => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language || "en";

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
    "commercial-building": { en: "Commercial Building", th: "อาคารพาณิชย์" },
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

  return (
    <article
      className="relative bg-white rounded-2xl border-4 border-blue-500 
      hover:scale-105 hover:duration-300 shadow-md
      h-[100%] flex flex-col"
    >
      <Link to={`/user/realestate/${realestates.id}`}>
        {/* รูปภาพ */}
        <div className="relative h-[300px] rounded-xl mb-2">
          <img
            src={realestates.secure_url}
            className="w-full h-full object-cover rounded-xl"
            alt={realestates.title}
          />
        </div>

        {/* เนื้อหา */}
        <div className="mx-5 my-3 flex flex-col flex-1">
          <div>
            <div className="flex">
              <h3 className="text-2xl text-blue-800 font-semibold mr-1">฿</h3>
              <h3 className="text-2xl text-blue-800 font-semibold">
                {(realestates.price ?? 0).toLocaleString()}
              </h3>
            </div>

            <p className="text-blue-800 font-semibold truncate">
              {realestates.title}
            </p>

            {/* แสดงชื่อที่อยู่ */}
            <div className="flex mt-3 items-center gap-1">
              <div><MapPin className="text-blue-800" /></div>
              <RealEstateAddress lat={realestates.lat} lng={realestates.lng} />
            </div>

            <hr className="border-blue-800 mt-1 border-1" />

            <div className="h-[60px]">
              <div className="flex mt-2 gap-2">
                {realestates.bedroom && (
                  <>
                    <Bed className="text-blue-800" />
                    <p className="text-blue-800 mr-2">
                      {bathbedLabels[realestates.bedroom?.toLowerCase()]?.[lang] || realestates.bedroom}
                      </p>
                  </>
                )}

                {realestates.bathroom && (
                  <>
                    <Bath className="text-blue-800" />
                    <p className="text-blue-800">
                      {bathbedLabels[realestates.bathroom?.toLowerCase()]?.[lang] || realestates.bathroom}
                      </p>
                  </>
                )}
              </div>

              <div className="flex gap-2">
                <Ruler className="text-blue-800" />
                <p className="text-blue-800">{realestates.space} {t("sqm")}</p>
              </div>
            </div>
          </div>

          {/* หมวดหมู่ชิดล่าง */}
          <div className="mb-auto">
            <p className="font-semibold text-blue-800 text-[18px]">
              {categoryLabels[realestates.category?.toLowerCase()]?.[lang] || realestates.category}
            </p>
          </div>
        </div>

        {/* Type */}
        <div className="flex absolute top-4 left-4 z-10 w-auto px-3 h-8 items-center justify-center bg-black bg-opacity-40 rounded-lg">
          <h1 className="text-white font-semibold flex text-center">
            {typeLabels[realestates.type?.toLowerCase()]?.[lang] || realestates.type}
          </h1>
        </div>
      </Link>

      {/* Favorite Button */}
      <div className="absolute top-4 right-4">
        <FavoriteToggleButton
          realestateId={realestates.id}
          isFavorite={realestates.isFavorite}
        />
      </div>
    </article>
  );
};

export default RealestateCard;
