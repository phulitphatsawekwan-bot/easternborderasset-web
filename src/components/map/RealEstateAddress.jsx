// RealEstateAddress.jsx
import { useEffect, useState } from "react";

const memoryCache = {}; // cache ในหน่วยความจำ (ใช้ใน session เดียว)

// ฟังก์ชันดึง cache จาก localStorage
const getLocalCache = () => {
  try {
    return JSON.parse(localStorage.getItem("addressCache")) || {};
  } catch {
    return {};
  }
};

// ฟังก์ชันบันทึก cache ลง localStorage
const saveLocalCache = (cache) => {
  try {
    localStorage.setItem("addressCache", JSON.stringify(cache));
  } catch {}
};

const RealEstateAddress = ({ lat, lng }) => {
  const [address, setAddress] = useState("Loading address...");

  useEffect(() => {
    if (!lat || !lng) return;

    const cacheKey = `${lat},${lng}`;

    // 1. โหลดจาก memory cache ก่อน
    if (memoryCache[cacheKey]) {
      setAddress(memoryCache[cacheKey]);
      return;
    }

    // 2. โหลดจาก localStorage cache ถ้ามี
    const localCache = getLocalCache();
    if (localCache[cacheKey]) {
      memoryCache[cacheKey] = localCache[cacheKey]; // sync เข้า memory
      setAddress(localCache[cacheKey]);
      return;
    }

    // 3. ถ้าไม่มี cache → ดึงจาก API
    const fetchAddress = async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`
        );
        const data = await res.json();

        if (data && data.address) {
          const subDistrict =
            data.address.suburb ||
            data.address.village ||
            data.address.hamlet ||
            data.address.township ||
            "";
          const district =
            data.address.county ||
            data.address.town ||
            data.address.city ||
            "";
          const province = data.address.state || "";

          const fullAddress = [subDistrict, district, province]
            .filter(Boolean)
            .join(", ");

          // เก็บลงทั้ง memory และ localStorage
          memoryCache[cacheKey] = fullAddress || "Address not found";
          localCache[cacheKey] = memoryCache[cacheKey];
          saveLocalCache(localCache);

          setAddress(memoryCache[cacheKey]);
        } else {
          setAddress("Address not found");
        }
      } catch (error) {
        console.error(error);
        setAddress("Failed to load address");
      }
    };

    fetchAddress();
  }, [lat, lng]);

  return <span className="text-blue-800 truncate">{address}</span>;
};

export default RealEstateAddress;
