import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import data from '../../../Language/uz.json';
import { NavLink } from "react-router-dom";
import ProductView from "../ProductView";
import { useLiked } from "../../hook/useliked";
export default function Thirdpage({ handleAddToCart }) {
 const [tex] = useState(() => {
    return data.Alldata
      .filter(item => item.key === "Maishiy texnika")
      .sort(() => 0.5 - Math.random())
      .slice(0, 8);
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const { toggleLike, isLiked } = useLiked(); // ❤️ Hook


  return (
    <div className="max-w-[1200px] m-auto mb-[44px]">
      <article>
        <NavLink to={'/texnika'}>
          <h2 className="text-[32px] font-medium cursor-pointer flex items-center mb-[24px]">
            Maishiy texnikalar <FiChevronRight />
          </h2>
        </NavLink>
      </article>

      <article className="w-full grid grid-cols-4 gap-y-[30px]">
        {tex.map((texnika) => (
          <article key={texnika.id} className="w-[250px] border border-[#80808055] rounded-xl overflow-hidden cursor-pointer transition-all duration-50 relative hover:shadow-md group">
            
            {/* Like Button */}
            <article
              onClick={() => toggleLike(texnika)}
              className="p-[7px] bg-gray-200 rounded-[8px] absolute right-1 top-1 z-20"
            >
              <IoMdHeart
                className="text-[20px]"
                color={isLiked(texnika.id) ? "blue" : "white"} // 👈 Ko'k yoki kul rang
              />
            </article>

            <article className="w-full h-[309px]">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-all duration-50" src="https://images.uzum.uz/d01lic6i4n37npap9deg/original.jpg" alt="" />
            </article>

            <article className="w-full h-full p-[5px]">
              <h5 className="text-[25px] text-[blue] flex items-center gap-[10px]">
                {texnika.price}
              </h5>
              <span className="bg-[#dbdbdb] text-black text-[13px] rounded-md px-[3px]">
                {texnika.kredit}
              </span>
              <h6 className="line-clamp-2 mb-[8px]">
                {texnika.title}
              </h6>
              <button
                onClick={() => setSelectedProduct(texnika)}
                className="w-full py-[3px] bg-[blue] text-white text-[16px] flex justify-center items-center rounded-[10px]"
              >
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
