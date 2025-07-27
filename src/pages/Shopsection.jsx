// ShopSection.jsx - Premium Redesign
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import toast, { Toaster } from "react-hot-toast";
import { Trash2, Pencil, Star } from "lucide-react";
import Question from "./Question";

const defaultReviews = [
  { text: "Mahsulot sifati juda zo'r! Rosti yoqdi.", date: "2025-07-26 14:35", rating: 5 },
  { text: "Xizmat darajasi yuqori, tavsiya qilaman.", date: "2025-07-25 10:21", rating: 4 },
  { text: "Tez yetkazildi, hammasi yaxshi.", date: "2025-07-24 17:44", rating: 4 },
  { text: "Original mahsulot uchun rahmat.", date: "2025-07-23 09:11", rating: 5 },
  { text: "Yana xarid qilaman, ishonchli sayt!", date: "2025-07-22 20:56", rating: 5 },
  { text: "Hamyonbop narx va tezkor yetkazib berish.", date: "2025-07-21 08:30", rating: 4 }
];

const getLocalReviews = () => {
  const data = localStorage.getItem("zamonshop-reviews");
  return data ? JSON.parse(data) : [];
};

export default function ShopSection() {
  const [reviews, setReviews] = useState([...defaultReviews, ...getLocalReviews()]);
  const [input, setInput] = useState("");
  const [rating, setRating] = useState(0);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      "zamonshop-reviews",
      JSON.stringify(reviews.slice(defaultReviews.length))
    );
  }, [reviews]);

  const handleSubmit = () => {
    if (!input.trim()) return toast.error("Fikr bo'sh bo'lmasligi kerak!");
    if (rating === 0) return toast.error("Iltimos, reyting bering!");

    const updated = [...reviews];
    if (editingIndex !== null) {
      updated[editingIndex] = { ...updated[editingIndex], text: input, rating };
      toast.success("Fikr tahrirlandi!");
      setEditingIndex(null);
    } else {
      updated.splice(defaultReviews.length, 0, {
        text: input,
        rating,
        date: new Date().toLocaleString(),
      });
      toast.success("Fikr qo‘shildi!");
    }

    setReviews(updated);
    setInput("");
    setRating(0);
  };

  const handleDelete = (index) => {
    if (index < defaultReviews.length) return;
    const updated = [...reviews];
    updated.splice(index, 1);
    setReviews(updated);
    toast("Fikr o‘chirildi", { icon: "🗑️" });
  };

  return (
    <section className=" dark:text-white min-h-screen py-24 px-6">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="400" className="text-4xl font-bold tracking-tight mb-3">Do‘konimiz haqida</h2>
          <p data-aos="fade-up" className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
            Platformamiz sinov jarayonida. Yaqinda rasmiy ishga tushadi. Sizning fikringiz biz uchun muhim!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {["Tez yetkazib berish", "100% Original mahsulotlar", "24/7 Mijozlar qo‘llab-quvvatlovi"].map((title, i) => (
            <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="400" key={i} className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p  className="text-sm text-neutral-600 dark:text-neutral-400">
                {i === 0 && "Buyurtmangizni eng qisqa muddatda yetkazamiz."}
                {i === 1 && "Faqat sertifikatlangan brend mahsulotlari."}
                {i === 2 && "Siz uchun har doim online qo‘llab-quvvatlov."}
              </p>
            </div>
          ))}
        </div>

        <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="400" className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 mb-16 shadow-md">
          <textarea
            rows={4}
            placeholder="Fikringizni yozing..."
            className="w-full bg-transparent border border-neutral-300 dark:border-neutral-600 rounded-md px-4 py-2 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-3"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={20}
                  onClick={() => setRating(i)}
                  className={`cursor-pointer ${i <= rating ? "fill-blue-400 text-blue-400" : "text-neutral-400 dark:text-neutral-600"}`}
                />
              ))}
            </div>
            <button
              onClick={handleSubmit}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-5 rounded-md"
            >
              {editingIndex !== null ? "Saqlash" : "Qo‘shish"}
            </button>
          </div>
        </div>

        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={20}
          className="mb-[70px]"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 h-full flex flex-col justify-between shadow">
                <div>
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        size={18}
                        className={`${i <= review.rating ? "fill-blue-400 text-blue-400" : "text-neutral-300 dark:text-neutral-600"}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm mb-3 text-neutral-700 dark:text-neutral-300">{review.text}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">{review.date}</p>
                </div>
                {idx >= defaultReviews.length && (
                  <div className="flex gap-3 justify-end mt-4">
                    <button onClick={() => {
                      setInput(review.text);
                      setRating(review.rating);
                      setEditingIndex(idx);
                    }} className="text-indigo-500 hover:text-indigo-400">
                      <Pencil size={18} />
                    </button>
                    <button onClick={() => handleDelete(idx)} className="text-red-500 hover:text-red-400">
                      <Trash2 size={18} />
                    </button>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Question/>
    </section>
  );
}
