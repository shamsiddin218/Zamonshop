import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { FiMinus, FiPlus } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

export default function ProductView({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedInstallment, setSelectedInstallment] = useState(24);
  const [mainImage, setMainImage] = useState(product.image);

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
    <div onClick={onClose} className='w-full h-[100vh] bg-[#80808075] flex flex-col items-center justify-center fixed top-0 left-0 z-40'>
      <div onClick={(e) => e.stopPropagation()} className='w-[850px] bg-white flex justify-between items-start p-[35px] rounded-[20px] relative '>
        {/* Close tugmasi */}
        <button
          onClick={onClose}
          className='absolute top-3 right-3 text-[24px] text-blue-700 hover:text-red-600'
        >
          <MdClose />
        </button>

        {/* Chap rasm */}
        <article className='w-[400px] h-[500px] shadow-lg rounded-[18px] overflow-hidden'>
          <img className='w-full h-full object-cover transition-all duration-120 hover:scale-105' src={mainImage} alt="" />
        </article>

        {/* O‘ng tafsilotlar */}
        <article className='w-[340px] pl-3'>
          {/* Small images */}
          <article className='w-full flex justify-between mb-[14px]'>
            {(product.smallimg || []).slice(0, 4).map((img, index) => {
              const isActive = img === mainImage;
              return (
                <article
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`w-[70px] h-[70px] rounded-[12px] overflow-hidden cursor-pointer 
                              border-2 ${isActive ? 'border-[blue]' : 'border-gray-300'}`}
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

          <h2 className='text-[24px] font-semibold mb-[10px]'>{product.title}</h2>

          <article className='w-full border rounded-lg p-[10px]'>
            <h3 className='text-[16px] font-medium text-gray-500'>Jami narxi</h3>
            <h4 className='text-[20px] font-medium text-[blue] mb-[10px]'>{totalPrice()} so'm</h4>

            {/* Muddatli to'lov */}
            <article className='w-full bg-gray-200 rounded-md p-[10px] mb-[10px]'>
              <h4 className='mb-[5px]'>Muddatli to'lov</h4>
              <article className='w-full flex justify-between items-center bg-gray-300 px-[5px] rounded-md mb-[8px] py-[5px]'>
                {installments.map((month) => (
                  <button
                    key={month}
                    onClick={() => setSelectedInstallment(month)}
                    className={`text-gray-600 py-[2px] px-[5px] rounded-md transition-all duration-100 
                      ${selectedInstallment === month ? 'bg-gray-100 text-gray-600' : 'hover:bg-gray-200 bg-gray-300'}`}>
                    {month} oy
                  </button>
                ))}
              </article>

              <button className='flex w-full gap-[5px] items-center justify-between'>
                <article className='flex gap-2'>
                  <p className='bg-[blue] text-[white] rounded-md px-[6px] py-[1px]'>{calculateMonthlyPrice()} so'm</p>
                  <span>x {selectedInstallment} oy</span>
                </article>
                <FaAngleRight />
              </button>
            </article>

            {/* Quantity */}
            <article className='w-full flex justify-between items-center border p-[10px] rounded-md mb-[10px]'>
              <button onClick={decrement} className='bg-gray-200 text-gray-600 p-[5px] rounded-md text-[22px]'><FiMinus /></button>
              <p className='text-[blue] font-medium text-[25px]'>{quantity}</p>
              <button onClick={increment} className='bg-gray-200 text-gray-600 p-[5px] rounded-md text-[20px]'><FiPlus /></button>
            </article>

            {/* Savatga qo'shish */}
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
              className='w-full p-[12px] rounded-xl bg-[blue] text-[white] font-normal text-[17px] hover:bg-blue-800'>
              Savatga qo'shish
            </button>
          </article>
        </article>
      </div>
    </div>
  );
}
