import { categoryMap } from "@/translationsMap";
import { useCategories } from "@/Utils/categories";
import { useNavigate } from "react-router";

const CategoryList = () => {
  const navigate = useNavigate();
  const categories = useCategories(); // ตัวนี้ยังใช้ label เป็นไทย

  const hdlFilter = (thaiCategory) => {
    const englishCategory = categoryMap[thaiCategory];

    if (!englishCategory) return; // ถ้าไม่มี mapping ไม่ต้องทำอะไร

    const params = new URLSearchParams();
    params.set("category", englishCategory);

    navigate(`/recommend?${params.toString()}`);
  };

  return (
    <div className="grid grid-cols-4 lg:grid-cols-8 lg:px-12 gap-5 justify-center">
      {categories.map((item) => (
        <button
          key={item.label}
          onClick={() => hdlFilter(item.label)}
          className="flex flex-col items-center justify-center w-[15vh] m-2 text-blue-800 text-xl hover:scale-110 hover:duration-300"
        >
          <item.icon />
          <p className="capitalize font-semibold">{item.label}</p>
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
