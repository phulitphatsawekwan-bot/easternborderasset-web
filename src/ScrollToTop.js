// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // ถ้าอยากเลื่อนทันทีเปลี่ยนเป็น "auto"
    });
  }, [pathname]);

  return null;
}
