import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

export default function KreditBuy() {
  const location = useLocation();
  const product = location.state?.product || {};
  const selectedInstallment = location.state?.selectedInstallment || '';
  const quantity = location.state?.quantity || 1;

  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    phone: '',
    address: '',
    cardNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, age, phone, address, cardNumber } = formData;
    if (!fullName || !age || !phone || !address || !cardNumber) {
      toast.error("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    try {
      const message = `🧾 *Muddatli to‘lov arizasi*\n\n` +
        `👤 *Ismi:* ${fullName}\n` +
        `🎂 *Yoshi:* ${age}\n` +
        `📞 *Telefon:* ${phone}\n` +
        `🏠 *Manzil:* ${address}\n` +
        `💳 *Karta raqam:* ${cardNumber}\n\n` +
        `📦 *Mahsulot:* ${product.name || 'Nomaʼlum'}\n` +
        `💰 *Narxi:* ${product.price || 0}` +
        `🗓 *Muddat:* ${selectedInstallment} oy\n` +
        `🔢 *Soni:* ${quantity} dona`;

      await axios.post(`https://api.telegram.org/bot${import.meta.env.VITE_BOT_TOKEN}/sendMessage`, {
        chat_id: import.meta.env.VITE_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      });

      toast.success("So‘rov muvaffaqiyatli yuborildi!");

      // Reset form
      setFormData({
        fullName: '',
        age: '',
        phone: '',
        address: '',
        cardNumber: '',
      });
    } catch (error) {
      toast.error("Xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko‘ring.");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white px-4 py-10">
      <Toaster />
      <div className="max-w-2xl mx-auto bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700 pb-3">
          Muddatli to‘lov orqali xarid
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-1">To‘liq ism sharif</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ism familiya"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm mb-1">Yosh</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masalan: 25"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-1">Telefon raqam</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+998 XX XXX XX XX"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Yashash manzili</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="To‘liq manzil"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Karta raqam (16 raqam)</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              maxLength={16}
              className="w-full px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="XXXX XXXX XXXX XXXX"
            />
          </div>

          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-xl mt-6 space-y-1 text-sm">
            <h3 className="text-lg font-semibold mb-2">Mahsulot ma’lumotlari:</h3>
            <p><strong>Nomi:</strong> {product?.name || 'Nomaʼlum'}</p>
            <p><strong>Narxi:</strong> {product?.price} so‘m</p>
            <p><strong>Muddat:</strong> {selectedInstallment} oy</p>
            <p><strong>Soni:</strong> {quantity} dona</p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-200 mt-4"
          >
            Muddatli to‘lov orqali xarid qilish
          </button>
        </form>
      </div>
    </div>
  );
}
