import { useTranslation } from "react-i18next";

const Recommend = () => {
  const { t } = useTranslation();
  return (
    <div>
        <a href="/recommend">{t("recommend")}</a>
    </div>
  )
}
export default Recommend