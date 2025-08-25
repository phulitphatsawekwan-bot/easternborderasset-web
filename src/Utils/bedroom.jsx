import { useTranslation } from "react-i18next";

export const useBedroomOptions = () => {
  const { t } = useTranslation();

  const bedroom = [
    { label: t("studio") },
    { label: t("oneroom") },
    { label: t("tworoom") },
    { label: t("threeroom") },
    { label: t("fourroom") },
    { label: t("fiveroom") },
    { label: t("morethanfive") },
  ];

  return bedroom;
};
