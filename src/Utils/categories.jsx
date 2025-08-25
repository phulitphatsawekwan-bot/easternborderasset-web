import {
  House,
  Building2,
  BedDouble,
  Building,
  HousePlus,
  WavesLadder,
  Warehouse,
  Grid2x2,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export const useCategories = () => {
  const { t } = useTranslation();

  const categories = [
    { label: t("house"), value: "house", icon: House },
    { label: t("condo"), value: "condo", icon: Building2 },
    { label: t("hotel"), value: "hotel", icon: BedDouble },
    { label: t("apartment"), value: "apartment", icon: Building },
    { label: t("townhouse"), value: "townhouse", icon: HousePlus },
    { label: t("villa"), value: "villa", icon: WavesLadder },
    { label: t("commercialbuilding"), value: "commercial-building", icon: Warehouse },
    { label: t("land"), value: "land", icon: Grid2x2 },
  ];

  return categories;
};
