import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Searchbar from "@/components/search/Searchbar";
import CategoryList from "@/components/search/CategoryList";
import RecommendListsContainer from "@/components/reccommend/RecommendListsContainer";

const Recommend = () => {
  const [searchParams] = useSearchParams();
  const [realestates, setRealestates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRealestates = async () => {
      setLoading(true);
      try {
        // ดึงค่า query params
        const category = searchParams.get("category");
        const type = searchParams.get("type");
        const search = searchParams.get("search");
        const price = searchParams.get("price");

        // สร้าง query string สำหรับ backend
        const query = new URLSearchParams();
        if (category) query.set("category", category);
        if (type) query.set("type", type);
        if (search) query.set("search", search);
        if (price) query.set("price", price);

        const url = query.toString()
          ? `https://easternborderasset-api.vercel.app/api/filter-realestate?${query.toString()}`
          : `https://easternborderasset-api.vercel.app/api/filter-realestate`;

        const res = await fetch(url);
        const data = await res.json();
        setRealestates(data.result || []);
      } catch (err) {
        console.error(err);
        setRealestates([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRealestates();
  }, [searchParams]);

  return (
    <div className="min-h-[100vh]">
      <div className="px-10 lg:px-60">
        <Searchbar />
      </div>
      <div className="px-5">
        <div className="hidden lg:block">
          <CategoryList />
        </div>
        <RecommendListsContainer realestates={realestates} loading={loading} />
      </div>
    </div>
  );
};

export default Recommend;
