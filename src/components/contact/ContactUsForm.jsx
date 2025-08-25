import React, { useState } from "react";
import Swal from "sweetalert2";
import MyMap from "../map/MyMap";
import { useTranslation } from "react-i18next";
import elleline from "@/assets/ELLE1ACD5E90-CD14-47D5-BE34-FFDA0D86BBAF.jpg";
import wanitline from "@/assets/WANITS__69206043.jpg";
import facebookicon from "@/assets/square-facebook-brands-solid-full.svg";
import igicon from "@/assets/square-instagram-brands-solid-full.svg";

const ContactUsForm = () => {
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
        <div>
            <div className="md:flex justify-center gap-[7vh]">
                <div className="md:flex gap-8 items-center justify-center h-[auto] w-[55vh] sm:w-[75vh] sm:mt-8 p-5 rounded-xl" style={{ backgroundColor: "#f0f0f0" }}>
                    <div className="flex justify-center my-10 px-10">
                        <div className="flex justify-center rounded-md h-[auto] px-[2rem]">
                            <section className="contact">
                                <p className="py-5">{t("If you have any questions about buying, selling, or renting, please send us a message using the form below. We will get back to you as soon as possible.")}</p>
                                <form onSubmit={onSubmit} className="w-[45vh] md:w-[60vh]">
                                    <h2 className="text-lg font-semibold">{t("Send Message")}</h2>

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
                                            required
                                        >
                                        </textarea>
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
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="md:w-[50vh] h-[35vh]  rounded-xl p-8 mt-8" style={{ backgroundColor: "#f0f0f0" }}>
                        <p>{t("Ready to take the next step? Contact us today to discuss your project and how we can help you achieve your land planning goals—efficiently and professionally.")}</p>

                        <h2 className="font-semibold my-5">Email: easternborderasset@gmail.com</h2>
                        <h2 className="font-semibold ">+66 (0) 82 107 4850</h2>
                    </div>
                    <div className="md:w-[50vh] h-[32vh] flex justify-center rounded-xl py-5 px-8 mt-8" style={{ backgroundColor: "#f0f0f0" }}>
                        <div >
                            <h2 className="font-semibold my-2">Line:</h2>
                            <div className="flex gap-8">
                                <div>
                                    <a
                                        href="https://line.me/ti/p/HY9qNxODAQ"
                                        target="_blank"
                                        className="items-center gap-2 text-purple-600 hover:text-purple-800"
                                    >
                                        <img src={elleline} className="ml-4 " width={100} />
                                        <p className="text-center">{t("Scan or Click here!")}</p>
                                    </a>
                                    <p className="text-center w-full">Elle</p>
                                </div>
                                <div>
                                    <a
                                        href="https://line.me/ti/p/zwD7yxJdLz"
                                        target="_blank"
                                        className="items-center gap-2 text-purple-600 hover:text-purple-800"
                                    >
                                        <img src={wanitline} className="ml-4" width={100} />
                                        <p>{t("Scan or Click here!")}</p>
                                    </a>
                                    <p className="text-center w-full">Wanit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-5">
                        <div className="h-auto rounded-xl py-2 px-2 mt-8" style={{ backgroundColor: "#f0f0f0" }}>
                            <a href="https://web.facebook.com/profile.php?id=100082915816044" target="_blank">
                                <img src={facebookicon} width={60} />
                            </a>
                        </div>
                        <div className="h-auto rounded-xl py-2 px-2 mt-8" style={{ backgroundColor: "#f0f0f0" }}>
                            <a href="https://www.instagram.com/easternborder.asset/" target="_blank">
                                <img src={igicon} width={60} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <MyMap />
            </div>
        </div>
    );
};

export default ContactUsForm;
