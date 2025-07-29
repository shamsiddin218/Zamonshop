import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoMdHeart } from 'react-icons/io';
import { MdAddShoppingCart } from 'react-icons/md';
import ProductView from '../pages/ProductView';
import Aldata from '../../Language/uz.json';

export default function SearchProduct() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchTerm = params.get("q")?.toLowerCase().trim() || "";

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [liked, setLiked] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const toggleLike = (item) => {
    setLiked((prev) =>
      prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id]
    );
  };

  const isLiked = (id) => liked.includes(id);

  const handleAddToCart = (item) => {
    console.log("Savatga qo‘shildi:", item);
  };

  return (
    <div className="max-w-[1200px] mx-auto mb-[44px] px-4">
      <h2 className="text-[32px] font-medium mb-[24px]">Qidiruv natijalari</h2>

      {filteredProducts.length === 0 ? (
        <p className="text-xl">"{searchTerm}" bo‘yicha hech narsa topilmadi</p>
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
          {filteredProducts.map((phones) => (
            <div
              key={phones.id}
              className="w-full border border-[#80808055] rounded-xl overflow-hidden cursor-pointer hover:shadow-md group relative"
            >
              <div
                onClick={() => toggleLike(phones)}
                className="p-[7px] bg-gray-200 rounded-[8px] absolute right-1 top-1 z-20"
              >
                <IoMdHeart
                  color={isLiked(phones.id) ? "blue" : "white"}
                  className="text-[white] text-[20px]"
                />
              </div>
              <div className="w-full h-[250px]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all"
                  src={phones.image || "/no-image.jpg"}
                  alt={phones.title}
                />
              </div>
              <div className="w-full h-full p-[10px]">
                <h5 className="text-[20px] text-[blue] font-semibold flex items-center gap-[10px]">
                  {phones.price}
                </h5>
                <span className="bg-[#dbdbdb] text-black text-[13px] rounded-md px-[5px] py-[1px] inline-block mt-[4px]">
                  {phones.kredit}
                </span>
                <h6 className="line-clamp-2 mb-[8px] text-[15px] font-medium">
                  {phones.title}
                </h6>
                <button
                  onClick={() => setSelectedProduct(phones)}
                  className="w-full py-[8px] mt-[4px] bg-[blue] text-white text-[16px] flex justify-center items-center rounded-[10px] hover:bg-blue-600"
                >
                  Savatga <MdAddShoppingCart className="ml-2" />
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
