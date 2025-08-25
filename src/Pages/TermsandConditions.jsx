
import { useTranslation } from "react-i18next";

const TermsandConditions = () => {
    const { t } = useTranslation();

    return (
        <section className="min-h-[100vh] bg-gray-100 py-20 lg:px-[20vh] px-10">
            <div>
                <h1 className="text-3xl font-semibold">{t("Terms And Conditions")}</h1>
                <p className="text-gray-500">{t("Last updated: 9 August 2025")}</p>
            </div>
            <div className="lg:flex gap-10">
                <div className="lg:w-[70%] bg-white px-20 lg:px-30 min-h-[100vh] mt-10 py-20">
                    <div>
                        <p className="font-bold">
                            {t("Terms And Conditions")}
                        </p>
                        <p className="mt-5 font-light">
                            {t('Welcome to easternborderasset.com (the "Website"). Please read these terms and conditions carefully. By accessing or using our website, you agree to be bound by these terms, including our Privacy Policy. If you do not agree to all of these terms, please do not use our website.')}
                        </p>
                    </div>

                    <hr className="mt-5 border-black" />

                    <div>
                        <p className="font-bold mt-5">
                            {t("1. Acceptance of Terms")}
                        </p>
                        <p className="mt-5 font-light">
                            {t("By accessing and using the easternborderasset.com website, you accept and agree to be bound by these terms and conditions. If you do not accept these terms, please discontinue use of the website immediately.")}
                        </p>
                    </div>

                    <hr className="mt-5 border-black" />

                    <div>
                        <p className="font-bold mt-5">
                            {t("2. Purpose of the Website")}
                        </p>
                        <p className="mt-5 font-light">
                            {t("This website is intended to provide information about real estate, services, and other related information. Use of this website for illegal purposes or purposes contrary to public order is prohibited.")}
                        </p>
                    </div>

                    <hr className="mt-5 border-black" />

                    <div>
                        <p className="font-bold mt-5">
                            {t("3. Information and Registration")}
                        </p>
                        <div className="pl-5 mt-5">
                            <li className="font-light">{t("You agree to provide accurate, complete, and current information when filling out forms or contacting the website.")}</li>
                            <li className="font-light">{t("The Company reserves the right to refuse service or terminate your account if it finds that the information is inaccurate or violates these Terms.")}</li>
                        </div>
                    </div>

                    <hr className="mt-5 border-black" />

                    <div>
                        <p className="font-bold mt-5">
                            {t("4. Copyright and Intellectual Property")}
                        </p>
                        <div className="pl-5 mt-5">
                            <li className="font-light">{t("The content, images, text, logos, and other media on this website are the property of Eastern Border Asset Co., Ltd. Copying, modifying, distributing, or using them for commercial purposes without written permission is prohibited.")}</li>
                            <li className="font-light">{t("All trademarks and service marks appearing on this website are the property of the Company or their respective owners.")}</li>
                        </div>
                    </div>

                    <hr className="mt-5 border-black" />

                    <div>
                        <p className="font-bold mt-5">
                            {t("5. Limitation of Liability")}
                        </p>
                        <div className="pl-5 mt-5">
                            <li className="font-light">{t("The Company does not guarantee that the content on this website is accurate, complete, or error-free.")}</li>
                            <li className="font-light">{t("The Company is not responsible for any damages resulting from use of the website or reliance on information on the website.")}</li>
                        </div>
                    </div>
                    
                    <hr className="mt-5 border-black" />

                    <div>
                        <p className="font-bold mt-5">
                            {t("6. Links to Third-Party Websites")}
                        </p>
                        <p className="mt-5 font-light">
                            {t("The website may contain links to other websites for the convenience of users. The company is not responsible for the content, accuracy, or safety of third-party websites.")}
                        </p>
                    </div>
                    
                    <hr className="mt-5 border-black" />

                    <div>
                        <p className="font-bold mt-5">
                            {t("7. Changes to Terms")}
                        </p>
                        <p className="mt-5 font-light">
                            {t("The Company reserves the right to amend or revise these Terms and Conditions at any time without prior notice. Your continued use of the website after any changes are made constitutes your acceptance of the new terms.")}
                        </p>
                    </div>
                    
                    <hr className="mt-5 border-black" />

                    <div>
                        <p className="font-bold mt-5">
                            {t("8. Governing Law")}
                        </p>
                        <p className="mt-5 font-light">
                            {t("These Terms and Conditions are governed by the laws of Thailand. In the event of any dispute, the Thai courts shall have exclusive jurisdiction.")}
                        </p>
                    </div>
                    
                    <hr className="mt-5 border-black" />

                    <div>
                        <p className="font-bold mt-5">
                            {t("9. Contact")}
                        </p>
                        <p className="mt-5 font-light">
                            {t("If you have any questions about these Terms and Conditions, please contact:")}
                        </p>
                        <div className="pl-5 mt-5">
                            <li className="font-light">{t("Email: easternborderasset@gmail.com")}</li>
                            <li className="font-light">{t("Phone: +66 (0) 82 107 4850")}</li>
                        </div>
                    </div>
                </div>
                <div className="sticky top-0 bg-white p-10 lg:px-30 lg:w-[30%] max-h-[50vh] mt-10">
                    <h1 className="text-xl">{t("Discover")}</h1>
                    <div className="px-5 mt-5">
                        <ul>
                            <li className="before:content-['>'] font-semibold hover:text-blue-800"><a href="http://localhost:5173/recommend?category=house"> {t("house")}</a></li>
                            <li className="before:content-['>'] font-semibold hover:text-blue-800"><a href="http://localhost:5173/recommend?category=condo"> {t("condo")}</a></li>
                            <li className="before:content-['>'] font-semibold hover:text-blue-800"><a href="http://localhost:5173/recommend?category=hotel"> {t("hotel")}</a></li>
                            <li className="before:content-['>'] font-semibold hover:text-blue-800"><a href="http://localhost:5173/recommend?category=apartment"> {t("apartment")}</a></li>
                            <li className="before:content-['>'] font-semibold hover:text-blue-800"><a href="http://localhost:5173/recommend?category=townhouse"> {t("townhouse")}</a></li>
                            <li className="before:content-['>'] font-semibold hover:text-blue-800"><a href="http://localhost:5173/recommend?category=villa"> {t("villa")}</a></li>
                            <li className="before:content-['>'] font-semibold hover:text-blue-800"><a href="http://localhost:5173/recommend?category=commercial-building"> {t("commercialbuilding")}</a></li>
                            <li className="before:content-['>'] font-semibold hover:text-blue-800"><a href="http://localhost:5173/recommend?category=land"> {t("land")}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TermsandConditions