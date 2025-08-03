import data from '../../../Language/uz.json'
import { FiChevronRight } from 'react-icons/fi'
import { IoMdHeart } from 'react-icons/io'
import { MdAddShoppingCart } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import ProductView from '../ProductView'
import { useState } from 'react'
import { useLiked } from '../../hook/useliked'

export default function Secondpage({handleAddToCart}) {
 const [tex] = useState(() => {
    return data.Alldata
      .filter(item => item.key === "Aqlli soat")
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const { toggleLike, isLiked } = useLiked(); // ❤️ Hook
  return (
    <div className=' max-w-[1200px] m-auto mb-[44px] px-[10px]'>
      <NavLink to={'/watch'}>
            <article>
                <h2 className=' text-[24px] xs:text-[28px] sm:text-[30px] md:text-[32px] font-medium cursor-pointer flex items-center mb-[24px]'>Zamonaviy soatlar <FiChevronRight/></h2>
            </article>
      </NavLink>
          <article  className='w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] sm:gap-[24px] lg:gap-[30px]'>
            {tex.map((product)=>(
            <article key={product.id} className='w-full max-w-[270px] m-auto border border-[#80808055] rounded-xl overflow-hidden cursor-pointer transition-all duration-200 relative hover:shadow-md group'>
              <article onClick={() => toggleLike(product)} className=' p-[7px] bg-gray-200 rounded-[8px] absolute right-1 top-1 z-20'>
              <IoMdHeart color={isLiked(product.id) ? "blue" : "white"}  className=' text-[white] text-[20px]'/>
              </article>
                <article className=' w-full h-[280px] xs:h-[300px] sm:h-[309px] overflow-hidden'>
                    <img className='w-full h-full object-cover group-hover:scale-105 transition-all duration-200' src="https://images.uzum.uz/d01lic6i4n37npap9deg/original.jpg" alt="" />
                </article>
                <article className=' w-full h-full p-[5px]'>
                    <h5 className='text-[20px] xs:text-[22px] sm:text-[24px] md:text-[25px] text-blue-700 flex items-center gap-[10px]'>{product.price}</h5>
                    <span className='bg-[#dbdbdb] text-black text-[12px] xs:text-[13px] rounded-md px-[3px]'>{product.kredit}</span>
                    <h6 className='line-clamp-2 mb-[8px] text-[14px] sm:text-[15px] md:text-[16px] text-[14px] sm:text-[15px] md:text-[16px]'>{product.title} </h6>
                    <button onClick={() => setSelectedProduct(product)} className=' w-full py-[6px] sm:py-[8px] bg-blue-600 hover:bg-blue-700 transition-colors duration-150 text-white text-[14px] sm:text-[15px] md:text-[16px] flex justify-center items-center rounded-[10px]'>Savatga <MdAddShoppingCart/></button>
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
  )
}
