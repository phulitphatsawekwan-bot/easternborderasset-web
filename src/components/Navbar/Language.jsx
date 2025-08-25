import { useContext } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LanguageContext } from "../LanguageProvider";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { i18n, t } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);

  const languages = [
    { code: "EN", flag: "https://flagcdn.com/gb.svg" },
    { code: "TH", flag: "https://flagcdn.com/th.svg" }
  ];
  const current = languages.find((l) => l.code === language.toUpperCase()) || languages[0];

  const changeLanguage = (code) => {
    setLanguage(code.toLowerCase());
    i18n.changeLanguage(code.toLowerCase());
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 items-center">
        <img src={current.flag} alt={current.code} width={40} />
        <span className="text-white">▼</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>{t("selectlanguage")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languages.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => changeLanguage(l.code)}
            className="flex items-center gap-2"
          >
            <img src={l.flag} alt={l.code} width={40} />
            <span>{l.code}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Language;
