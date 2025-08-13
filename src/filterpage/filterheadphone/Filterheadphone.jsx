import React, { useState } from 'react'
import { IoMdHeart } from 'react-icons/io'
import { MdAddShoppingCart } from 'react-icons/md'
import data from '../../../Language/uz.json'
import ProductView from '../../pages/ProductView'
export default function Filterheadphone({handleAddToCart}) {
    const headphone = data.Alldata.filter(item => item.key === "Planshet").sort(()=> 0.5 - Math.random())
     const [visibleCount, setVisibleCount] = useState(12); 
                const [selectedCategory, setSelectedCategory] = useState("Barchasi");
                const [selectedProduct, setSelectedProduct] = useState(null); // MODAL uchun
              
              
                const handleCategoryChange = (e) => {
                setSelectedCategory(e.target.value);
                setVisibleCount(12); 
              };
              const filteredProducts = selectedCategory === "Barchasi"
                ? headphone
                : headphone.filter(item => item.category === selectedCategory);
            
              const visibleProducts = filteredProducts.slice(0, visibleCount);
  return (
  <div className=" max-w-[1200px] m-auto mb-[44px] px-[10px] mt-[125px]">
            <article className=' w-full flex justify-between items-center'>
              <h2 className=" text-[32px] font-medium  flex items-center mb-[24px]">
                Barcha planshet mahsulotlari 
              </h2>
              <select value={selectedCategory} onChange={handleCategoryChange} className=' border border-gray-400 bg-transparent  rounded-md outline-none py-[3px] px-[6px]'>
                  <option className=' dark:bg-black' value="Barchasi">Barchasi</option>
                  <option className=' dark:bg-black' value="Planshet giloflari">Planshet giloflari</option>
                  <option className=' dark:bg-black' value="iPadlar">iPadlar</option>
                  <option className=' dark:bg-black' value="Sensorli ruchkalar">Sensorli ruchkalar</option>
                  
                </select>
            </article>
            <article className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] sm:gap-[24px] lg:gap-[30px] gap-y-[30px]">
              {visibleProducts.map((item)=>(
              <article key={item.id} className="w-full max-w-[270px] m-auto border border-[#80808055] rounded-xl overflow-hidden cursor-pointer transition-all duration-200 relative hover:shadow-md group">
                <article className=" p-[7px] bg-[#acababd6] rounded-[8px] absolute right-1 top-1 z-20">
                  <IoMdHeart className=" text-[white] text-[20px]" />
                </article>
                <article className=" w-full h-[280px] xs:h-[300px] sm:h-[309px] overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-all duration-200" src={phones.image} alt="" />
                </article>
                <article className=" w-full h-full p-[5px]">
                  <h5 className="text-[20px] xs:text-[22px] sm:text-[24px] md:text-[25px] text-blue-700 flex items-center gap-[10px]">
                    {item.price}
                  </h5>
                  <span className="bg-[#dbdbdb] text-black text-[12px] xs:text-[13px] rounded-md px-[3px]">
                    {item.kredit}
                  </span>
                  <h6 className="line-clamp-2 mb-[8px] text-[14px] sm:text-[15px] md:text-[16px]  ">
                    {item.title}
                  </h6>
                  <button onClick={() => setSelectedProduct(item)} className=" w-full py-[6px] sm:py-[8px] bg-blue-600 hover:bg-blue-700 transition-colors duration-150 text-white text-[14px] sm:text-[15px] md:text-[16px] flex justify-center items-center rounded-[10px]">
                    Ko'rish <MdAddShoppingCart />
                  </button>
                </article>
              </article>
              ))}
            </article>
            {selectedProduct && (
                    <ProductView 
                      product={selectedProduct}
                      onAddToCart={handleAddToCart} 
                      onClose={() => setSelectedProduct(null)} 
                    />
                  )}
      </div>
  )
}
