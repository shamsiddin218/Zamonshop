import React, { useState } from 'react'
import { RiDeleteBin5Fill } from "react-icons/ri"
import { FaTruckFast } from "react-icons/fa6"
import { NavLink } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

export default function ProductCard({ cartItems, onDelete }) {
  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [promoError, setPromoError] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = Number(item.price.replace(/\D/g, '')) || 0;
    return sum + price * item.quantity;
  }, 0);

  const discountedPrice = discountApplied ? totalPrice * 0.75 : totalPrice;

  const handleApplyPromo = () => {
    const wonPromoCode = localStorage.getItem("promo_code_won");

    if (promoCode.trim() === wonPromoCode) {
      if (!discountApplied) {
        toast.success("🎉 Tabriklaymiz! Promo kod muvaffaqiyatli qo‘llandi.");
        setDiscountApplied(true);
        setPromoError(false);
        setPromoCode("");
      } else {
        toast("Promo kod allaqachon qo‘llangan", { icon: "⚠️" });
      }
    } else {
      toast.error("Promo kod noto‘g‘ri yoki muddati tugagan.");
      setPromoError(true);
    }
  };

  return (
    <>
  <Toaster position="top-right" />
  {cartItems.length === 0 ? (
    <div className='max-w-[1200px] m-auto flex flex-col justify-center items-center mb-[20px] dark:text-white text-center px-3  mt-[125px] '>
      <img className='w-[320px] xs:w-[400px] sm:w-[470px] mb-[10px]' src="/images/emptycard.webp" alt="" />
      <h2 className='text-[20px] xs:text-[22px] sm:text-[24px] text-[#1b1b1ba2] mb-[10px] dark:text-[gray]'>Sizning savatingizda mahsulot mavjud emas</h2>
      <NavLink to={'/all'}>
        <button className='py-[8px] px-[25px] sm:px-[40px] bg-[blue] text-[white] transition-all duration-100 rounded-lg hover:bg-[#4646fb]'>
          Mahsulot qo'shish
        </button>
      </NavLink>
    </div>
  ) : (
    <div className='max-w-[1200px] m-auto flex flex-col lg:flex-row justify-between items-start gap-4 mb-[50px] dark:text-white px-3 mt-[110px]'>
      
      {/* Mahsulotlar */}
      <article className='w-full lg:w-[760px] flex flex-col gap-[12px]'>
        {cartItems.map((item, index) => (
          <article key={index} className='w-full flex flex-col sm:flex-row justify-between gap-3 items-start border border-[#8080808a] rounded-md p-[15px] dark:border-gray-600 dark:bg-[#1f1f1f]'>
            <article className='w-full sm:w-[150px] h-[200px] sm:h-[150px] bg-red-50 dark:bg-[#333] rounded-md overflow-hidden'>
              <img className='w-full h-full' src={item.image} alt={item.title} />
            </article>
            <article className='w-full sm:w-[400px] flex flex-col gap-[6px]'>
              <h2 className='text-[20px] sm:text-[23px] font-medium'>{item.title}</h2>
              <p className='text-[blue] text-[17px]'>{item.price} so'm</p>
              <p className='text-gray-500 dark:text-gray-300 text-[15px]'>Miqdor: {item.quantity}</p>
            </article>
            <article
              onClick={() => onDelete(item.id)}
              className='text-[blue] text-[25px] cursor-pointer hover:text-red-500 self-end sm:self-start'>
              <RiDeleteBin5Fill />
            </article>
          </article>
        ))}
      </article>

      {/* Buyurtma qisqacha */}
      <article className='w-full lg:w-[400px] border rounded-md border-[#80808096] p-[17px] dark:border-gray-600 dark:bg-[#1f1f1f] stick right-0'>
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
        <article className='border p-[9px] rounded-md mb-[20px] dark:border-gray-600'>
          <h3 className='text-[18px] mb-[10px]'>
            ZamonShopda <span className='font-medium text-[blue]'>25%</span> gacha chegirma
          </h3>
          <input
            className={`w-full p-[5px] border ${promoError ? "border-red-500" : "border-gray-400 dark:border-gray-600"} rounded-md outline-none mb-[10px] dark:bg-[#2d2d2d] dark:text-white`}
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
            className='w-full bg-[#f0f0f0] text-[blue] font-medium py-[6px] rounded-md hover:bg-blue-100 dark:bg-[#2a2a2a] dark:hover:bg-[#3b3b3b]'>
            Promo kodni qo‘llash
          </button>
        </article>

        <NavLink to={'/productbuy'} state={{ cartItems }}>
          <button className='w-full bg-[blue] transition-all duration-150 text-white py-[8px] rounded-md mb-[10px] hover:bg-[#0044ff]'>
            Buyurtmani rasmiylashtirish
          </button>
        </NavLink>
      </article>
    </div>
  )}
</>

  )
}  
