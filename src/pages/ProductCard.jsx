import React from 'react'
import { RiDeleteBin5Fill } from "react-icons/ri"
import { FaTruckFast } from "react-icons/fa6"
import { NavLink } from 'react-router-dom'

export default function ProductCard({ cartItems, onDelete }) {
  // Umumiy mahsulotlar soni
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  // Umumiy narx
  const totalPrice = cartItems.reduce((sum, item) => {
    const price = Number(item.price.replace(/\D/g, '')) || 0
    return sum + price * item.quantity
  }, 0)

  return (
    <>
    {cartItems.length === 0 ? (
      <div className=' max-w-[1200px] m-auto flex flex-col justify-center items-center mb-[20px]'>
        <img className=' w-[470px] mb-[10px]' src="/images/emptycard.webp" alt="" />
        <h2 className=' text-[24px] text-[#1b1b1ba2] mb-[10px]'>Sizning savatingizda mahsulot mavjud emas</h2>
        <NavLink to={'/all'}>
        <button className=' py-[8px] px-[40px] bg-[blue] text-[white] transition-all duration-100 rounded-lg hover:bg-[#4646fb]'>Mahsulot qo'shish</button>
        </NavLink>
      </div>
    ) : (

    <div className='max-w-[1200px] m-auto flex justify-between flex-wrap gap-4 mb-[50px]'>

      {/* Mahsulotlar ro'yxati */}
      <article className='w-[650px] flex flex-col gap-[12px]'>
        {cartItems.map((item, index) => (
          <article key={index} className='w-full h-[180px] flex justify-between gap-3 items-start border border-[#8080808a] rounded-md p-[15px]'>
            <article className='w-[150px] h-[150px] rounded-md overflow-hidden'>
              <img className='w-full h-full object-cover' src={item.image} alt={item.title} />
            </article>
            <article className='flex flex-col gap-[6px]'>
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
          <p>{totalPrice.toLocaleString('ru-RU')} so'm</p>
        </article>
        <article className='flex text-blue-400 mb-[10px] justify-start items-center gap-[10px]'>
          <p>O'zbekiston bo'ylab yetkazib beramiz</p>
          <FaTruckFast />
        </article>
        <button className='w-full bg-[blue] transition-all duration-150 text-white py-[8px] rounded-md mb-[10px] hover:bg-[#0044ff]'>
          Buyurtmani rasmiylashtirish
        </button>
        <article className='border p-[9px] rounded-md'>
          <h3 className='text-[18px] mb-[10px]'>ZamonShopda <span className='font-medium text-[blue]'>25%</span> gacha chegirmaga ega bo'ling</h3>
          <input className='w-full p-[5px] border border-gray-400 rounded-md outline-none' type="text" placeholder='promo kodingizni kiriting...' />
        </article>
      </article>

    </div>
    )}
    </>
  )
}
