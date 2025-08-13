import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoMdHeart } from 'react-icons/io';
import { MdAddShoppingCart } from 'react-icons/md';
import ProductView from '../pages/ProductView';
import Aldata from '../../Language/uz.json';
import { useLiked } from '../hook/useliked';

export default function SearchProduct({handleAddToCart}) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchTerm = params.get("q")?.toLowerCase().trim() || "";

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [liked, setLiked] = useState([]);
 const [selectedProduct, setSelectedProduct] = useState(null);
  const { toggleLike, isLiked } = useLiked()
  useEffect(() => {
    if (!searchTerm) {
      setFilteredProducts([]);
      return;
    }

    const results = Aldata.Alldata.filter((item) => {
      const title = item.title?.toLowerCase() || "";
      const key = item.key?.toLowerCase() || "";
      const category = item.category?.toLowerCase() || "";

      return (
        title.includes(searchTerm) ||
        key.includes(searchTerm) ||
        category.includes(searchTerm)
      );
    });

    setFilteredProducts(results);
  }, [searchTerm]);

  

 

  return (
    <div className="max-w-[1200px] m-auto mb-[44px] px-[10px] mt-[125px]">
      <h2 className="text-[32px] font-medium mb-[24px]">Qidiruv natijalari</h2>

      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-20 h-20 text-gray-400 animate-bounce"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
    />
  </svg>

  <h2 className="text-2xl font-semibold text-gray-700 mt-4">
    Hech narsa topilmadi 😔
  </h2>
  <p className="text-gray-500 mt-2 text-center max-w-sm">
    "{searchTerm}" bo‘yicha hech qanday natija topilmadi.  
    Iltimos, boshqa so‘z bilan qidirib ko‘ring.
  </p>

  
</div>

      ) : (
       <article className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] sm:gap-[24px] lg:gap-[30px]">
           {filteredProducts.map((product) => (
             <article
               key={product.id}
               className="w-full max-w-[270px] m-auto border border-[#80808055] rounded-xl overflow-hidden cursor-pointer transition-all duration-200 relative hover:shadow-md group"
             >
               <article
                 onClick={() => toggleLike(product)}
                 className="p-[7px] bg-[#acababd6] rounded-[8px] absolute right-1 top-1 z-20"
               >
                 <IoMdHeart
                   color={isLiked(product.id) ? 'blue' : 'white'}
                   className="text-white text-[20px]"
                 />
               </article>
               <article className="w-full h-[280px] xs:h-[300px] sm:h-[309px] overflow-hidden">
                 <img
                   className="w-full h-full object-cover group-hover:scale-105 transition-all duration-200"
                   src={product.image}x
                   alt=""
                 />
               </article>
               <article className="w-full h-full p-[5px]">
                 <h5 className="text-[20px] xs:text-[22px] sm:text-[24px] md:text-[25px] text-blue-700 flex items-center gap-[10px]">
                   {product.price}
                 </h5>
                 <span className="bg-[#dbdbdb] text-black text-[12px] xs:text-[13px] rounded-md px-[3px]">
                   {product.kredit}
                 </span>
                 <h6 className="line-clamp-2 mb-[8px] text-[14px] sm:text-[15px] md:text-[16px]  ">
                   {product.title}
                 </h6>
                 <button
                   onClick={() => setSelectedProduct(product)}
                   className="w-full py-[6px] sm:py-[8px] bg-blue-600 hover:bg-blue-700 transition-colors duration-150 text-white text-[14px] sm:text-[15px] md:text-[16px] flex justify-center items-center rounded-[10px]"
                 >
                   Ko'rish <MdAddShoppingCart className="ml-[5px]" />
                 </button>
               </article>
             </article>
           ))}
         </article>
      )}

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
