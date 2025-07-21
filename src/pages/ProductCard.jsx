import React, { useState } from 'react'
import { RiDeleteBin5Fill } from "react-icons/ri"
import { FaTruckFast } from "react-icons/fa6"
import { NavLink } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

export default function ProductCard({ cartItems, onDelete }) {
  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [promoError, setPromoError] = useState(false); // xatolik uchun

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = Number(item.price.replace(/\D/g, '')) || 0;
    return sum + price * item.quantity;
  }, 0);

  const discountedPrice = discountApplied ? totalPrice * 0.75 : totalPrice;

  const handleApplyPromo = () => {
    if (promoCode.trim().toLowerCase() === "zamonshop2025") {
      if (!discountApplied) {
        toast.success("Sizning promo kodingiz to'g'ri ");
        setDiscountApplied(true);
        setPromoError(false);
        setPromoCode(""); // inputni bo'shatish
      } else {
        toast("Promo kod allaqachon qo‘llangan", { icon: "⚠️" });
      }
    } else {
      toast.error("Promo kod noto‘g‘ri ");
      setPromoError(true);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      {cartItems.length === 0 ? (
        <div className=' max-w-[1200px] m-auto flex flex-col justify-center items-center mb-[20px]'>
          <img className=' w-[470px] mb-[10px]' src="/images/emptycard.webp" alt="" />
          <h2 className=' text-[24px] text-[#1b1b1ba2] mb-[10px]'>Sizning savatingizda mahsulot mavjud emas</h2>
          <NavLink to={'/all'}>
            <button className=' py-[8px] px-[40px] bg-[blue] text-[white] transition-all duration-100 rounded-lg hover:bg-[#4646fb]'>Mahsulot qo'shish</button>
          </NavLink>
        </div>
      ) : (
        <div className='max-w-[1200px] m-auto flex justify-between items-start gap-4 mb-[50px]'>
          {/* Mahsulotlar */}
          <article className='w-[760px] flex flex-col gap-[12px]'>
            {cartItems.map((item, index) => (
              <article key={index} className='w-full flex justify-between gap-3 items-start border border-[#8080808a] rounded-md p-[15px]'>
                <article className='w-[150px] h-[150px] bg-red-50 rounded-md overflow-hidden'>
                  <img className='w-full h-full object-cover' src={item.image} alt={item.title} />
                </article>
                <article className='w-[400px] flex flex-col gap-[6px]'>
                  <h2 className='text-[23px] font-medium'>{item.title}</h2>
                  <p className='text-[blue] text-[17px]'>{item.price} so'm</p>
                  <p className='text-gray-500 text-[15px]'>Miqdor: {item.quantity}</p>
                </article>
                <article
                  onClick={() => onDelete(item.id)}
                  className='text-[blue] text-[25px] cursor-pointer hover:text-red-500'>
                  <RiDeleteBin5Fill />
                </article>
              </article>
            ))}
          </article>

          {/* Buyurtma qisqacha */}
          <article className='w-[400px] border rounded-md border-[#80808096] p-[17px]'>
            <h3 className='text-[20px] mb-[10px]'>Sizning buyurtmangiz</h3>
            <article className='flex justify-between mb-[10px]'>
              <h4>Mahsulot ({totalItems} dona)</h4>
              <p className={discountApplied ? "line-through text-gray-400" : ""}>
                {totalPrice.toLocaleString('ru-RU')} so'm
              </p>
            </article>

            {discountApplied && (
              <article className='flex justify-between mb-[10px] text-green-600 font-medium'>
                <span>Chegirmali narx:</span>
                <span>{discountedPrice.toLocaleString('ru-RU')} so'm</span>
              </article>
            )}

            <article className='flex text-blue-400 mb-[10px] justify-start items-center gap-[10px]'>
              <p>O'zbekiston bo'ylab yetkazib beramiz</p>
              <FaTruckFast />
            </article>

            {/* Promo kod qismi */}
            <article className='border p-[9px] rounded-md mb-[20px]'>
              <h3 className='text-[18px] mb-[10px]'>
                ZamonShopda <span className='font-medium text-[blue]'>25%</span> gacha chegirma
              </h3>
              <input
                className={`w-full p-[5px] border ${promoError ? "border-red-500" : "border-gray-400"} rounded-md outline-none mb-[10px]`}
                type="text"
                value={promoCode}
                onChange={(e) => {
                  setPromoCode(e.target.value);
                  setPromoError(false);
                }}
                placeholder='promo kodingizni kiriting...'
              />
              <button
                onClick={handleApplyPromo}
                className='w-full bg-[#f0f0f0] text-[blue] font-medium py-[6px] rounded-md hover:bg-blue-100'>
                Promo kodni qo‘llash
              </button>
            </article>

            <button className='w-full bg-[blue] transition-all duration-150 text-white py-[8px] rounded-md mb-[10px] hover:bg-[#0044ff]'>
              Buyurtmani rasmiylashtirish
            </button>
          </article>
        </div>
      )}
    </>
  )
}
