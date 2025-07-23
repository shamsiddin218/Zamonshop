import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Buyproduct() {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartItems || [];

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    paymentType: '',
    cardNumber: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (formData.name.trim().length < 3) newErrors.name = 'Ism kamida 3ta harf bo‘lishi kerak.';
    if (formData.surname.trim().length < 3) newErrors.surname = 'Familiya kamida 3ta harf bo‘lishi kerak.';
    if (!/^\d{9}$/.test(formData.phone)) newErrors.phone = 'Telefon raqam 9 xonali bo‘lishi kerak.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = 'Email noto‘g‘ri kiritilgan.';
    if (!formData.paymentType) newErrors.paymentType = 'To‘lov usulini tanlang.';
    if (formData.paymentType === 'card' && !/^\d{16}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = 'Karta raqami 16 xonali bo‘lishi kerak.';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Buyurtma qabul qilinmadi!");
      return;
    }

    toast.success("Buyurtmangiz qabul qilindi!");

    const itemsText = cartItems.map((item, idx) => {
      const numericPrice = Number(item.price.replace(/\D/g, ''));
      return `\n${idx + 1}. <b>${item.title}</b> — ${item.quantity} dona, ${numericPrice.toLocaleString()} so'm`;
    }).join('');

    const message = `
🛒 <b>Yangi buyurtma</b>
👤 <b>Ism:</b> ${formData.name}
👥 <b>Familiya:</b> ${formData.surname}
📞 <b>Telefon:</b> +998${formData.phone}
📧 <b>Email:</b> ${formData.email}
💳 <b>To‘lov turi:</b> ${formData.paymentType}
${formData.paymentType === "card" ? `💳 <b>Karta:</b> ${formData.cardNumber}` : ''}
📦 <b>Buyurtmadagi mahsulotlar:</b> ${itemsText || "Yo‘q"}
    `;

    try {
      await fetch(`https://api.telegram.org/bot${import.meta.env.VITE_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: import.meta.env.VITE_CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      });
    } catch (error) {
      console.error("Telegramga yuborishda xatolik:", error);
      toast.error("Telegramga yuborilmadi!");
    }

    setFormData({
      name: '',
      surname: '',
      phone: '',
      email: '',
      paymentType: '',
      cardNumber: ''
    });
  };

  return (
    <div className='max-w-[1200px] m-auto flex justify-center items-center mb-[30px]'>
      <Toaster position='top-right' />
      <div className='border rounded-lg border-[gray] p-[15px] w-full max-w-[500px]'>
        <h2 className='text-[30px] mb-[24px]'>Buyurtmani rasmiylashtiring</h2>

        {/* Ism */}
        <article className='mb-[24px]'>
          <h3 className='mb-[10px]'>Ismingiz:</h3>
          <input
            name="name"
            onChange={handleChange}
            value={formData.name}
            className='w-full p-[8px] border rounded-md outline-none focus:border-[blue]'
            type="text"
            placeholder='Ismingizni kiriting'
          />
          {errors.name && <p className='text-[red] mt-[4px] text-[14px]'>{errors.name}</p>}
        </article>

        {/* Familiya */}
        <article className='mb-[24px]'>
          <h3 className='mb-[10px]'>Familiyangiz:</h3>
          <input
            name="surname"
            onChange={handleChange}
            value={formData.surname}
            className='w-full p-[8px] border rounded-md outline-none focus:border-[blue]'
            type="text"
            placeholder='Familiyangizni kiriting'
          />
          {errors.surname && <p className='text-[red] mt-[4px] text-[14px]'>{errors.surname}</p>}
        </article>

        {/* Telefon */}
        <article className='mb-[24px]'>
          <h3 className='mb-[10px]'>Telefon raqam:</h3>
          <article className='flex items-center border rounded-md px-[5px]'>
            <span>+998</span>
            <input
              name="phone"
              maxLength={9}
              onChange={handleChange}
              value={formData.phone}
              className='w-full p-[8px] outline-none'
              type="text"
              placeholder='xx xxx xx xx'
            />
          </article>
          {errors.phone && <p className='text-[red] mt-[4px] text-[14px]'>{errors.phone}</p>}
        </article>

        {/* Email */}
        <article className='mb-[24px]'>
          <h3 className='mb-[10px]'>Email:</h3>
          <input
            name="email"
            onChange={handleChange}
            value={formData.email}
            className='w-full p-[8px] border rounded-md outline-none focus:border-[blue]'
            type="email"
            placeholder='Emailingizni kiriting'
          />
          {errors.email && <p className='text-[red] mt-[4px] text-[14px]'>{errors.email}</p>}
        </article>

        {/* To‘lov turi */}
        <article className='flex justify-center mb-[24px]'>
          <div className='flex border rounded-[30px] p-[5px] gap-2'>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, paymentType: 'cash' })}
              className={`py-[6px] px-[14px] rounded-[30px] ${formData.paymentType === "cash" ? "bg-blue-200 text-blue-800" : ""}`}
            >
              Naqt
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, paymentType: 'card' })}
              className={`py-[6px] px-[14px] rounded-[30px] ${formData.paymentType === "card" ? "bg-blue-200 text-blue-800" : ""}`}
            >
              Kartada
            </button>
          </div>
        </article>
        {errors.paymentType && <p className='text-[red] -mt-[20px] mb-[20px] text-[14px] text-center'>{errors.paymentType}</p>}

        {/* Karta raqami */}
        {formData.paymentType === "card" && (
          <article className='mb-[24px]'>
            <h3 className='mb-[10px]'>Karta raqami:</h3>
            <input
              name="cardNumber"
              onChange={handleChange}
              value={formData.cardNumber}
              className='w-full p-[8px] border rounded-md outline-none focus:border-[blue]'
              type="text"
              placeholder='16 xonali karta raqamingiz'
            />
            {errors.cardNumber && <p className='text-[red] mt-[4px] text-[14px]'>{errors.cardNumber}</p>}
          </article>
        )}

        {/* Submit tugmasi */}
        <button
          onClick={handleSubmit}
          className='w-full p-[10px] bg-[blue] text-white rounded-lg hover:bg-[#006aff]'
        >
          Buyurtma berish
        </button>
      </div>
    </div>
  );
}
