import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[100vh] bg-gray-100 py-20 lg:px-[20vh] px-10">
      <div>
        <h1 className="text-3xl font-semibold">{t("privacypolicy")}</h1>
        <p className="text-gray-500">{t("Last updated: 9 August 2025")}</p>
      </div>
      <div className="bg-white px-20 lg:px-30 min-h-[100vh] mt-10 py-20">
        <div>
          <p className="font-bold">
            {t("Introduction")}
          </p>
          <p className="mt-5 font-light">
            {t("Eastern Border Asset Company Limited We value your privacy and protect your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit easternborderasset.com. By using our website, you consent to the collection and use of your information in accordance with this policy.")}
          </p>
        </div>

        <div className="mt-10">
          <p className="font-bold">
            {t("Information We Collect")}
          </p>
          <p className="mt-5 font-light">
            {t("We may collect and process the following types of data:")}
          </p>
          <div className="pl-5 mt-5">
              <li className="font-light"><span className="font-semibold">{t("Personal Information:")}</span> {t("Your first and last name, email address, phone number, and other details you provide through our contact form.")}</li>
              <li className="font-light"><span className="font-semibold">{t("Usage Information:")}</span> {t("Information collected automatically, such as your IP address, browser type, pages visited, time spent on those pages, and other diagnostic data.")}</li>
          </div>
        </div>

        <div className="mt-10">
          <p className="font-bold">
            {t("Use of Your Information")}
          </p>
          <p className="mt-5 font-light">
            {t("For the following purposes:")}
          </p>
          <div className="pl-5 mt-5">
              <li className="font-light">{t("To provide and develop our website")}</li>
              <li className="font-light">{t("To communicate and contact you")}</li>
              <li className="font-light">{t("To improve our website's services and functionality")}</li>
              <li className="font-light">{t("To monitor and analyze usage and trends")}</li>
              <li className="font-light">{t("To comply with legal obligations")}</li>
          </div>
        </div>

        <div className="mt-10">
          <p className="font-bold">
            {t("Sharing Your Information")}
          </p>
          <p className="mt-5 font-light">
            {t("We do not sell or exchange your personal information. We may share your information:")}
          </p>
          <div className="pl-5 mt-5">
              <li className="font-light">{t("With trusted third-party service providers who assist in operating our website, conducting our business, or providing services to you.")}</li>
              <li className="font-light">{t("To comply with applicable laws or respond to valid legal process.")}</li>
              <li className="font-light">{t("To protect the rights, property, or safety of our company and others.")}</li>
          </div>
        </div>

        <div className="mt-10">
          <p className="font-bold">
            {t("Cookies")}
          </p>
          <p className="mt-5 font-light">
            {t("We use cookies and similar tracking technologies to enhance your experience. Cookies help us understand user preferences, improve site navigation, and analyze site usage. You can manage your cookie settings through your browser settings.")}
          </p>
        </div>

        <div className="mt-10">
          <p className="font-bold">
            {t("Data Security")}
          </p>
          <p className="mt-5 font-light">
            {t("We use appropriate security measures to protect your personal information. However, no online platform is completely secure, and we cannot guarantee its absolute security.")}
          </p>
        </div>

        <div className="mt-10">
          <p className="font-bold">
            {t("Third-Party Links")}
          </p>
          <p className="mt-5 font-light">
            {t("Our website may contain links to other websites. We are not responsible for the privacy practices or content of these third-party websites. We encourage you to review the privacy policies of any third-party websites you visit.")}
          </p>
        </div>

        <div className="mt-10">
          <p className="font-bold">
            {t("Your Rights")}
          </p>
          <p className="mt-5 font-light">
            {t("Depending on your location, you may have certain rights regarding your personal data, including:")}
          </p>
           <div className="pl-5 mt-5">
              <li className="font-light">{t("Access, correct, or delete your data")}</li>
              <li className="font-light">{t("Object to or restrict the processing of your data")}</li>
              <li className="font-light">{t("Withdraw consent at any time")}</li>
          </div>
          <p className="mt-5 font-light">{t("To exercise these rights, please contact us using the details provided below.")}</p>
        </div>

        <div className="mt-10">
          <p className="font-bold">
            {t("Data Retention Period")}
          </p>
          <p className="mt-5 font-light">
            {t("We will retain your personal data for as long as necessary for the purposes set out in this policy, unless required by law to retain it for a longer period.")}
          </p>
        </div>

        <div className="mt-10">
          <p className="font-bold">
            {t("International Data Transfers")}
          </p>
          <p className="mt-5 font-light">
            {t("If we need to transfer your data to another country, we will ensure that the destination country has adequate data protection measures in place.")}
          </p>
        </div>

        <div className="mt-10">
          <p className="font-bold">
            {t("Minority Policy")}
          </p>
          <p className="mt-5 font-light">
            {t("Our website is not intended for use by anyone under the age of 20. If we discover that we have collected information from a minor without parental consent, we will promptly delete the information.")}
          </p>
        </div>

        <div className="mt-10">
          <p className="font-bold">
            {t("Policy Updates")}
          </p>
          <p className="mt-5 font-light">
            {t("We reserve the right to update or change this Policy at any time and will post it on our website with a clear effective date.")}
          </p>
        </div>
        
        <div className="mt-10">
          <p className="font-bold">
            {t("Contact Us")}
          </p>
          <p className="mt-5 font-light">
            {t("Ready to take the next step? Contact us today to discuss your project and how we can help you achieve your estate planning goals efficiently and professionally.")}
          </p>
          <p className="mt-5 font-light">
            {t("For any questions about this privacy policy, please contact us at:")}
          </p>
          <div className="pl-5 mt-5">
              <li className="font-light"><span className="font-semibold">{t("By Email:")}</span> {t("easternborderasset@gmail.com")}</li>
              <li className="font-light"><span className="font-semibold">{t("By Phone:")}</span> {t("+66 (0) 82 107 4850")}</li>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PrivacyPolicy