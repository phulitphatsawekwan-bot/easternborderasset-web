import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "../ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from "../ui/select";
import { Search } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // ✅ สำหรับ redirect

  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const updateSearch = useDebouncedCallback((search, type, category, price) => {
    // สร้าง query string
    const params = new URLSearchParams();

    if (search.trim() !== "") params.set("search", search);
    if (type) params.set("type", type);
    if (category) params.set("category", category);
    if (price) params.set("price", price);

    // redirect ไป /recommend พร้อม query
    navigate(`/recommend?${params.toString()}`, { replace: true });
  });

  const hdlSubmit = (e) => {
  e.preventDefault(); // ป้องกัน form submit
  // สร้าง query string
  const params = new URLSearchParams();
  if (search.trim() !== "") params.set("search", search);
  if (type) params.set("type", type);
  if (category) params.set("category", category);
  if (price) params.set("price", price);

  // navigate ไป /recommend พร้อม query
  navigate(`/recommend?${params.toString()}`);
};


  return (
    <form onSubmit={hdlSubmit} className="w-full my-4 px-8 gap-2 justify-center items-center">
      <div className="w-full flex border-2 border-blue-800 rounded-full justify-center items-center">
        <Input
          id="search-input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("search")}
          className="w-full border-none rounded-full p-2 focus:border-none focus:outline-none focus:ring-0"
        />
        <Search className="text-blue-800 mx-2" />
      </div>

      <div className="grid grid-col lg:grid-cols-4 w-full mt-2 gap-2">
        {/* Type */}
        <Select onValueChange={setType}>
          <SelectTrigger className="w-full border-2 border-blue-800 rounded-full">
            <SelectValue placeholder={t("type")} className="placeholder:text-blue-800" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rent">{t("rent")}</SelectItem>
            <SelectItem value="sell">{t("sell")}</SelectItem>
            <SelectItem value="purchase">{t("purchase")}</SelectItem>
          </SelectContent>
        </Select>

        {/* Category */}
        <Select onValueChange={setCategory}>
          <SelectTrigger className="w-full border-2 border-blue-800 rounded-full">
            <SelectValue placeholder={t("category")} className="placeholder:text-blue-800" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="house">{t("house")}</SelectItem>
            <SelectItem value="condo">{t("condo")}</SelectItem>
            <SelectItem value="hotel">{t("hotel")}</SelectItem>
            <SelectItem value="apartment">{t("apartment")}</SelectItem>
            <SelectItem value="townhouse">{t("townhouse")}</SelectItem>
            <SelectItem value="villa">{t("villa")}</SelectItem>
            <SelectItem value="commercial-building">{t("commercialbuilding")}</SelectItem>
            <SelectItem value="land">{t("land")}</SelectItem>
          </SelectContent>
        </Select>

        {/* Price */}
        <Select onValueChange={setPrice}>
          <SelectTrigger className="w-full border-2 border-blue-800 rounded-full">
            <SelectValue placeholder={t("price")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="<10000">{t("lessthan10000")}</SelectItem>
            <SelectItem value="10000-50000">{t("tenktofiftyk")}</SelectItem>
            <SelectItem value="50000-100000">{t("tenkto100k")}</SelectItem>
            <SelectItem value=">100000">{t("morethan100k")}</SelectItem>
          </SelectContent>
        </Select>

        <button
          type="submit"
          className="lg:w-full w-full h-10 text-white px-4 rounded-full hover:bg-blue-600"
          style={{ background: 'linear-gradient(120deg, rgba(180, 103, 103, 1) 0%, rgba(29,29,153,1) 100%)' }}
        >
          {t("search")}
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
