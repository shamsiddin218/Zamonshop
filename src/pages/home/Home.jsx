import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from 'swiper/modules';
import { useTranslation } from "react-i18next";
import Firspage from "../Firstbox/Firspage";
import Secondpage from "../secondbox/Secondpage";
import Thirdpage from "../thirdbox/Thirdpage";
import Fourthpage from "../fourthbox/Fourthpage";
import Fifthpage from "../fifthbox/Fifthpage";
import Sixpage from "../sixbox/Sixpage";
import Seventhpage from "../sevenbox/Seventhpage";
import { NavLink } from "react-router-dom";

export default function Home({ handleAddToCart }) {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-[#09081b] text-gray-900 dark:text-gray-100 mt-[125px]">
  <Swiper
    className="max-w-[1200px] m-auto h-[400px] rounded-[20px] bg-blue-100 dark:bg-blue-950 mb-[24px]"
    modules={[Autoplay]}
    autoplay={{ delay: 4000 }}
    loop={true}
    spaceBetween={20}
    slidesPerView={1}
  >
    <SwiperSlide>
      <article className="w-full h-full flex  justify-between items-center p-[20px]">
        <article className="text-center md:text-left">
          <img
            className="w-[180px] xs:w-[200px] block dark:hidden mx-auto md:mx-0"
            src="/logos/zamonshop_logo_clean.png"
            alt="logo"
          />
          <img
            className="w-[180px] xs:w-[200px] hidden dark:block mx-auto md:mx-0"
            src="/logos/zamonshop_logo_light.png"
            alt=""
          />
          <h1 className="text-[28px] xs:text-[32px] sm:text-[36px] md:text-[42px] font-medium text-blue-950 dark:text-blue-300 mb-[20px]">
            {t('Homepage.title')}
          </h1>
          <p className="text-gray-900 dark:text-gray-200 text-[16px] xs:text-[18px] md:text-[20px] mb-[20px]">
            {t('Homepage.description')}
          </p>
          <NavLink to={'/all'}>
            <button className="py-[10px] px-[20px] border-blue-400 border-[1px] text-blue-900 dark:text-white dark:border-blue-300 rounded-md transition-all duration-100 hover:bg-blue-600 hover:text-white">
              {t('Homepage.button')}
            </button>
          </NavLink>
        </article>
        <article className="mt-[20px] md:mt-0">
          <img className="w-[300px] lv:hidden xs:hidden sm:block sm:w-[500px] md:w-[750px]" src="/images/kredit.png" alt="kredit" />
        </article>
      </article>
    </SwiperSlide>

    <SwiperSlide>
      <article className="w-full flex flex-col md:flex-row items-center h-full p-[20px] justify-between">
        <article className="w-full md:w-[600px] text-center md:text-left mb-[20px] md:mb-0">
          <h2 className="text-[28px] xs:text-[32px] sm:text-[36px] md:text-[42px] font-bold text-blue-700 dark:text-blue-300 mb-[30px]">
            {t('Homepage.CardTitle')}
          </h2>
          <NavLink to={'/promogame'}>
            <button className="bg-blue-600 dark:bg-blue-500 text-white font-medium text-[16px] sm:text-[17px] py-[10px] px-[20px] rounded-md">
              {t('Homepage.Cardbutton')}
            </button>
          </NavLink>
        </article>
        <article>
          <img className="w-[300px] lv:hidden xs:hidden sm:block sm:w-[400px] md:w-[500px]" src="/images/promonew.png" alt="card" />
        </article>
      </article>
    </SwiperSlide>

    <SwiperSlide>
      <article className="w-full bg-gray-200 dark:bg-slate-800 h-full flex flex-col md:flex-row justify-between items-center p-[20px]">
        <article className="text-center md:text-left mb-[20px] md:mb-0 xs:mt-[60px]">
          <h2 className="text-[28px] xs:text-[32px] sm:text-[36px] md:text-[42px] font-medium text-gray-900 dark:text-white mb-[30px]">
            {t('Homepage.phonetitle')}
          </h2>
          <NavLink to={'/phone'}>
            <button className="py-[10px] px-[20px] bg-white dark:bg-slate-700 dark:text-white rounded-md shadow-md">
              {t('Homepage.phonebutton')}
            </button>
          </NavLink>
        </article>
        <article>
          <img className="w-[300px] lv:hidden xs:hidden sm:block sm:w-[600px] md:w-[800px] lg:w-[1000px]" src="/images/phonebg.png" alt="phone" />
        </article>
      </article>
    </SwiperSlide>

    <SwiperSlide>
      <article className="w-full h-full bg-black flex flex-col md:flex-row justify-between p-[20px]">
        <article className="flex flex-col justify-start  text-center md:text-left mb-[20px] md:mb-0">
          <h2 className="text-white text-[28px] xs:text-[32px] sm:text-[36px] md:text-[42px] font-medium mb-[30px] xs:mt-[60px]">
            {t('Homepage.airtitle')}
          </h2>
          <NavLink to={'/air'}>
            <button className="border-[1px] rounded-md py-[10px] px-[20px] text-white font-medium border-white hover:bg-white hover:text-black transition-all duration-150">
              {t('Homepage.airbutton')}
            </button>
          </NavLink>
        </article>
        <article>
          <img className="w-[300px] lv:hidden xs:hidden sm:block sm:w-[500px] md:w-[700px] lg:w-[800px]" src="/images/konditsioner.png" alt="air" />
        </article>
      </article>
    </SwiperSlide>
  </Swiper>

  <Firspage handleAddToCart={handleAddToCart} />
  <Secondpage handleAddToCart={handleAddToCart} />
  <Thirdpage handleAddToCart={handleAddToCart} />
  <Sixpage handleAddToCart={handleAddToCart} />
  <Fourthpage handleAddToCart={handleAddToCart} />
  <Fifthpage handleAddToCart={handleAddToCart} />
  <Seventhpage handleAddToCart={handleAddToCart} />
</div>

  );
}
