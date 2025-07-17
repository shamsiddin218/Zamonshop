import React, { useEffect, useState } from 'react'
import { IoMdHeart } from 'react-icons/io'
import { MdAddShoppingCart } from 'react-icons/md'
import data from '../../../Language/uz.json'
import Childskeleton from '../../skleton/Childskeleton'
export default function Alldatafilter() {
    const allproducts = data.Alldata.sort(()=> 0.5 - Math.random())
    const [visibleCount, setVisibleCount] = useState(12); 
    const [selectedCategory, setSelectedCategory] = useState("Barchasi");

  
    const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setVisibleCount(12); 
  };
  const filteredProducts = selectedCategory === "Barchasi"
    ? allproducts
    : allproducts.filter(item => item.key === selectedCategory);

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

  <div className=" max-w-[1200px] m-auto mb-[44px]">
              <article className=' w-full flex justify-between items-center mb-[24px]'>
                <h2 className=" text-[32px] font-medium  flex items-center mb-[24px]">
                Zamonshopda barcha mahsulotlar 
                </h2>
                <select value={selectedCategory} onChange={handleCategoryChange} className=' border border-gray-400 rounded-md outline-none py-[3px] px-[6px]'>
                  <option value="Barchasi">Barchasi</option>
                  <option value="Telefon">Telefonlar</option>
                  <option value="Kompyuter">Kompyuterlar</option>
                  <option value="Noutbuk">Noutbuklar</option>
                  <option value="Gamerlar uchun">Gamerlar uchun</option>
                  <option value="Televizor">Televizorlar</option>
                  <option value="Aqlli soat">Aqlli soatlar</option>
                  <option value="Maishiy texnika">Maishiy texnikalar</option>
                </select>
              </article>
              <article className=" w-full grid grid-cols-4 gap-y-[30px] mb-[24px]">
                {visibleProducts.map((item)=>(
                <article key={item.id} className=" w-[232px] border border-gray-100 rounded-xl overflow-hidden cursor-pointer transition-all duration-50 relative hover:shadow-md group">
                  <article className=" p-[7px] bg-gray-200 rounded-[8px] absolute right-1 top-1 z-20">
                    <IoMdHeart className=" text-[white] text-[20px]" />
                  </article>
                  <article className=" w-full h-[309px]">
                    <img className=" w-full h-full object-cover group-hover:scale-105 transition-all duration-50 " src="https://images.uzum.uz/d01lic6i4n37npap9deg/original.jpg" alt="" />
                  </article>
                  <article className=" w-full h-full p-[5px]">
                    <h5 className=" text-[25px] text-[blue] flex items-center gap-[10px]">
                      {item.price}
                    </h5>
                    <span className=" bg-[#dbdbdb] text-black text-[13px] rounded-md px-[3px]">
                      {item.kredit}
                    </span>
                    <h6 className=" line-clamp-2 mb-[8px]">
                      {item.title}
                    </h6>
                    <button className=" w-full py-[3px] bg-[blue] text-white text-[16px] flex justify-center items-center rounded-[10px]">
                      Savatga <MdAddShoppingCart />
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
    </>
  )
}
