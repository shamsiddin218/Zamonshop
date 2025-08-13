import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <div className="w-full bg-blue-100 dark:bg-blue-950 dark:text-gray-100 transition-all duration-300">
      <div className="max-w-[1200px] m-auto grid grid-cols-1 md:grid-cols-4 gap-6 p-[25px]">
        <div className="flex flex-col gap-4">
          <img className="w-[160px] cursor-pointer block dark:hidden" src="/logos/zamonshop_logo_clean.png" alt="logo" />
          <img className="w-[160px] cursor-pointer hidden dark:block" src="/logos/zamonshop_logo_light.png" alt="logo" />
          <p className="text-gray-700 dark:text-gray-300 text-sm">Sizning ishonchli onlayn xarid do'koningiz.</p>
        </div>

        <div>
          <ul>
            <li className="text-[20px] font-semibold mb-[14px]">Foydalanuvchilarga</li>
            <li className="text-gray-700 dark:text-gray-300 cursor-pointer hover:text-blue-600">Biz haqimizda</li>
            <li className="text-gray-700 dark:text-gray-300 cursor-pointer hover:text-blue-600">Biz bilan bog'lanish</li>
            <li className="text-gray-700 dark:text-gray-300 cursor-pointer hover:text-blue-600">Savol-javob</li>
          </ul>
        </div>

        <div>
  <h4 className="text-[20px] font-semibold mb-[14px]">Ijtimoiy tarmoqlarimiz</h4>
  <div className="flex gap-[15px]">
    {[
      { icon: FaTelegramPlane, link: "https://t.me/Sirojiddinov_2oo9" },
      { icon: FaInstagram, link: "https://www.instagram.com/sirojiddinov09/" },
      { icon: FaFacebook, link: "https://www.facebook.com/profile.php?id=61554879080946" },
      { icon: VscGithubInverted, link: "https://github.com/shamsiddin218" },
    ].map(({ icon: Icon, link }, idx) => (
      <a
        key={idx}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-blue-800 rounded-md hover:bg-blue-600 transition-colors"
      >
        <Icon className="text-[24px] text-white" />
      </a>
    ))}
  </div>
</div>


        <div className="bg-blue-200 dark:bg-blue-800 px-[20px] py-[15px] rounded-md">
          <h4 className="text-[20px] font-semibold mb-[14px]">Aloqa markazi</h4>
          <div className="flex items-center gap-3 mb-[10px]">
            <div className="p-2 bg-blue-600 rounded-full">
              <IoCallSharp className="text-white text-[22px]" />
            </div>
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Telefon raqam</p>
              <p className="text-blue-700 dark:text-blue-300 font-medium">+998 88 386 69 09</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-full">
              <MdEmail className="text-white text-[22px]" />
            </div>
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Email</p>
              <p className="text-blue-700 dark:text-blue-300 font-medium">sirojiddins881@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}