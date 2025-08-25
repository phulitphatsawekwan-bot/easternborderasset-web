import React, { useState } from "react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const InquiryType = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "2c0c6fd5-3ce9-4a80-bf38-12d1d741f521");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      Swal.fire({
        title: "Oops!",
        text: "Message failed to send!",
        icon: "error"
      });
    }
  };

  return (
    <div className="md:flex gap-8 items-center justify-center w-100 h-[140vh] md:h-[100vh] bg-blue-900 bg-opacity-80">
      <div className="px-10 pt-[5rem] md:pb-[5rem]">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl lg:text-4xl text-white">
            {t("whychoose")}
          </h1>
        </div>
        <div className="mt-5">
          <p className="text-white text-sm lg:text-lg opacity-70 text-center">
            {t("whychoosedescription")}
          </p>
        </div>
      </div>

      <div className="flex w-[full] items-center justify-center my-20 lg:px-14">
        <div className="flex items-center justify-center bg-white rounded-md h-[35rem] w-[80vh] lg:w-[full] px-6 lg:px-[12rem]">
          <section className="contact">
            <form onSubmit={onSubmit} className="w-[50vh] lg:w-[full]">
              <h2 className="text-lg font-semibold">{t("inquirytype")}</h2>
              <div className="w-[60vh]">
                <select
                  className="w-[50vh] mt-2 border border-2 rounded-md py-2 px-3 border-gray-300"
                  name="message"
                  required
                >
                  <option value="">{t("select")}</option>
                  <option value="purchase">{t("purchase")}</option>
                  <option value="sell">{t("sell")}</option>
                  <option value="rent">{t("rent")}</option>
                </select>
              </div>
              
              <div className="mt-2 flex gap-2">
                <input
                  type="text"
                  className="field w-[24vh] rounded-md py-2 px-3 border-2 border-gray-300 placeholder-black"
                  placeholder={t("firstname")}
                  name="first_name"
                  required
                />
                <input
                  type="text"
                  className="field w-[25vh] rounded-md py-2 px-3 border-2 border-gray-300 placeholder-black"
                  placeholder={t("lastname")}
                  name="last_name"
                  required
                />
              </div>

              <div className="mt-2 flex gap-2 ">
                <input
                  name="email"
                  type="email"
                  className="email-address w-[50vh] rounded-md py-2 px-3 border-2 border-gray-300 placeholder-black"
                  placeholder={t("emailaddress")}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`mt-2 w-[50vh] py-2 rounded-md text-white font-semibold flex items-center justify-center gap-2 ${
                  loading ? "bg-gray-500" : "bg-blue-800 hover:bg-green-800"
                }`}
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                )}
                {loading ? t("sending") : t("submit")}
              </button>
            </form>
            
            <div className="mt-5">
              <h2 className="text-xl font-semibold my-2">
                {t("easterninquiry")}
              </h2>
              <p>
                {t("easterninquirydes")}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InquiryType;
