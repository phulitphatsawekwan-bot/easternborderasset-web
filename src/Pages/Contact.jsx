import ContactUsForm from "@/components/contact/ContactUsForm"
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { i18n, t } = useTranslation();
  return (
    <div>
      <div className='h-40 bg-cover bg-center bg-[url(@/assets/fvbffggjgj.png)]'>
        <div className="items-center flex bg-blue-800 h-40 bg-opacity-70">
          <h1 className="text-2xl font-semibold px-[7vh] lg:px-[35vh] text-white">{t("Contact Us")}</h1>
        </div>
      </div>
      <div className="flex items-center justify-center h-[auto] py-[10vh] px-[20vh]">
          <ContactUsForm />

      </div>
    </div>
  )
}
export default Contact
