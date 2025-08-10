import React, { useEffect, useState } from 'react'
import { IoMdHeart } from 'react-icons/io'
import { MdAddShoppingCart } from 'react-icons/md'
import data from '../../../Language/uz.json'
import Childskeleton from '../../skleton/Childskeleton'
import ProductView from '../../pages/ProductView'
export default function Tvfilter({handleAddToCart}) {
    const tv = data.Alldata.filter(item => item.key === "Gamerlar uchun").sort(()=> 0.5 - Math.random())
    const [visibleCount, setVisibleCount] = useState(12); 
            const [selectedCategory, setSelectedCategory] = useState("Barchasi");
          const [selectedProduct, setSelectedProduct] = useState(null); // MODAL uchun
        
          
            const handleCategoryChange = (e) => {
            setSelectedCategory(e.target.value);
            setVisibleCount(12); 
          };
          const filteredProducts = selectedCategory === "Barchasi"
            ? tv
            : tv.filter(item => item.category === selectedCategory);
        
          const visibleProducts = filteredProducts.slice(0, visibleCount);
          const [loading, setLoading] = useState(true);
          
            // 1. Boshlanishdagi skeleton
            useEffect(() => {
              const timer = setTimeout(() => {
                setLoading(false)
                document.body.style.overflow = 'auto'
              }, 2000)
              return () => clearTimeout(timer)
            }, [])
          
            // 2. Kategoriya o‘zgarsa loadingni true qilish
            useEffect(() => {
              setLoading(true)
              const timer = setTimeout(() => {
                setLoading(false)
              }, 2000)
              return () => clearTimeout(timer)
            }, [selectedCategory])
  return (
    <>
    {loading ? (
      <Childskeleton/>
    ) : (

   <div className=" max-w-[1200px] m-auto mb-[44px] px-[10px]">
               <article className=' w-full flex justify-between items-center'>
                 <h2 className=" text-[32px] font-medium  flex items-center mb-[24px]">
                   Barcha televizor mahsulotlari 
                 </h2>
                 <select value={selectedCategory} onChange={handleCategoryChange} className=' border border-gray-400 rounded-md outline-none py-[3px] px-[6px]'>
                  <option value="Barchasi">Barchasi</option>
                  <option value="Smart televizorlar">Smart televizorlar</option>
                  <option value="Televizor kabellari">Televizor kabellari</option>
                  <option value="Pultlar">Pultlar</option>
                  <option value="Arzonroq televizorlar">Arzonroq televizorlar</option>
                  <option value="Antena">Antena</option>
                  <option value="Tyunerlar">Tyunerlar</option>
                </select>
               </article>
               <article className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] sm:gap-[24px] lg:gap-[30px] gap-y-[30px] mb-[30px]">
                 {tv.map((tvs)=>(
                 <article key={tvs.id} className="w-full max-w-[270px] m-auto border border-[#80808055] rounded-xl overflow-hidden cursor-pointer transition-all duration-200 relative hover:shadow-md group">
                   <article className=" p-[7px] bg-gray-200 rounded-[8px] absolute right-1 top-1 z-20">
                     <IoMdHeart className=" text-[white] text-[20px]" />
                   </article>
                   <article className=" w-full h-[280px] xs:h-[300px] sm:h-[309px] overflow-hidden">
                     <img className="w-full h-full object-cover group-hover:scale-105 transition-all duration-200" src="https://images.uzum.uz/d01lic6i4n37npap9deg/original.jpg" alt="" />
                   </article>
                   <article className=" w-full h-full p-[5px]">
                     <h5 className="text-[20px] xs:text-[22px] sm:text-[24px] md:text-[25px] text-blue-700 flex items-center gap-[10px]">
                       {tvs.price}
                     </h5>
                     <span className="bg-[#dbdbdb] text-black text-[12px] xs:text-[13px] rounded-md px-[3px]">
                       {tvs.kredit}
                     </span>
                     <h6 className="line-clamp-2 mb-[8px] text-[14px] sm:text-[15px] md:text-[16px] text-[14px] sm:text-[15px] md:text-[16px]">
                       {tvs.title}
                     </h6>
                     <button onClick={() => setSelectedProduct(tvs)} className=" w-full py-[6px] sm:py-[8px] bg-blue-600 hover:bg-blue-700 transition-colors duration-150 text-white text-[14px] sm:text-[15px] md:text-[16px] flex justify-center items-center rounded-[10px]">
                       Ko'rish <MdAddShoppingCart />
                     </button>
                   </article>
                 </article>
                 ))}
               </article>
               {visibleCount < filteredProducts.length && (

              <article className=' w-full flex justify-center items-center'> 
              <button onClick={() => setVisibleCount(prev => prev + 12)} className=' bg-gray-200 py-[7px] px-[40px] font-medium rounded-lg transition-all duration-100 hover:bg-gray-300'>Yana ko'rsatish</button>
              </article>
              )}
         </div>
    )}
    {selectedProduct && (
            <ProductView
              product={selectedProduct} 
              onAddToCart={handleAddToCart}
              onClose={() => setSelectedProduct(null)} 
            />
          )}
    </>
  )
}
