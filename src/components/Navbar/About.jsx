import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div>
        <a href="/about">{t("about")}</a>
    </div>
  )
}
export default About