import {
  WalletCards,
  CircleDollarSign,
  HandCoins,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export const useTypes = () => {
  const { t } = useTranslation();

  const types = [
    { label: t("rent"), icon: WalletCards },
    { label: t("purchase"), icon: CircleDollarSign },
    { label: t("sell"), icon: HandCoins },
  ];

  return types;
};
