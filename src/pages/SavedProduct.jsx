// pages/SavedProduct.jsx
import { useEffect, useState } from 'react';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { MdAddShoppingCart } from 'react-icons/md';
import ProductView from './ProductView';

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
    <div className="max-w-[1200px] m-auto mb-[44px] px-4">
      <h2 className="text-[32px] font-medium mb-[24px]">Saqlangan mahsulotlar</h2>

      {savedProducts.length === 0 ? (
        <p className="text-gray-500">Hozircha saqlangan mahsulot yo‘q.</p>
      ) : (
        <div className=" w-full grid grid-cols-4">
          {savedProducts.map(product => (
            <div key={product.id} className=" w-[232px] border border-gray-200 rounded-xl overflow-hidden hover:shadow-md relative group p-[5px]">
              {/* Yurakcha tugmasi */}
              <div
                onClick={() => toggleLike(product.id)}
                className="p-[7px] bg-gray-200 rounded-[8px] absolute right-2 top-2 z-20 cursor-pointer"
              >
                <IoMdHeart className="text-[blue] text-[22px]" />
              </div>

              {/* Mahsulot rasmi */}
              <div className="w-full h-[250px]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-150"
                  src={product.image}
                  alt="Mahsulot"
                />
              </div>

              {/* Mahsulot tafsilotlari */}
              <div>
                <h5 className="text-[25px] text-[blue] flex items-center gap-[10px]">{product.price}</h5>
                <span className="bg-[#dbdbdb] text-black text-[13px] rounded-md px-[3px]">
                  {product.kredit}
                </span>
                <h6 className="line-clamp-2 mb-[8px]">
                  {product.title}
                </h6>
                <button onClick={() => setSelectedProduct(product)} className="w-full py-[5px] bg-[blue] text-white text-[16px] flex justify-center items-center gap-1 rounded-[10px] hover:bg-blue-600 transition">
                  Savatga <MdAddShoppingCart />
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
