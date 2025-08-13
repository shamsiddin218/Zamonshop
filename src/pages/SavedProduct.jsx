// pages/SavedProduct.jsx
import { useEffect, useState } from 'react';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { MdAddShoppingCart } from 'react-icons/md';
import ProductView from './ProductView';
import { IoMdHeartDislike } from "react-icons/io";

export default function SavedProduct({handleAddToCart}) {
  const [savedProducts, setSavedProducts] = useState([]);
        const [selectedProduct, setSelectedProduct] = useState(null); // MODAL uchun
  
  // localStorage dan ma'lumot olish
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedProducts')) || [];
    setSavedProducts(saved);
  }, []);

  // Saqlangan mahsulotni o‘chirish
  const toggleLike = (id) => {
    const updated = savedProducts.filter(item => item.id !== id);
    setSavedProducts(updated);
    localStorage.setItem('savedProducts', JSON.stringify(updated));
  };

  return (
    <div className="max-w-[1200px] m-auto mb-[44px] px-[10px] mt-[125px] ">
      <h2 className="text-[32px] font-medium mb-[24px]">Saqlangan mahsulotlar</h2>

      {savedProducts.length === 0 ? (
        <div className=' flex flex-col justify-center items-center p-[50px]'>
          <IoMdHeartDislike className=' text-[90px] text-[blue] mb-[30px]'/>
          <h1 className=' text-[30px] font-medium'>Sizda saqlangan mahsulotlar mavjud emas</h1>

        </div>
      ) : (
        <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] sm:gap-[24px] lg:gap-[30px]">
          {savedProducts.map(product => (
            <div key={product.id} className="w-full max-w-[270px] m-auto border border-[#80808055] rounded-xl overflow-hidden cursor-pointer transition-all duration-200 relative hover:shadow-md group">
              {/* Yurakcha tugmasi */}
              <div
                onClick={() => toggleLike(product.id)}
                className="p-[7px] bg-gray-200 rounded-[8px] absolute right-2 top-2 z-20 cursor-pointer"
              >
                <IoMdHeart className="text-[blue] text-[22px]" />
              </div>

              {/* Mahsulot rasmi */}
              <div className="w-full h-[280px] xs:h-[300px] sm:h-[309px] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-200"
                  src={product.image}
                  alt="Mahsulot"
                />
              </div>

              {/* Mahsulot tafsilotlari */}
              <div className='w-full h-full p-[5px]'>
                <h5 className="text-[20px] xs:text-[22px] sm:text-[24px] md:text-[25px] text-blue-700 flex items-center gap-[10px]">{product.price}</h5>
                <span className="bg-[#dbdbdb] text-black text-[13px] rounded-md px-[3px]">
                  {product.kredit}
                </span>
                <h6 className="line-clamp-2 mb-[8px] text-[14px] sm:text-[15px] md:text-[16px]">
                  {product.title}
                </h6>
                <button onClick={() => setSelectedProduct(product)} className="w-full py-[5px] bg-[blue] text-white text-[16px] flex justify-center items-center gap-1 rounded-[10px] hover:bg-blue-600 transition">
                  Ko'rish <MdAddShoppingCart />
                </button>
              </div>
            </div>
          ))}
        </div>
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
