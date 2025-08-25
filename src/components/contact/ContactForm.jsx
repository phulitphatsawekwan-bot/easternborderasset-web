import React, { useState } from "react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const ContactForm = ({ propertyTitle }) => {
  const { i18n, t } = useTranslation();
  // console.log("Received propertyTitle:", propertyTitle);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(""); // เก็บค่าที่เลือก
  const [otherValue, setOtherValue] = useState(""); // เก็บค่าที่พิมพ์เมื่อเลือก Other

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "2c0c6fd5-3ce9-4a80-bf38-12d1d741f521");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      event.target.reset();
      setSelected("");
      setOtherValue("");
    } else {
      console.log("Error", data);
      Swal.fire({
        title: "Oops!",
        text: "Message failed to send!",
        icon: "error",
      });
    }
  };

  return (
    <div className="md:flex gap-8 items-center justify-center h-[90vh] sm:w-[110vh] sm:mt-8 p-5 rounded-xl" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="flex justify-center my-10 px-10">
        <div className="flex justify-center rounded-md h-[auto] px-[2rem]">
          <section className="contact">
            <form onSubmit={onSubmit} className="w-[45vh] md:w-[90vh]">
              <h2 className="text-lg font-semibold">{t("Get Assistant")}</h2>

              {/* Name */}
              <div className="mt-2 flex gap-2">
                <input
                  type="text"
                  className="field rounded-md w-full py-2 px-3 border-2 border-gray-300 placeholder-black"
                  placeholder={t("firstname")}
                  name="first_name"
                  required
                />
                <input
                  type="text"
                  className="field rounded-md w-full py-2 px-3 border-2 border-gray-300 placeholder-black"
                  placeholder={t("lastname")}
                  name="last_name"
                  required
                />
              </div>

              {/* Phone */}
              <div className="mt-2 flex gap-2">
                <input
                  name="phone_number"
                  type="text"
                  className="phone_number w-[90vh] rounded-md py-2 px-3 border-2 border-gray-300 placeholder-black"
                  placeholder={t("Phone")}
                  required
                />
              </div>

              {/* Email */}
              <div className="mt-2 flex gap-2">
                <input
                  name="email"
                  type="email"
                  className="email-address w-[90vh] rounded-md py-2 px-3 border-2 border-gray-300 placeholder-black"
                  placeholder={t("emailaddress")}
                  required
                />
              </div>

              {/* Description */}
              <div>
                <textarea
                  name="description"
                  type="text"
                  className="description w-[90vh text-ellipsis w-full h-[15vh] rounded-md mt-2 py-2 px-3 border-2 border-gray-300 placeholder-black"
                  placeholder={t("description")}
                  defaultValue={`Hello, I am interested in ${propertyTitle || ""}`}
                  required
                >
                </textarea>
              </div>

              {/* Select + Other */}
              <div>
                <select
                  className="mt-1 border border-2 rounded-md py-2 px-3 w-full border-gray-300"
                  name="message"
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  required
                >
                  <option value="">{t("select")}</option>
                  <option value="I'm a tenant">{t("I'm a tenant")}</option>
                  <option value="I'm a buyer">{t("I'm a buyer")}</option>
                  <option value="I'm a seller">{t("I'm a seller")}</option>
                  <option value="I'm an agent">{t("I'm an agent")}</option>
                  <option value="Other">{t("Other")}</option>
                </select>

                {selected === "Other" && (
                  <input
                    type="text"
                    placeholder={t("Please specify...")}
                    name="other_message"
                    value={otherValue}
                    onChange={(e) => setOtherValue(e.target.value)}
                    className="mt-2 w-full border border-gray-300 rounded-md p-2"
                  />
                )}
              </div>

              <p className="my-4 font-semibold">
                {t("By submitting this form I agree to Terms of Use")}
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`mt-2 w-full py-2 rounded-md text-white font-semibold flex items-center justify-center gap-2 ${loading
                    ? "bg-gray-500"
                    : "bg-blue-800 hover:bg-green-800"
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
                {loading ? t("Sending...") : t("SEND MESSAGE")}
              </button>
              <a href="tel:0821074850" className="mt-2 border border-black w-full py-2 rounded-md text-blue-800 font-semibold flex items-center justify-center gap-2">{t("CALL")}</a>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
