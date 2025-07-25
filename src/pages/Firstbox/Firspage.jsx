import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";
import { useTranslation } from "react-i18next";
import data from '../../../Language/uz.json'
import { NavLink } from "react-router-dom";
import ProductView from "../ProductView";
import { useLiked } from "../../hook/useliked";
export default function Firspage({handleAddToCart}) {
  const t = useTranslation()
 const [tex] = useState(() => {
    return data.Alldata
      .filter(item => item.category === "Ofis")
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const { toggleLike, isLiked } = useLiked(); // ❤️ Hook
  
  return (
    <div className=" max-w-[1200px] m-auto mb-[44px]">
      <article>
        <NavLink to={'/allofis'}>

        <h2 className=" text-[32px] font-medium cursor-pointer flex items-center mb-[24px]">
          Ofis ishlari uchun <FiChevronRight />
        </h2>
        </NavLink>
      </article>
      <article className=" w-full grid grid-cols-4 gap-y-[30px]">
        {tex.map((product)=>(
        <article key={product.id} className=" w-[232px] border border-gray-100 rounded-xl overflow-hidden cursor-pointer transition-all duration-50 relative hover:shadow-md group">
          <article onClick={() => toggleLike(product)} className=" p-[7px] bg-gray-200 rounded-[8px] absolute right-1 top-1 z-20">
            <IoMdHeart color={isLiked(product.id) ? "blue" : "white"}  className=" text-[white] text-[20px]" />
          </article>
          <article className=" w-full h-[309px]">
            <img className=" w-full h-full object-cover group-hover:scale-105 transition-all duration-50 " src="https://images.uzum.uz/d01lic6i4n37npap9deg/original.jpg" alt="" />
          </article>
          <article className=" w-full h-full p-[5px]">
            <h5 className=" text-[25px] text-[blue] flex items-center gap-[10px]">
              {product.price} 
            </h5>
            <span className=" bg-[#dbdbdb] text-black text-[13px] rounded-md px-[3px]">
              {product.kredit}
            </span>
            <h6 className=" line-clamp-2 mb-[8px]">
              {product.title}
            </h6>
            <button onClick={() => setSelectedProduct(product)}   className=" w-full py-[3px] bg-[blue] text-white text-[16px] flex justify-center items-center rounded-[10px]">
              Savatga <MdAddShoppingCart />
            </button>
          </article>
        </article>
        ))}
      </article>
      {selectedProduct && (
                            <ProductView 
                              product={selectedProduct} 
                              onClose={() => setSelectedProduct(null)}
                               onAddToCart={handleAddToCart} 
                            />
                          )}
    </div>
  );
}
