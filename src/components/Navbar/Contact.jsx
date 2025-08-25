import { useTranslation } from "react-i18next";


const Contact = () => {
    const { t } = useTranslation();
  return (
    <div>
        <a href="/contact">{t("contact")}</a>
    </div>
  )
}
export default Contact