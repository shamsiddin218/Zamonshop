import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Question from "./Question";

export default function Caliingpage() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      {/* Banner */}
      <div className="w-full h-[700px] bg-[url(/images/bgcontact2.jpg)] bg-center bg-cover bg-no-repeat flex justify-center items-center dark:bg-black">
        <h1
          className="text-[72px] md:text-[92px] text-white font-extrabold text-center"
          data-aos="fade-down"
        >
          Biz bilan <span className="text-[#1b1b82] ">bog'lanish</span>
        </h1>
      </div>

      {/* Contact Info Section */}
      <section className="w-full py-20 px-4 md:px-20 bg-gray-100 dark:bg-[#0e0e1b]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Phone */}
          <div
            className="bg-white cursor-pointer dark:bg-[#1a1a2e] p-10 rounded-3xl shadow-xl border border-blue-200 dark:border-blue-800 hover:scale-105 transition-all duration-500"
            data-aos="fade-up" 
          >
            <Phone className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              Telefon raqam
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              +998 88 386 69 09
            </p>
          </div>

          {/* Email */}
          <div
            className="bg-white cursor-pointer dark:bg-[#1a1a2e] p-10 rounded-3xl shadow-xl border border-blue-200 dark:border-blue-800 hover:scale-105 transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Mail className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              Email manzil
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              sirojiddins881@gmail.com
            </p>
          </div>

          {/* Address */}
          <div
            className="bg-white cursor-pointer dark:bg-[#1a1a2e] p-10 rounded-3xl shadow-xl border border-blue-200 dark:border-blue-800 hover:scale-105 transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <MapPin className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              Manzilimiz
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Qashqadaryo viloyati, Kitob tumani, Ulug'bek mahallasi, Paxtakor ko‘chasi, 1A-uy
            </p>
          </div>
        </div>
      </section>

      {/* Extra Section */}
      <section className="bg-white dark:bg-[#111827] py-20 px-6 md:px-32">
        <div
          className="text-center max-w-4xl mx-auto"
          data-aos="zoom-in-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Har doim siz bilan aloqa qilishga tayyormiz
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Agar sizda savollar bo‘lsa, takliflaringiz bo‘lsa yoki biz bilan
            hamkorlik qilmoqchi bo‘lsangiz, biz bilan bog‘laning. Sizga tez orada javob beramiz!
          </p>
        </div>
      </section>
      <Question/>
    </>
  );
}