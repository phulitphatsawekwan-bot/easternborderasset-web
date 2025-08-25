import { useTranslation } from "react-i18next";

const About = () => {
  const { i18n, t } = useTranslation();
  return (
    <div>
      <div className='h-40 bg-cover bg-center bg-[url(@/assets/fhfhth.png)]'>
        <div className="items-center flex bg-blue-800 h-40 bg-opacity-70">
          <h1 className="text-2xl font-semibold px-[7vh] lg:px-[35vh] text-white">{t("aboutus")}</h1>
        </div>
      </div>
      <div>
        <div className="px-[7vh] lg:px-[35vh] py-14">
          <h1 className="text-2xl font-semibold text-blue-800">{t("What is Eastern Border Asset?")}</h1>
          <div className="mt-5 mb-5">
            <h2 className="text-xl mb-5 font-semibold">{t("Professional Land and Development Planning Approvals (Thailand-Wide)")}</h2>
            <p>
              {t("With over 25 years of experience, we specialise in securing land and development planning approvals for property owners, investors, and developers across Thailand. We turn your vision into reality by providing a complete, end-to-end planning service for private homes, condominiums, and village developments no matter the province.")}</p>
          </div>
        </div>
        <div className="px-[7vh] lg:px-[35vh] py-14">
          <div className="mb-10">
            <h2 className="text-xl mb-5 font-semibold">{t("Comprehensive, One-Stop Consultancy Service")}</h2>
            <p>
              {t("Our dedicated team supports you through every stage of the planning process, handling all practical, legal, and administrative requirements. From initial land surveys and engineering assessments to the preparation and submission of high-quality development applications, we deliver a seamless experience designed to achieve one goal: planning approval granted.")}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="px-[7vh] lg:px-[35vh] py-7">
          <div className="bg-blue-100 p-10 rounded-xl">
            <h2 className="text-xl font-semibold">{t("Our services include:")}</h2>
            <div className="mt-5">
              <li>{t("Identifying and evaluating suitable land plots")}</li>
              <li>{t("Professional land surveying")}</li>
              <li>{t("Land engineering and development planning")}</li>
              <li>{t("Expert advice on Thai planning law and regulatory compliance")}</li>
              <li>{t("Preparation and submission of fully certified planning applications")}</li>
            </div>
          </div>
        </div>
        <div className="px-[7vh] lg:px-[35vh] py-7">
          <div className="bg-blue-100 p-10 rounded-xl">
            <h2 className="text-xl font-semibold">{t("We work with both Thai and foreign clients, including:")}</h2>
            <div className="mt-5">
              <li>{t("Private landowners and individual investors building homes for themselves and their families")}</li>
              <li>{t("Small to medium-sized developers undertaking condominium and residential projects")}</li>
              <li>{t("Clients throughout Thailand – our services cover all Thai provinces")}</li>
              <li>{t("Individuals and businesses seeking expert guidance to improve the success rate of planning applications")}</li>
            </div>
          </div>
        </div>
        </div>
        <div className="px-[7vh] lg:px-[35vh] py-14">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-800">{t("Why Choose Eastern Border Asset?")}</h2>
            <p className="mt-5">
              {t("Our experienced team of licensed land surveyors, engineers, and legal consultants is committed to delivering a fast, reliable, and personalised service tailored to your specific needs. With in-depth knowledge of Thai planning regulations and civil law, we help streamline the approval process to give you the best possible outcome.")}
              <br />
              <br />
              {t("We speak both Thai and English fluently, ensuring smooth communication and expert support every step of the way.")}
              <br />
              <br />
              {t("If you're unsure how to navigate Thailand’s land and development planning system, we’re here to help.")}</p>
          </div>
        </div>
        <div className="px-[7vh] lg:px-[35vh] py-7">
          <h1 className="text-2xl font-semibold text-blue-800 mb-5">{t("Additional Services")}</h1>
          <div className="bg-blue-100 p-10 rounded-xl">
            <h2 className="text-xl font-semibold">{t("We also offer specialist consultancy in:")}</h2>
            <div className="mt-5">
              <li>{t("Thai civil law")}</li>
              <li>{t("Long-term residence applications in Thailand")}</li>
              <li>{t("Visa applications for overseas travel and international relocation")}</li>
            </div>
          </div>
        </div>
    </div>
  )
}
export default About
