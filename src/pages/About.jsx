  import React, { useEffect, useState } from "react";
  import { FaHandHoldingUsd } from "react-icons/fa";
  import { FaBusinessTime } from "react-icons/fa6";
  import { FaUserTie } from "react-icons/fa6";
  import { FaTruckFast } from "react-icons/fa6";
  import { MdOutlineRefresh } from "react-icons/md";
  import { LuChartColumnIncreasing } from "react-icons/lu";
  import { SiShopify } from "react-icons/si";
  import { GrUserWorker } from "react-icons/gr";
  import Marquee from 'react-fast-marquee';
  import Question from "./Question";
  import JamoaData from "../components/Jamoa"; // yoki qayerda turgan bo‘lsa
  export default function About() {
  const [hamkorlar, setHamkorlar] = useState([]);
  const [jamoa, setJamoa] = useState([]);

  useEffect(() => {
    // JSON o‘rniga Jamoa.jsx dan to‘g‘ridan-to‘g‘ri olish
    setJamoa(JamoaData.jamoa);
    setHamkorlar(JamoaData.hamkor);
  }, []);
  
    
    return (
      <div>
        <div className="w-full bg-[url(https://www.ibex.co.th/wp-content/uploads/2024/02/lilly-rum-15YTRXKuJ14-unsplash-scaled-1-1.webp)] bg-no-repeat bg-center bg-cover mb-[80px] mt-[90px]">
    <div className="max-w-[1200px] m-auto py-[40px] px-[20px] md:py-[60px]">
      <article className="flex justify-start items-center">
        <img
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="w-[300px] md:w-[400px] lg:w-[600px] mb-[40px] md:mb-[60px] lg:mb-[70px] "
          src="/logos/zamonshop_logo_light.png"
          alt="Zamonshop logotipi"
        />
      </article>

      <article
        data-aos="fade-right"
        className="w-full md:w-[90%] lg:w-[600px]"
      >
        <h2 className="text-white text-[28px] md:text-[36px] lg:text-[42px] mb-[20px] md:mb-[30px] font-semibold">
          Zamonshop haqida:
        </h2>

        <p className="text-white text-[16px] md:text-[18px] mb-[16px] md:mb-[24px] font-medium leading-relaxed">
          Zamonshop — bu zamonaviy texnologiyalar bilan jihozlangan, ishonchli va qulay onlayn xarid qilish platformasi. Biz sizga kundalik hayotda zarur bo‘lgan eng so‘nggi smartfonlar, noutbuklar, gadjetlar va boshqa turdagi texnika mahsulotlarini arzon narxlarda taqdim etamiz.
        </p>

        <p className="text-white text-[16px] md:text-[18px] font-medium leading-relaxed">
          Zamonshop — bu 2025-yilning boshlarida ishga tushirilgan zamonaviy elektron do‘kon bo‘lib, foydalanuvchilarga telefonlar, noutbuklar, gadjetlar va boshqa turdagi texnikalarni qulay va ishonchli tarzda xarid qilish imkonini beradi. Loyiha yosh dasturchi{" "}
          <span className="text-blue-500 font-extrabold">Shamsiddin Sirojiddinov</span> tomonidan ishlab chiqilgan bo‘lib, mijozlarga qulaylik, tezkor xizmat va zamonaviy interfeysni taqdim etish maqsadida yaratilgan.
        </p>
      </article>
    </div>
  </div>

      <div className="max-w-[1200px] m-auto mb-[70px] px-[15px]">
    <h2
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="400"
      className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-medium text-center mb-[30px] dark:text-white"
    >
      Bizning <span className="text-[blue] dark:text-blue-400">Maqsadlarimiz</span>
    </h2>

    <div
      data-aos="fade-up"
      className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] sm:gap-[30px] md:gap-y-[40px]"
    >
      {[
        {
          icon: <FaHandHoldingUsd />,
          text: "Mahsulotlarni bozordagi eng yaxshi narxlarda taklif etish",
        },
        {
          icon: <FaBusinessTime />,
          text: "Har bir foydalanuvchining vaqti va ishonchini qadrlash",
        },
        {
          icon: <FaUserTie />,
          text: "Har bir mijoz bilan alohida yondashuv asosida ishlash",
        },
        {
          icon: <FaTruckFast />,
          text: "Tezkor va ishonchli yetkazib berish xizmatini yo‘lga qo‘yish",
        },
        {
          icon: <GrUserWorker />,
          text: "Mahalliy ishlab chiqaruvchilarni qo‘llab-quvvatlash va ularning mahsulotlarini ommalashtirish",
        },
        {
          icon: <MdOutlineRefresh />,
          text: "Doimiy ravishda yangilanish va foydalanuvchilar ehtiyojlariga moslashish",
        },
        {
          icon: <LuChartColumnIncreasing />,
          text: "Siz bilan hamkorlikda o‘sish va rivojlanish",
        },
        {
          icon: <SiShopify />,
          text: "Xarid qilishni oson va yoqimli qilish",
        },
      ].map((item, index) => (
        <article
          key={index}
          className="w-full max-w-[300px] mx-auto border border-gray-300 dark:border-gray-700 
          bg-white dark:bg-[#1f2937] rounded-xl p-[20px] flex flex-col items-center 
          justify-center cursor-pointer transition-all duration-150 hover:shadow-md 
          hover:border-blue-500 dark:hover:border-blue-400"
        >
          <article
            className="w-[50px] h-[50px] rounded-full bg-[blue] text-white text-[30px] 
            flex justify-center items-center mb-[24px]"
          >
            {item.icon}
          </article>
          <p className="text-[#383838] dark:text-gray-200 text-[16px] md:text-[18px] lg:text-[20px] text-center leading-[1.4]">
            {item.text}
          </p>
        </article>
      ))}
    </div>
  </div>

  <div className="max-w-[1200px] m-auto mb-[50px]">
    <h2
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="400"
      className="text-[32px] md:text-[36px] lg:text-[42px] font-medium text-center mb-[30px] dark:text-white"
    >
      Bizning <span className="text-[blue] dark:text-blue-400">Jamoa</span>
    </h2>

    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-[30px] sm:gap-y-[40px] gap-x-[15px] sm:gap-x-[20px]">
    {jamoa.map(({ name, img, desc, tall }, index) => (
      <article
        key={index}
        data-aos="fade-down-left"
        data-aos-easing="linear"
        data-aos-duration="400"
        className="w-full sm:w-full md:w-[570px] border dark:border-gray-600 flex flex-col md:flex-row items-center justify-between p-[10px] rounded-md group cursor-pointer"
      >
        <article
          className={`w-full xs:w-[280px] sm:w-[240px] md:w-[190px] ${tall ? "h-[253px]" : ""} bg-red-100 dark:bg-gray-700 rounded-md overflow-hidden mb-[10px] md:mb-0`}
        >
          <img
            className={`w-full ${tall ? "h-full" : ""} object-cover transition-all duration-200 grayscale group-hover:grayscale-0`}
            src={img}
            alt={name}
          />
        </article>
        <article className="w-full md:w-[300px]">
          <h2 className="text-[16px] xs:text-[17px] sm:text-[18px] md:text-[20px] font-medium mb-[10px] dark:text-white">
            {name}
          </h2>
          <p className="text-[14px] xs:text-[15px] sm:text-[15px] md:text-[16px] line-clamp-6 dark:text-gray-300">
            {desc}
          </p>
        </article>
      </article>
    ))}
  </div>

  </div>

  <div className="mb-[50px] px-4">
    <h2
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="400"
      className="text-[28px] xs:text-[32px] sm:text-[36px] md:text-[42px] font-medium text-center mb-[30px] dark:text-white"
    >
      Bizning <span className="text-[blue] dark:text-blue-400">Hamkorlar</span>
    </h2>

    <article className="max-w-[1430px] m-auto relative">
      {/* Left & Right overlays (faqat md dan katta ekranlarda ko‘rsatiladi) */}
      <div
        id="dds"
        className="hidden md:block w-[70px] md:w-[100px] h-[300px] md:h-[400px] bg-white dark:bg-[#080e1b] z-10 absolute top-0 left-0"
      ></div>
      <div
        id="zamon"
        className="hidden md:block w-[70px] md:w-[100px] h-[300px] md:h-[400px] bg-white dark:bg-[#080e1b] z-10 absolute top-0 right-0"
      ></div>

      {/* First Marquee */}
      <Marquee
        direction="left"
        speed={30}
        gradient={false}
        className="mb-[20px]"
        pauseOnHover
      >
        <div className="flex gap-[12px] sm:gap-[15px] md:gap-[17px] px-1">
          {hamkorlar.map((hamkor, index) => (
  <a
    key={index}
    href={hamkor.link}
    target="_blank"
    rel="noopener noreferrer"
    className="min-w-[130px] sm:min-w-[160px] md:w-[187px] h-[120px] sm:h-[150px] md:h-[170px] 
      rounded-2xl flex justify-center items-center bg-[#80808027] dark:bg-[#374151] 
      transition-all duration-150 cursor-pointer hover:border hover:border-[blue] 
      dark:hover:border-blue-400"
  >
    <img
      className={hamkor.img.includes("zlight") ? "w-[100px] sm:w-[130px] md:w-[150px]" : "w-full px-2"}
      src={hamkor.img}
      alt=""
    />
  </a>
))}

        </div>
      </Marquee>

      {/* Second Marquee */}
      <Marquee
        direction="right"
        speed={30}
        gradient={false}
        pauseOnHover
      >
        <div className="flex gap-[12px] sm:gap-[15px] md:gap-[17px] px-1">
          {hamkorlar.map((hamkor, index) => (
  <a
    key={index}
    href={hamkor.link}
    target="_blank"
    rel="noopener noreferrer"
    className="min-w-[130px] sm:min-w-[160px] md:w-[187px] h-[120px] sm:h-[150px] md:h-[170px] 
      rounded-2xl flex justify-center items-center bg-[#80808027] dark:bg-[#374151] 
      transition-all duration-150 cursor-pointer hover:border hover:border-[blue] 
      dark:hover:border-blue-400"
  >
    <img
      className={hamkor.img.includes("zlight") ? "w-[100px] sm:w-[130px] md:w-[150px]" : "w-full px-2"}
      src={hamkor.img}
      alt=""
    />
  </a>
))}

        </div>
      </Marquee>
    </article>
  </div>


        <Question/>
      </div>
    );
  }
