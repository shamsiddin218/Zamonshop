import React, { useEffect, useState } from 'react'
import { IoMdHeart } from 'react-icons/io'
import { MdAddShoppingCart } from 'react-icons/md'
import data from '../../../../Language/uz.json'
import Childskeleton from '../../../skleton/Childskeleton'
export default function Gamecursor() {
        const mause = data.Alldata.filter(item => item.category === "Oyin sichqonchalari").sort(()=> 0.5 - Math.random())
        const [loading, setLoading] = useState(true);
                  
                  useEffect(() => {
                    const timer = setTimeout(() => {
                      setLoading(false);
                      document.body.style.overflow = 'auto';
                    }, 2000);
                  
                    return () => clearTimeout(timer);
                  }, []);
                   
                  if (loading) {
                    return <Childskeleton />;
                  }

  return (
   <div className=" max-w-[1200px] m-auto mb-[44px]">
              <article>
                <h2 className=" text-[32px] font-medium  flex items-center mb-[24px]">
                  O'yin sichqonchalari
                </h2>
              </article>
              <article className=" w-full grid grid-cols-4 gap-y-[30px]">
                {mause.map((phones)=>(
                <article key={phones.id} className=" w-[232px] border border-gray-100 rounded-xl overflow-hidden cursor-pointer transition-all duration-50 relative hover:shadow-md group">
                  <article className=" p-[7px] bg-gray-200 rounded-[8px] absolute right-1 top-1 z-20">
                    <IoMdHeart className=" text-[white] text-[20px]" />
                  </article>
                  <article className=" w-full h-[309px]">
                    <img className=" w-full h-full object-cover group-hover:scale-105 transition-all duration-50 " src="https://images.uzum.uz/d01lic6i4n37npap9deg/original.jpg" alt="" />
                  </article>
                  <article className=" w-full h-full p-[5px]">
                    <h5 className=" text-[25px] text-[blue] flex items-center gap-[10px]">
                      {phones.price}
                    </h5>
                    <span className=" bg-[#dbdbdb] text-black text-[13px] rounded-md px-[3px]">
                      {phones.kredit}
                    </span>
                    <h6 className=" line-clamp-2 mb-[8px]">
                      {phones.title}
                    </h6>
                    <button className=" w-full py-[3px] bg-[blue] text-white text-[16px] flex justify-center items-center rounded-[10px]">
                      Savatga <MdAddShoppingCart />
                    </button>
                  </article>
                </article>
                ))}
              </article>
        </div>
  )
}
