import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react"; // ใช้ icon จาก lucide-react

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // ฟังการเลื่อนหน้า
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // ฟังก์ชันเลื่อนไปบนสุด
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // เลื่อนนุ่มๆ
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-[100vh] p-3 z-40 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
