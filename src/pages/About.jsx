import React from "react";
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
export default function About() {
  return (
    <div>
      <div className=" w-full bg-[url(https://www.ibex.co.th/wp-content/uploads/2024/02/lilly-rum-15YTRXKuJ14-unsplash-scaled-1-1.webp)] bg-no-repeat bg-center bg-cover mb-[80px]">
        <div className=" max-w-[1200px] m-auto py-[60px]">
          <article className=" flex justify-center items-center">
            <img
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
              className=" w-[600px] mb-[70px] "
              src="/logos/zamonshop_logo_light.png"
              alt=""
            />
          </article>
          <article data-aos="fade-right" className="w-[600px] ">
            <h2 className="text-[white] text-[42px] mb-[30px]">
              Zamonshop haqida:
            </h2>
            <p className=" text-[white] mb-[24px] font-medium">
              Zamonshop — bu zamonaviy texnologiyalar bilan jihozlangan,
              ishonchli va qulay onlayn xarid qilish platformasi. Biz sizga
              kundalik hayotda zarur bo‘lgan eng so‘nggi smartfonlar,
              noutbuklar, gadjetlar va boshqa turdagi texnika mahsulotlarini
              arzon narxlarda taqdim etamiz.
            </p>
            <p className=" text-white font-medium">
              Zamonshop — bu 2025-yilning boshlarida ishga tushirilgan zamonaviy
              elektron do‘kon bo‘lib, foydalanuvchilarga telefonlar, noutbuklar,
              gadjetlar va boshqa turdagi texnikalarni qulay va ishonchli tarzda
              xarid qilish imkonini beradi. Loyiha yosh dasturchi{" "}
              <span className=" text-[blue] font-extrabold ">Shamsiddin Sirojiddinov</span> tomonidan ishlab chiqilgan bo‘lib, mijozlarga qulaylik, tezkor
              xizmat va zamonaviy interfeysni taqdim etish maqsadida yaratilgan.
            </p>
          </article>
        </div>
      </div>
      <div className=" max-w-[1200px] m-auto mb-[70px]">
        <h2 data-aos="fade-right" data-aos-easing='linear' data-aos-duration='400' className=" text-[42px] font-medium text-center mb-[30px]">
          Bizning <span className=" text-[blue]">Maqsadlarimiz</span>
        </h2>
        <div data-aos="fade-up" className="w-full grid grid-cols-4 gap-y-[40px] ">
          <article className=" w-[230px] border border-gray-300 rounded-xl p-[20px] flex flex-col items-center justify-center cursor-pointer transition-all duration-150 hover:shadow-md">
          <article className=" w-[50px] h-[50px] rounded-full bg-[blue] text-[white] text-[30px] flex justify-center items-center mb-[24px]"><FaHandHoldingUsd/></article>
          <p className=" text-[#383838] text-[20px] text-center">Mahsulotlarni bozordagi eng yaxshi narxlarda taklif etish</p>
        </article>
        <article className=" w-[230px] border border-gray-300 rounded-xl p-[20px] flex flex-col items-center justify-center cursor-pointer transition-all duration-150 hover:shadow-md">
          <article className=" w-[50px] h-[50px] rounded-full bg-[blue] text-[white] text-[30px] flex justify-center items-center mb-[24px]"><FaBusinessTime/></article>
          <p className=" text-[#383838] text-[20px] text-center">Har bir foydalanuvchining vaqti va ishonchini qadrlash </p>
        </article>
        <article className=" w-[230px] border border-gray-300 rounded-xl p-[20px] flex flex-col items-center justify-center cursor-pointer transition-all duration-150 hover:shadow-md">
          <article className=" w-[50px] h-[50px] rounded-full bg-[blue] text-[white] text-[30px] flex justify-center items-center mb-[24px]"><FaUserTie/></article>
          <p className=" text-[#383838] text-[20px] text-center">Har bir mijoz bilan alohida yondashuv asosida ishlash</p>
        </article>
        <article className=" w-[230px] border border-gray-300 rounded-xl p-[20px] flex flex-col items-center justify-center cursor-pointer transition-all duration-150 hover:shadow-md">
          <article className=" w-[50px] h-[50px] rounded-full bg-[blue] text-[white] text-[30px] flex justify-center items-center mb-[24px]"><FaTruckFast/></article>
          <p className=" text-[#383838] text-[20px] text-center">Tezkor va ishonchli yetkazib berish xizmatini yo‘lga qo‘yish</p>
        </article>
        <article className=" w-[230px] border border-gray-300 rounded-xl p-[20px] flex flex-col items-center justify-center cursor-pointer transition-all duration-150 hover:shadow-md">
          <article className=" w-[50px] h-[50px] rounded-full bg-[blue] text-[white] text-[30px] flex justify-center items-center mb-[24px]"><GrUserWorker/></article>
          <p className=" text-[#383838] text-[20px] text-center">Mahalliy ishlab chiqaruvchilarni qo‘llab-quvvatlash va ularning mahsulotlarini ommalashtirish</p>
        </article>
        
        <article className=" w-[230px] border border-gray-300 rounded-xl p-[20px] flex flex-col items-center justify-center cursor-pointer transition-all duration-150 hover:shadow-md">
          <article className=" w-[50px] h-[50px] rounded-full bg-[blue] text-[white] text-[30px] flex justify-center items-center mb-[24px]"><MdOutlineRefresh/></article>
          <p className=" text-[#383838] text-[20px] text-center">Doimiy ravishda yangilanish va foydalanuvchilar ehtiyojlariga moslashish</p>
        </article>
        
        
        <article className=" w-[230px] border border-gray-300 rounded-xl p-[20px] flex flex-col items-center justify-center cursor-pointer transition-all duration-150 hover:shadow-md">
          <article className=" w-[50px] h-[50px] rounded-full bg-[blue] text-[white] text-[30px] flex justify-center items-center mb-[24px]"><LuChartColumnIncreasing/></article>
          <p className=" text-[#383838] text-[20px] text-center">Siz bilan hamkorlikda o‘sish va rivojlanish</p>
        </article>
        <article className=" w-[230px] border border-gray-300 rounded-xl p-[20px] flex flex-col items-center justify-center cursor-pointer transition-all duration-150 hover:shadow-md">
          <article className=" w-[50px] h-[50px] rounded-full bg-[blue] text-[white] text-[30px] flex justify-center items-center mb-[24px]"><SiShopify/></article>
          <p className=" text-[#383838] text-[20px] text-center">Xarid qilishni oson va yoqimli qilish</p>
        </article>
        </div>
      </div>
      <div className="max-w-[1200px] m-auto mb-[50px]">
        <h2 data-aos="fade-right" data-aos-easing='linear' data-aos-duration='400' className=" text-[42px] font-medium text-center mb-[30px]">Bizning <span className=" text-[blue]">Jamoa</span></h2>
        <div className=" w-full grid grid-cols-2 gap-y-[40px]">
          <article data-aos="fade-down-left" data-aos-easing='linear' data-aos-duration='400' className=" w-[570px] border flex items-center justify-between p-[10px] rounded-md group cursor-pointer">
            <article className=" w-[190px]  bg-red-100 rounded-md overflow-hidden">
              <img className=" w-full object-cover transition-all duration-200 grayscale group-hover:grayscale-0" src="/images/zafaraka.jpg" alt="" />
            </article>
            <article className=" w-[300px]">
              <h2 className=" text-[20px] font-medium mb-[10px]">Zafar Uralov</h2>
              <p className=" line-clamp-6">Iqtidor IT Akademiyasi direktori — o‘z oldiga texnologiyalar orqali jamiyatni rivojlantirish, yoshlarga ilhom berish va ularni global raqobatga tayyorlashni maqsad qilgan vizioner shaxsdir.</p>
            </article>
          </article>
          <article data-aos="fade-down-left" data-aos-easing='linear' data-aos-duration='400' className=" w-[570px] border flex items-center justify-between p-[10px] rounded-md group cursor-pointer">
            <article className=" w-[190px] bg-red-100 rounded-md overflow-hidden">
              <img className=" w-full object-cover transition-all duration-200 grayscale group-hover:grayscale-0" src="/images/abdufattoxaka.jpg" alt="" />
            </article>
            <article  className=" w-[300px]">
            <h2 className=" text-[20px] font-medium mb-[10px]">Abdufattox Jurayev</h2>
            <p className=" line-clamp-6">Iqtidor IT Akademiyasi SMM o‘qituvchisi — raqamli marketing, ijtimoiy tarmoqlar strategiyasi va brend rivojlantirish bo‘yicha amaliy bilimlarga ega tajribali mutaxassis.</p>
            </article>
          </article>
          <article data-aos="fade-down-left" data-aos-easing='linear' data-aos-duration='400' className=" w-[570px] border flex items-center justify-between p-[10px] rounded-md group cursor-pointer">
            <article className=" w-[190px] bg-red-100 rounded-md overflow-hidden">
              <img className=" w-full object-cover transition-all duration-200 grayscale group-hover:grayscale-0" src="/images/javohiraka.jpg" alt="" />
            </article>
            <article className=" w-[300px]">
            <h2 className=" text-[20px] font-medium mb-[10px]">Javohir yusupov</h2>
            <p className=" line-clamp-6">Iqtidor IT Akademiyasi Front-end o‘qituvchisi — HTML, CSS, JavaScript va zamonaviy texnologiyalar asosida web-dasturlashni o‘rgatuvchi tajribali va amaliyotga yo‘naltirilgan mutaxassis.</p>
            </article>
          </article>
          <article data-aos="fade-down-left" data-aos-easing='linear' data-aos-duration='400' className=" w-[570px] border flex items-center justify-between p-[10px] rounded-md group cursor-pointer">
            <article className=" w-[190px] h-[253px] bg-red-100 rounded-md overflow-hidden">
              <img className=" w-full h-full object-cover transition-all duration-200 grayscale group-hover:grayscale-0" src="/images/asliddinaka.jpg" alt="" />
            </article>
            <article className=" w-[300px]">

            <h2 className=" text-[20px] font-medium mb-[10px]">Asliddin Usmonov</h2>
            <p className=" line-clamp-6">Iqtidor IT Akademiyasi mobilograf o‘qituvchisi — smartfon orqali professional video va foto kontent yaratish bo‘yicha tajribali mutaxassis, kreativ yondashuv va amaliy darslar orqali o‘quvchilarni media olamiga tayyorlaydi.</p>
            </article>
          </article>
          
          <article data-aos="fade-down-left" data-aos-easing='linear' data-aos-duration='400' className=" w-[570px] border flex items-center justify-between p-[10px] rounded-md group cursor-pointer">
            <article className=" w-[190px] bg-red-100 rounded-md overflow-hidden">
              <img className=" w-full object-cover transition-all duration-200 grayscale group-hover:grayscale-0" src="/images/bekmuhammadaka.jpg" alt="" />
            </article>
            <article className=" w-[300px]">
            <h2 className=" text-[20px] font-medium mb-[10px]">Bekmuhammad Mamadiyev</h2>
            <p className=" line-clamp-6">Iqtidor IT Akademiyasi Backend o‘qituvchisi — Node.js, Python, PHP va boshqa texnologiyalar asosida server, ma’lumotlar bazasi hamda API yaratishni chuqur o‘rgatuvchi, o‘quvchilarni zamonaviy va kuchli dasturchilarga aylantiruvchi tajribali mutaxassis.</p>
            </article>
          </article>
          <article data-aos="fade-down-left" data-aos-easing='linear' data-aos-duration='400' className=" w-[570px] border flex items-center justify-between p-[10px] rounded-md group cursor-pointer">
            <article className=" w-[190px] h-[253px] bg-red-100 rounded-md overflow-hidden">
              <img className=" w-full h-full object-cover transition-all duration-200 grayscale group-hover:grayscale-0" src="/images/shamsiddinaka.jpg" alt="" />
            </article>
            <article className=" w-[300px]">
            <h2 className=" text-[20px] font-medium mb-[10px]">Shamsiddin Ro'ziboyev</h2>
            <p className=" line-clamp-6">Shamsiddin Ro'ziboyev — Iqtidor IT Akademiyasining Front-end yo‘nalishini muvaffaqiyatli tamomlagan, HTML, CSS, JavaScript, React, Tailwind CSS va Next.js texnologiyalari asosida zamonaviy va responsiv veb-interfeyslar yaratish bo‘yicha mustahkam bilim va real loyihaviy tajribaga ega yosh dasturchi.</p>
            </article>
          </article>
          
          <article data-aos="fade-down-left" data-aos-easing='linear' data-aos-duration='400' className=" w-[570px] border flex items-center justify-between p-[10px] rounded-md group cursor-pointer">
            <article className=" w-[190px] bg-red-100 rounded-md overflow-hidden">
              <img className=" h-full w-full object-cover transition-all duration-200 grayscale group-hover:grayscale-0" src="/images/hilolaopa.jpg" alt="" />
            </article>
            <article className=" w-[300px]">
            <h2 className=" text-[20px] font-medium mb-[10px]">Hilola Shoimova</h2>
            <p className=" line-clamp-6">Iqtidor IT Akademiyasi offise menejeri — tashkiliy jarayonlarni samarali boshqaruvchi, o‘quvchilar va ustozlar o‘rtasida muvofiqlikni ta’minlovchi, tartib, intizom va xizmat sifatiga mas’ul bo‘lgan iqtidorli va mas’uliyatli xodima.</p>
            </article>
          </article>
          <article data-aos="fade-down-left" data-aos-easing='linear' data-aos-duration='400' className=" w-[570px] border flex items-center justify-between p-[10px] rounded-md group cursor-pointer">
            <article className=" w-[190px] h-[253px] bg-red-100 rounded-md overflow-hidden">
              <img className=" h-full w-full object-cover transition-all duration-200 grayscale group-hover:grayscale-0" src="/images/me.jpg" alt="" />
            </article>
            <article className=" w-[300px]">
            <h2 className=" text-[20px] font-medium mb-[10px]">Shamsiddin Sirojiddinov</h2>
            <p className=" line-clamp-6">Shamsiddin Sirojiddinov — Iqtidor IT Akademiyasining Front-end yo‘nalishi bitiruvchi o‘quvchisi bo‘lib, HTML, CSS, JavaScript, React, Tailwind CSS va Next.js texnologiyalari bo‘yicha mustahkam bilimga ega va zamonaviy veb-loyihalarda faol ishtirok etayotgan istiqbolli yosh dasturchi.</p>
            </article>
          </article>
        </div>
      </div>
      <div className="mb-[50px]">
        <h2 data-aos="fade-right" data-aos-easing='linear' data-aos-duration='400' className=" text-[42px] font-medium text-center mb-[30px]">Bizning <span className=" text-[blue]">Hamkorlar</span></h2>
        <article className=" max-w-[1430px]  m-auto relative">
          <div id="dds" className=" w-[100px] h-[400px] bg-white z-10 absolute -top-[0px] left-0 "></div>
          <div id="zamon" className=" w-[100px] h-[400px] bg-white z-10 absolute -top-[0px] right-0 "></div>
          <Marquee direction="left" speed={30} gradient={false} className=" mb-[20px]" pauseOnHover>
            <div className=" flex gap-[17px]">
              <article className=" w-[187px] h-[170px] rounded-2xl flex justify-center items-center bg-[#80808027] transition-all duration-150 cursor-pointer hover:border hover:border-[blue]">
            <img src="/images/uic.svg" alt="" />
            </article>
            <article className=" w-[187px] h-[170px] rounded-2xl flex justify-center items-center bg-[#80808027] transition-all duration-150 cursor-pointer hover:border hover:border-[blue]">
            <img src="/images/asaka.svg" alt="" />
            </article>
            <article className=" w-[187px] h-[170px] rounded-2xl flex justify-center items-center bg-[#80808027] transition-all duration-150 cursor-pointer hover:border hover:border-[blue]">
            <img src="/images/paylov.svg" alt="" />
            </article>
            <article className=" w-[187px] h-[170px] rounded-2xl flex justify-center items-center bg-[#80808027] transition-all duration-150 cursor-pointer hover:border hover:border-[blue]">
            <img src="/images/itpark.svg" alt="" />
            </article>
            <article className=" w-[187px] h-[170px] rounded-2xl flex justify-center items-center bg-[#80808027] transition-all duration-150 cursor-pointer hover:border hover:border-[blue]">
            <img className=" w-[150px]" src="/images/zlight.svg" alt="" />
            </article>
            <article className=" w-[187px] h-[170px] rounded-2xl flex justify-center items-center bg-[#80808027] transition-all duration-150 cursor-pointer hover:border hover:border-[blue]">
            <img src="/images/iqtidor.svg" alt="" />
            </article>
            <article className=" w-[187px] h-[170px] rounded-2xl flex justify-center items-center bg-[#80808027] transition-all duration-150 cursor-pointer hover:border hover:border-[blue]">
            <img src="/images/imkon.svg" alt="" />
            </article>
            </div>
          </Marquee>
          <Marquee direction="right" speed={30} gradient={false} pauseOnHover>
            <div className=" flex gap-[17px]">
              <article className=" w-[187px] h-[170px] rounded-2xl flex justify-center items-center bg-[#80808027] transition-all duration-150 cursor-pointer hover:border hover:border-[blue]">
            <img src="/images/uic.svg" alt="" />
            </article>
            <article className=" w-[187px] h-[170px] rounded-2xl flex justify-center items-center bg-[#80808027] transition-all duration-150 cursor-pointer hover:border hover:border-[blue]">
            <img src="/images/asaka.svg" alt="" />
            </article>
            <article className=" w-[187px] h-[170px] rounded-2xl flex justify-center items-center bg-[#80808027] transition-all duration-150 cursor-pointer hover:border hover:border-[blue]">
            <img src="/images/paylov.svg" alt="" />
            </article>
            <article className=" w-[187px] h-[170px] rounded-2xl flex justify-center items-center bg-[#80808027] transition-all duration-150 cursor-pointer hover:border hover:border-[blue]">
            <img src="/images/itpark.svg" alt="" />
            </article>
            <article className=" w-[187px] h-[170px] rounded-2xl flex justify-center items-center bg-[#80808027] transition-all duration-150 cursor-pointer hover:border hover:border-[blue]">
            <img className=" w-[150px]" src="/images/zlight.svg" alt="" />
            </article>
            <article className=" w-[187px] h-[170px] rounded-2xl flex justify-center items-center bg-[#80808027] transition-all duration-150 cursor-pointer hover:border hover:border-[blue]">
            <img src="/images/iqtidor.svg" alt="" />
            </article>
            <article className=" w-[187px] h-[170px] rounded-2xl flex justify-center items-center bg-[#80808027] transition-all duration-150 cursor-pointer hover:border hover:border-[blue]">
            <img src="/images/imkon.svg" alt="" />
            </article>
            </div>
          </Marquee>
        </article>
      </div>
      <Question/>
    </div>
  );
}
