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
  className='w-full h-[100vh] bg-[#80808075] dark:bg-[#00000075] flex items-center justify-center fixed top-0 left-0 z-50'
>
  <div
    onClick={(e) => e.stopPropagation()}
    className='w-[95%] sm:w-[90%] md:w-[850px] bg-white dark:bg-gray-900 flex flex-col md:flex-row justify-between items-start p-[20px] md:p-[35px] rounded-[20px] relative shadow-2xl dark:shadow-black'
  >
    {/* Close Button */}
    <button
      onClick={onClose}
      className='absolute top-3 right-3 text-[24px] text-blue-700 dark:text-white hover:text-red-600'
    >
      <MdClose />
    </button>

    {/* Main Image */}
    <article className='w-full md:w-[400px] h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] rounded-[18px] overflow-hidden shadow-md mb-4 md:mb-0'>
      <img className='w-full h-full object-cover transition-all duration-120 hover:scale-105' src={mainImage} alt="" />
    </article>

    {/* Details */}
    <article className='w-full md:w-[340px] md:pl-3'>
      {/* Small images */}
      <article className='w-full flex flex-wrap justify-start gap-2 md:justify-between mb-[14px]'>
        {(product.smallimg || []).map((img, index) => {
          const isActive = img === mainImage;
          return (
            <article
              key={index}
              onClick={() => setMainImage(img)}
              className={`w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-[12px] overflow-hidden cursor-pointer border-2 
                ${isActive ? 'border-blue-500' : 'border-gray-300 dark:border-gray-600'}`}
            >
              <img
                className='object-cover w-full h-full transition-all duration-100 hover:scale-105'
                src={img}
                alt=""
              />
            </article>
          );
        })}
      </article>

      <h2 className='text-[20px] sm:text-[22px] md:text-[24px] font-semibold mb-[10px] text-gray-900 dark:text-white'>{product.title}</h2>

      <article className='w-full border rounded-lg p-[10px] dark:border-gray-700 dark:bg-gray-800'>
        <h3 className='text-[14px] sm:text-[16px] font-medium text-gray-500 dark:text-gray-300'>Jami narxi</h3>
        <h4 className='text-[18px] sm:text-[20px] font-medium text-blue-600 dark:text-blue-400 mb-[10px]'>{totalPrice()} so'm</h4>

        {/* Installment */}
        <article className='w-full bg-gray-200 dark:bg-gray-700 rounded-md p-[10px] mb-[10px]'>
          <h4 className='mb-[5px] text-gray-800 dark:text-gray-200'>Muddatli to'lov</h4>
          <article className='w-full flex flex-wrap gap-1 justify-between items-center bg-gray-300 dark:bg-gray-600 px-[5px] rounded-md mb-[8px] py-[5px]'>
            {installments.map((month) => (
              <button
                key={month}
                onClick={() => setSelectedInstallment(month)}
                className={`py-[2px] px-[5px] rounded-md text-sm transition-all duration-100
                  ${selectedInstallment === month
                    ? 'bg-white text-gray-800 dark:bg-gray-100 dark:text-black'
                    : 'hover:bg-gray-200 bg-gray-300 dark:hover:bg-gray-500 dark:bg-gray-600 text-gray-600 dark:text-gray-300'}`}
              >
                {month} oy
              </button>
            ))}
          </article>

          <button
            onClick={() => {
              navigate("/term", {
                state: {
                  product: {
                    name: product.title,
                    price: product.price,
                    image: product.image,
                  },
                  selectedInstallment: selectedInstallment,
                  quantity: quantity,
                },
              });
            }}
            className='flex w-full gap-[5px] items-center justify-between text-sm text-gray-700 dark:text-gray-300'
          >
            <article className='flex gap-2 items-center'>
              <p className='bg-blue-600 text-white dark:bg-blue-500 px-[6px] py-[1px] rounded-md'>
                {calculateMonthlyPrice()} so'm
              </p>
              <span>x {selectedInstallment} oy</span>
            </article>
            <FaAngleRight />
          </button>
        </article>

        {/* Quantity */}
        <article className='w-full flex justify-between items-center border p-[10px] rounded-md mb-[10px] dark:border-gray-700'>
          <button
            onClick={decrement}
            className='bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-white p-[5px] rounded-md text-[22px]'
          >
            <FiMinus />
          </button>
          <p className='text-blue-600 dark:text-blue-400 font-medium text-[22px] sm:text-[25px]'>{quantity}</p>
          <button
            onClick={increment}
            className='bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-white p-[5px] rounded-md text-[20px]'
          >
            <FiPlus />
          </button>
        </article>

        {/* Add to cart */}
        <button
          onClick={() => {
            const newItem = {
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
              quantity: quantity,
            };
            onAddToCart(newItem);
            onClose();
          }}
          className='w-full p-[10px] sm:p-[12px] rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[16px] sm:text-[17px] dark:bg-blue-500 dark:hover:bg-blue-600'
        >
          Savatga qo'shish
        </button>
      </article>
    </article>
  </div>
</div>

  );
}
