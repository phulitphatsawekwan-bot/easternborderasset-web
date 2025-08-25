import { Share2 } from "lucide-react"; // หรือไอคอนที่คุณชอบ
import { useTranslation } from "react-i18next";

const ShareButton = () => {
  const { i18n, t } = useTranslation();
  const shareUrl = window.location.href;

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: shareUrl,
        })
        .catch((err) => console.log("Share failed:", err));
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("Copied link to clipboard!");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center h-10 gap-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      type="button"
    >
      <Share2 size={18} />
      {t("Share")}
    </button>
  );
};

export default ShareButton;
