import { useState, useRef, useEffect } from "react";
import RealestateCard from "../card/RealestateCard";
import useRealestateStore from "@/store/realestate-store";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RealestateLists = () => {
  const realestates = useRealestateStore((state) => state.realestates);
  const actionListRealestate = useRealestateStore((state) => state.actionListRealestate);
  const listRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // ตรวจขนาดจอเพื่อกำหนด itemsPerPage
  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(4);
      }
      if (listRef.current) {
        setContainerWidth(listRef.current.offsetWidth);
      }
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const totalPages = Math.ceil(realestates.length / itemsPerPage);

  // clone หน้าแรกและสุดท้าย
  const extendedPages = [
    realestates.slice(-itemsPerPage),
    ...Array.from({ length: totalPages }).map((_, pageIndex) => {
      const startIndex = pageIndex * itemsPerPage;
      return realestates.slice(startIndex, startIndex + itemsPerPage);
    }),
    realestates.slice(0, itemsPerPage),
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const goToPage = (page) => {
    setCurrentPage(page);
    setIsTransitioning(true);
  };

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  const handleTransitionEnd = () => {
    if (currentPage === 0) {
      setIsTransitioning(false);
      setCurrentPage(totalPages);
    }
    if (currentPage === totalPages + 1) {
      setIsTransitioning(false);
      setCurrentPage(1);
    }
  };
  useEffect(() => {
    actionListRealestate();
  }, []);

  return (
    <div className="relative overflow-hidden" ref={listRef}>
      {/* Prev */}
      <button
        onClick={prevPage}
        className="text-white absolute top-1/2 -translate-y-1/2 left-2 z-10 
        bg-blue-500 shadow-md rounded-full p-3 hover:bg-blue-400 transition"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next */}
      <button
        onClick={nextPage}
        className="text-white absolute top-1/2 -translate-y-1/2 right-2 z-10 
        bg-blue-500 shadow-md rounded-full p-3 hover:bg-blue-400 transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slider */}
      <div
        className="flex"
        style={{
          transform: `translateX(-${currentPage * containerWidth}px)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          width: `${extendedPages.length * containerWidth}px`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedPages.map((pageItems, pageIndex) => (
          <div
            key={pageIndex}
            style={{ width: containerWidth }}
            className="shrink-0 px-4 py-6"
          >
            <div
              className={`grid gap-6`}
              style={{
                gridTemplateColumns: `repeat(${itemsPerPage}, minmax(0, 1fr))`,
              }}
            >
              {pageItems.map((item, idx) => (
                <RealestateCard key={item.id || idx} realestates={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealestateLists;