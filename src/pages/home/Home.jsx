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
export default function Home() {
  const {t} = useTranslation()
  return (
    <div>
      <Swiper
        className=" max-w-[1200px] m-auto h-[400px] rounded-[20px] bg-blue-100 mb-[24px]"
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide>
          <article className=" w-full h-full flex justify-between items-center p-[20px]">
            <article>
              <img className=" w-[200px]" src="/logos/zamonshop_logo_clean.png" alt="" />
              <h1 className="text-[42px] font-medium text-blue-950 mb-[20px]">
                {t('Homepage.title')}
              </h1>
              <p className=" text-gray-900 text-[20px] mb-[20px]">
                {t('Homepage.description')}
              </p>
              <NavLink to={'/all'}>
              <button className=" py-[10px] px-[20px] border-blue-400 border-[1px] text-blue-900 rounded-md transition-all duration-100 hover:bg-[blue] hover:text-white">
                {t('Homepage.button')}
              </button>
              </NavLink>
            </article>
            <article>
              <img className=" w-[750px]" src="/images/kredit.png " alt="" />
            </article>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className=" w-full flex items-center h-full p-[20px]">
            <article>
              <h2  className=" text-[42px] font-bold text-[blue] mb-[30px]">{t('Homepage.CardTitle')}</h2>
              <button className=" bg-[blue] text-white font-medium text-[17px] py-[10px] px-[20px] rounded-md">{t('Homepage.Cardbutton')}</button>
            </article>
            <article className="p-[50px]">
              <img className=" w-[600px]" src="/images/creditcard.png" alt="" />
            </article>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className=" w-full bg-gray-200 h-full flex justify-between items-center p-[20px]">
            <article>
            <h2 className=" text-[42px] font-medium mb-[30px]">{t('Homepage.phonetitle')}</h2>
            <NavLink to={'/phone'}><button className=" py-[10px] px-[20px] bg-white rounded-md shadow-md">{t('Homepage.phonebutton')}</button></NavLink>
            
            </article>
            <article>
              <img className=" w-[1000px]" src="/images/phonebg.png" alt="" />
            </article>
          </article>

        </SwiperSlide>
        <SwiperSlide>
          <article className=" w-full h-full bg-black flex justify-between p-[20px]">
            <article className=" flex flex-col justify-center items-start">
              <h2 className="text-white text-[42px] font-medium mb-[30px]">{t('Homepage.airtitle')}</h2>
              <NavLink to={'/air'}><button className=" border-[1px] rounded-md py-[10px] px-[20px] text-white font-medium ">{t('Homepage.airbutton')}</button> </NavLink>
              
            </article>
            <article>
              <img className=" w-[800px]" src="/images/konditsioner.png" alt="" />
            </article>
          </article>
        </SwiperSlide>
      </Swiper>
      <Firspage/>
      <Secondpage/>
      <Thirdpage/>
      <Sixpage/>
      <Fourthpage/>
      <Fifthpage/>
      <Seventhpage/>
    </div>
  );
}
