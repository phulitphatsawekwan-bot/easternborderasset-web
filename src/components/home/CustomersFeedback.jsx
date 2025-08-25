import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const reviews = [
  {
    name: "Somchai S.",
    date: "2025-08-09",
    rating: 4.8,
    comment:
      "ประทับใจบริการมากครับ ทีมงานเป็นกันเอง ทำงานไว และใส่ใจรายละเอียดทุกขั้นตอน ประสบการณ์ครั้งนี้ทำให้รู้สึกว่าบริษัทนี้เป็นมืออาชีพจริง ๆ จะกลับมาใช้บริการอีกแน่นอนครับ",
  },
  {
    name: "Ananya K.",
    date: "2025-08-05",
    rating: 5,
    comment:
      "บริการดีเยี่ยม พนักงานตอบกลับไวมาก แถมให้คำแนะนำที่มีประโยชน์สุด ๆ ประทับใจทุกอย่างตั้งแต่ต้นจนจบ แนะนำต่อให้เพื่อน ๆ แล้วหลายคนค่ะ",
  },
  {
    name: "Krit P.",
    date: "2025-08-01",
    rating: 4.9,
    comment:
      "คุณภาพงานดีมาก เกินความคาดหมาย ราคาเหมาะสมและคุ้มค่ากับสิ่งที่ได้รับ มีความใส่ใจลูกค้าเป็นพิเศษ และทีมงานติดตามผลหลังงานสำเร็จด้วยครับ",
  },
  {
    name: "Mali T.",
    date: "2025-07-30",
    rating: 4.7,
    comment:
      "บริการรวดเร็วและเป็นกันเองมากค่ะ ประทับใจการสื่อสารและความใส่ใจในรายละเอียด ทำให้รู้สึกมั่นใจเมื่อตัดสินใจใช้บริการครั้งถัดไป",
  },
  {
    name: "John Doe",
    date: "2025-07-25",
    rating: 5,
    comment:
      "Everything was perfect! Quick service, professional staff, and they went above and beyond my expectations. Highly recommended for anyone who wants quality and speed.",
  },
  {
    name: "Napat P.",
    date: "2025-07-20",
    rating: 4.6,
    comment:
      "บริการรวดเร็วและมืออาชีพมาก ๆ ครับ รู้สึกประทับใจในการดูแลลูกค้าอย่างใส่ใจจริง ๆ",
  },
  {
    name: "Suda L.",
    date: "2025-07-18",
    rating: 4.9,
    comment:
      "แนะนำมาก ๆ ค่ะ การติดต่อสะดวก พนักงานให้ข้อมูลครบถ้วน ช่วยแก้ไขปัญหาได้รวดเร็ว",
  },
  {
    name: "Anuwat K.",
    date: "2025-07-15",
    rating: 5,
    comment:
      "เว็บนี้แนะนำเลย ดีจริงๆ ครับ ชอบการบริการของพนักงานมากๆ ครับ งานละเอียดและตรงตามความต้องการ ประทับใจในบริการหลังการขายด้วยครับ",
  },
  {
    name: "Pimchanok S.",
    date: "2025-07-10",
    rating: 4.8,
    comment:
      "ทีมงานให้คำปรึกษาอย่างเป็นกันเองและมีความรู้สูง ทำให้ตัดสินใจเลือกใช้บริการได้ง่ายขึ้นค่ะ และมาตรฐานการให้บริการดีมากๆ เลยค่ะ ชอบมากๆ",
  },
  {
    name: "Thanawat T.",
    date: "2025-07-05",
    rating: 4.7,
    comment:
      "ราคาเหมาะสมและงานออกมาดีมาก พนักงานตอบคำถามรวดเร็ว ประทับใจครับ",
  },
];

// สีพื้นหลังคละสีสำหรับโปรไฟล์
const profileColors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-red-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-orange-500",
  "bg-cyan-500",
];

const CustomersFeedbackGrid = () => {
  const { t } = useTranslation();
  const [itemsPerPage, setItemsPerPage] = useState(
    typeof window !== "undefined" && window.innerWidth < 640 ? 1 : 4
  );
  const [page, setPage] = useState(0);
  const [expanded, setExpanded] = useState({});
  const cardRefs = useRef([]);

  useEffect(() => {
    const onResize = () => {
      const ipp = window.innerWidth < 640 ? 1 : 4;
      setItemsPerPage(ipp);
      setPage(0);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const totalPages = Math.max(1, Math.ceil(reviews.length / itemsPerPage));
  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  const toggleExpand = (idx) => {
    setExpanded((s) => {
      const newState = { ...s, [idx]: !s[idx] };
      return newState;
    });

    setTimeout(() => {
      if (cardRefs.current[idx]) {
        cardRefs.current[idx].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <div className="relative w-full py-8 overflow-visible">
      {/* ปุ่มซ้าย */}
      <button
        aria-label="Previous"
        onClick={prev}
        disabled={page === 0}
        className="absolute left-[-2.5rem] top-1/2 -translate-y-1/2 z-20 bg-white shadow rounded-full p-2 hover:bg-blue-200 disabled:opacity-40"
      >
        <ChevronLeft />
      </button>

      {/* Viewport */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${totalPages * 100}%`,
            transform: `translateX(-${page * (100 / totalPages)}%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => {
            const start = pageIndex * itemsPerPage;
            const pageItems = reviews.slice(start, start + itemsPerPage);

            return (
              <div
                key={pageIndex}
                className="flex gap-4 px-2 box-border"
                style={{
                  width: `${100 / totalPages}%`,
                }}
              >
                {pageItems.map((review, idx) => {
                  const globalIdx = start + idx;
                  const isExpanded = !!expanded[globalIdx];
                  const limit = 100;
                  const needsTruncate = review.comment.length > limit;
                  const displayText =
                    isExpanded || !needsTruncate
                      ? review.comment
                      : review.comment.slice(0, limit) + "...";
                  const isHighRating = review.rating >= 4.5;

                  const bgColor =
                    profileColors[globalIdx % profileColors.length] || "bg-gray-500";

                  return (
                    <article
                      ref={(el) => (cardRefs.current[globalIdx] = el)}
                      key={globalIdx}
                      className="border-4 border-transparent hover:border-blue-500 transition-transform duration-300 ease-in-out flex-1 relative bg-white rounded-xl p-4 shadow flex flex-col"
                      style={{
                        flexBasis: `${100 / itemsPerPage}%`,
                        maxWidth: `${100 / itemsPerPage}%`,
                        height: isExpanded ? "auto" : "16rem",
                      }}
                    >
                      {/* Google G logo */}
                      <img
                        src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
                        alt="Google"
                        className="absolute right-3 top-3 w-5 h-5"
                      />

                      {/* Avatar + Name */}
                      <div className="flex items-start gap-3">
                        <div
                          className={`${bgColor} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg select-none`}
                        >
                          {review.name.trim()[0]?.toUpperCase() || "?"}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-semibold truncate">
                              {review.name}
                            </h4>
                            <CheckCircle
                              size={16}
                              className="text-sky-500"
                              title="Verified"
                            />
                          </div>
                          <div className="text-xs text-gray-500">{review.date}</div>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mt-3">
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => {
                            const filled = i < Math.round(review.rating);
                            return (
                              <span
                                key={i}
                                className={`${
                                  filled && isHighRating
                                    ? "text-yellow-400"
                                    : filled
                                    ? "text-yellow-300"
                                    : "text-gray-300"
                                } ${isHighRating ? "text-2xl" : "text-xl"}`}
                              >
                                ★
                              </span>
                            );
                          })}
                        </div>
                        <div className="text-sm font-medium">
                          {review.rating.toFixed(1)}
                        </div>
                      </div>

                      {/* Comment */}
                      <div className="mt-3 text-gray-700 text-md overflow-hidden">
                        <p className="leading-relaxed">{displayText}</p>
                        {needsTruncate && (
                          <button
                            onClick={() => toggleExpand(globalIdx)}
                            className="mt-2 text-sm text-gray-400"
                          >
                            {isExpanded ? t("collapse") : t("readmore")}
                          </button>
                        )}
                      </div>
                    </article>
                  );
                })}
                {/* กรณีการ์ดไม่ครบให้เว้นช่องว่างเพื่อไม่ให้เลย์เอาท์เสีย */}
                {pageItems.length < itemsPerPage &&
                  Array.from({ length: itemsPerPage - pageItems.length }).map(
                    (_, i) => (
                      <div
                        key={`filler-${i}`}
                        style={{
                          flexBasis: `${100 / itemsPerPage}%`,
                          maxWidth: `${100 / itemsPerPage}%`,
                        }}
                      />
                    )
                  )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ปุ่มขวา */}
      <button
        aria-label="Next"
        onClick={next}
        disabled={page === totalPages - 1}
        className="absolute right-[-2.5rem] top-1/2 -translate-y-1/2 z-20 bg-white shadow rounded-full p-2 hover:bg-blue-200 disabled:opacity-40"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default CustomersFeedbackGrid;
