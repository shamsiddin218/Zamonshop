import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function Question() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirm, setConfirm] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (name.trim().length < 3) {
      newErrors.name = "Ismingiz kamida 3 ta belgi bo‘lishi kerak.";
      valid = false;
    }

    if (!email.endsWith("@gmail.com")) {
      newErrors.email = "Faqat @gmail.com email manzili qabul qilinadi.";
      valid = false;
    }

    if (message.trim().length === 0) {
      newErrors.message = "Iltimos, izoh yoki savolingizni kiriting kiriting.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!confirm) {
      toast.error("Iltimos, xabar yuborish uchun ruxsat bering (checkbox).");
      return;
    }

    if (!validate()) {
      toast.error("Xabar yuborilmadi. Ma'lumotlarni to‘g‘ri to‘ldiring.");
      return;
    }

    const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_CHAT_ID;

    const text = `
🧾 *Yangi murojat!*

👤 *Ismi:* ${name}
📧 *Email:* ${email}
💬 *Xabar:* ${message}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text,
            parse_mode: "Markdown",
          }),
        }
      );

      if (response.ok) {
        toast.success(" Xabar yuborildi!");
        setName("");
        setEmail("");
        setMessage("");
        setConfirm(false);
        setErrors({ name: "", email: "", message: "" });
      } else {
        toast.error("Xabar yuborishda xatolik yuz berdi.");
      }
    } catch (error) {
      toast.error("Telegram bilan ulanishda xatolik!");
      console.error("Telegram error:", error);
    }
  };

  return (
    <div className="max-w-[1200px] m-auto bg-[#80808031] dark:bg-[#1f1f1f] p-[30px] px-[50px] rounded-md mb-[50px] text-black dark:text-white">
      <Toaster />
      <h2
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="400"
        className="text-[42px] font-medium text-center mb-[30px]"
      >
        Har qanday <span className="text-[blue]">izoh yoki savol</span>
      </h2>

      <article className="flex w-full justify-between items-start">
        <article className="w-[500px]">
          <form onSubmit={handleSubmit}>
            <article className="mb-[20px]">
              <p className="mb-[10px] text-[20px] font-medium">
                Ism va Familiyangiz
              </p>
              <input
                className="w-full p-[10px] outline-none rounded-md bg-white dark:bg-[#2a2a2a] text-black dark:text-white border border-gray-300 dark:border-gray-600"
                type="text"
                placeholder="Ism familiyangiz"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-2">{errors.name}</p>
              )}
            </article>

            <article className="mb-[20px]">
              <p className="mb-[10px] text-[20px] font-medium">Emailingiz</p>
              <input
                className="w-full p-[10px] outline-none rounded-md bg-white dark:bg-[#2a2a2a] text-black dark:text-white border border-gray-300 dark:border-gray-600"
                type="email"
                placeholder="Emailingiz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
              )}
            </article>

            <article className="mb-[20px]">
              <p className="mb-[10px] text-[20px] font-medium">
                Izohingiz yoki savolingiz
              </p>
              <textarea
                className="w-full p-[10px] h-[180px] outline-none rounded-md bg-white dark:bg-[#2a2a2a] text-black dark:text-white border border-gray-300 dark:border-gray-600"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-2">{errors.message}</p>
              )}
            </article>

            <article className="flex justify-start gap-3 mb-[40px]">
              <input
                className="w-[20px] text-[20px] font-medium"
                type="checkbox"
                checked={confirm}
                onChange={(e) => setConfirm(e.target.checked)}
              />
              <p>Xabar yuborilsinmi</p>
            </article>

            <article className="w-full flex justify-center items-center">
              <button
                type="submit"
                className="py-[10px] px-[20px] bg-[blue] text-white font-medium rounded-md transition-all duration-150 hover:bg-[#4943ff]"
              >
                Xabarni yuborish
              </button>
            </article>
          </form>
        </article>

        <div className="box-3d">
          <iframe
            src="https://my.spline.design/genkubgreetingrobot-BEJT5t4bdIAhgacAXRzXgd9K/"
            frameBorder={0}
            id="d-box"
          />
        </div>
      </article>
    </div>
  );
}
