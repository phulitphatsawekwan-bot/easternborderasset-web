import { Link } from "react-router"
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
    <a href="/">{t("home")}</a>
    </div>
  )
}
export default Home