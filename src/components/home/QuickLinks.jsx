import { useTranslation } from "react-i18next";
import btmlogo from "@/assets/white_logo_on_nav_bar.png"
import lineqrcode from "@/assets/S__69206043 copy.jpg"

const QuickLinks = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="flex items-center justify-center md:h-[50vh] h-[120vh] bg-[#0B1D51]">
                <div className="px-20 grid md:grid-cols-4 md:flex gap-[8vh] md:gap-[25vh]">
                    <div>
                        <img src={btmlogo} width={250} />
                    </div>
                    <div>
                        <h1 className="text-white font-bold">{t("quicklinks")}</h1>
                        <div className="grid mt-4">
                            <a href="/" className="text-white hover:text-blue-300">{t("home")}</a>
                            <a href="/recommend" className="text-white hover:text-blue-300">{t("recommend")}</a>
                            <a href="/about" className="text-white hover:text-blue-300">{t("about")}</a>
                            <a href="/contact" className="text-white hover:text-blue-300">{t("contact")}</a>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-white font-bold">{t("importantlinks")}</h1>
                        <div className="grid mt-4">
                            <a href="/privacypolicy" className="text-white hover:text-blue-300">{t("privacypolicy")}</a>
                            <a href="/termsandconditions" className="text-white hover:text-blue-300">{t("termsandconds")}</a>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-white font-bold">{t("contactus")}</h1>
                        <div className="grid mt-4">
                            <img src={lineqrcode} width={120} className="mb-4" />
                            <a className="text-white">082-107-4850</a>
                            <a className="text-white">easternborderasset@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center h-10 p-10">
                <div className="bg-white">
                    <p className="text-sm">Eastern Border Asset</p>
                    <p className="text-sm">{t("webstyle")}</p>
                </div>
            </div>
        </div>
    )
}
export default QuickLinks