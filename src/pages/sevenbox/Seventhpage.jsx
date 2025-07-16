import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import data from '../../../Language/uz.json'
import { NavLink } from "react-router-dom";
export default function Seventhpage() {
  const comp = data.Alldata.filter(item => item.category === "Quloqchinlar").sort(()=> 0.5 - Math.random()).slice(0, 4)
  return (
    <div className=" max-w-[1200px] m-auto mb-[44px]">
      <article>
        <NavLink to={'/headphone'}>

        <h2 className=" text-[32px] font-medium cursor-pointer flex items-center mb-[24px]">
          Quloqchinlar <FiChevronRight/>
        </h2>
        </NavLink>
      </article>
      <article className="w-full grid grid-cols-4 gap-y-[30px]">
        {comp.map((headphone)=>(

        <article className=" w-[232px] border border-gray-100 rounded-xl overflow-hidden cursor-pointer transition-all duration-50 relative hover:shadow-md group">
          <article className=" p-[7px] bg-gray-200 rounded-[8px] absolute right-1 top-1 z-20">
            <IoMdHeart className=" text-[white] text-[20px]" />
          </article>
          <article className=" w-full h-[309px]">
            <img
              className=" w-full h-full object-cover group-hover:scale-105 transition-all duration-50 "
              src="https://images.uzum.uz/d01lic6i4n37npap9deg/original.jpg"
              alt=""
            />
          </article>
          <article className=" w-full h-full p-[5px]">
            <h5 className=" text-[25px] text-[blue] flex items-center gap-[10px]">
              {headphone.price}
              
            </h5>
            <span className=" bg-[#dbdbdb] text-black text-[13px] rounded-md px-[3px]">
              {headphone.kredit}
            </span>
            <h6 className=" line-clamp-2 mb-[8px]">
              {headphone.title}
            </h6>
            <button className=" w-full py-[3px] bg-[blue] text-white text-[16px] flex justify-center items-center rounded-[10px]">
              Savatga <MdAddShoppingCart />
            </button>
          </article>
        </article>
        ))}
      </article>
    </div>
  );
}
