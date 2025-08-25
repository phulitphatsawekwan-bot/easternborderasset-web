import { useTranslation } from "react-i18next";

export const useBathroomOptions = () => {
  const { t } = useTranslation();

  const bathroom = [
    { label: t("oneroom") },
    { label: t("tworoom") },
    { label: t("threeroom") },
    { label: t("fourroom") },
    { label: t("fiveroom") },
    { label: t("morethanfive") },
  ];

  return bathroom;
};
