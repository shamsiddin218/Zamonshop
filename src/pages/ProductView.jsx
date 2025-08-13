import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { FiMinus, FiPlus } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export default function ProductView({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedInstallment, setSelectedInstallment] = useState(24);
  const [mainImage, setMainImage] = useState(product.image);
  const navigate = useNavigate();
  const calculateMonthlyPrice = () => {
    const total = Number(product.price.replace(/\D/g, '')) || 0;
    return Math.round(total / selectedInstallment).toLocaleString('ru-RU');
  };

  const totalPrice = () => {
    const total = Number(product.price.replace(/\D/g, '')) || 0;
    return (total * quantity).toLocaleString('ru-RU');
  };

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const installments = [24, 12, 6, 3];

  return (
    <div
  onClick={onClose}
  className="fixed inset-0 z-50 flex items-center justify-center bg-[#80808075] dark:bg-[#00000075]"
>
  <div
    onClick={(e) => e.stopPropagation()}
    className="w-full h-full md:h-auto md:max-h-[90vh] max-w-[900px] bg-white dark:bg-gray-900 flex flex-col md:flex-row p-4 sm:p-6 md:p-8 rounded-none md:rounded-2xl shadow-2xl dark:shadow-black relative overflow-y-auto"
  >
    {/* Close Button */}
    <button
      onClick={onClose}
      className="absolute top-3 right-3 text-2xl text-blue-700 dark:text-white hover:text-red-600 z-10"
    >
      <MdClose />
    </button>

    {/* Main Image */}
    <article className="w-full md:w-[50%] h-[40vh] sm:h-[50vh] md:h-[500px] flex-shrink-0 rounded-xl overflow-hidden shadow-md mb-4 md:mb-0">
      <img
        className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
        src={mainImage}
        alt=""
      />
    </article>

    {/* Details */}
    <article className="w-full md:w-[50%] md:pl-4 flex flex-col">
      {/* Small Images */}
      <article className="flex flex-wrap gap-2 mb-3">
        {(product.smallimg || []).map((img, index) => {
          const isActive = img === mainImage;
          return (
            <div
              key={index}
              onClick={() => setMainImage(img)}
              className={`w-[58px] h-[58px] sm:w-[70px] sm:h-[70px] rounded-lg overflow-hidden cursor-pointer border-2 transition
                ${isActive ? "border-blue-500" : "border-gray-300 dark:border-gray-600"}`}
            >
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform"
                src={img}
                alt=""
              />
            </div>
          );
        })}
      </article>

      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
        {product.title}
      </h2>

      {/* Price & Installment */}
      <div className="border rounded-lg p-3 dark:border-gray-700 dark:bg-gray-800 flex flex-col gap-3">
        <div>
          <h3 className="text-sm sm:text-base text-gray-500 dark:text-gray-300">
            Jami narxi
          </h3>
          <h4 className="text-lg sm:text-xl font-medium text-blue-600 dark:text-blue-400">
            {totalPrice()} so'm
          </h4>
        </div>

        {/* Installments */}
        <div className="bg-gray-200 dark:bg-gray-700 rounded-md p-2">
          <h4 className="mb-2 text-gray-800 dark:text-gray-200">
            Muddatli to'lov
          </h4>
          <div className="flex flex-wrap gap-2">
            {installments.map((month) => (
              <button
                key={month}
                onClick={() => setSelectedInstallment(month)}
                className={`px-2 py-1 rounded-md text-sm transition
                  ${
                    selectedInstallment === month
                      ? "bg-white text-gray-800 dark:bg-gray-100 dark:text-black"
                      : "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"
                  }`}
              >
                {month} oy
              </button>
            ))}
          </div>

          <button
            onClick={() =>
              navigate("/term", {
                state: {
                  product: {
                    name: product.title,
                    price: product.price,
                    image: product.image,
                  },
                  selectedInstallment,
                  quantity,
                },
              })
            }
            className="flex w-full justify-between items-center text-sm text-gray-700 dark:text-gray-300 mt-2"
          >
            <div className="flex gap-2 items-center">
              <p className="bg-blue-600 text-white dark:bg-blue-500 px-2 py-[1px] rounded-md">
                {calculateMonthlyPrice()} so'm
              </p>
              <span>x {selectedInstallment} oy</span>
            </div>
            <FaAngleRight />
          </button>
        </div>

        {/* Quantity */}
        <div className="flex justify-between items-center border p-2 rounded-md dark:border-gray-700">
          <button
            onClick={decrement}
            className="bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-white p-2 rounded-md text-lg"
          >
            <FiMinus />
          </button>
          <p className="text-blue-600 dark:text-blue-400 font-medium text-xl">
            {quantity}
          </p>
          <button
            onClick={increment}
            className="bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-white p-2 rounded-md text-lg"
          >
            <FiPlus />
          </button>
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => {
            const newItem = {
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
              quantity,
            };
            onAddToCart(newItem);
            onClose();
          }}
          className="w-full p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 text-base sm:text-lg"
        >
          Savatga qo'shish
        </button>
      </div>
    </article>
  </div>
</div>


  );
}
