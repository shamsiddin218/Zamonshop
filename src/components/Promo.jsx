import React, { useState } from 'react';
import toast from 'react-hot-toast';

const questions = [
  {
    question: "Tailwindda text rangini belgilovchi class qaysi?",
    options: ["bg-red-500", "text-blue-600", "font-bold"],
    answer: "text-blue-600",
  },
  {
    question: "Reactda komponent nima bilan boshlanadi?",
    options: ["function", "class", "div"],
    answer: "function",
  },
  {
    question: "HTMLda rasm qo‘shish uchun qaysi teg ishlatiladi?",

    options: ["<link>", "<img>", "<src>"].map((x) => x.toString()),
    answer: "<img>",
  },
  {
    question: "Tailwindda elementga soya berish uchun nima ishlatiladi?",
    options: ["shadow", "box", "opacity"],
    answer: "shadow",
  },
  {
    question: "Reactda `useState` nima uchun kerak?",
    options: ["DOMni boshqarish", "Holat saqlash", "API chaqirish"],
    answer: "Holat saqlash",
  },
];


export default function PromoGame({ onWin }) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [finished, setFinished] = useState(false);
  const [code, setCode] = useState("");

  const handleNext = () => {
    if (!selected) return;

    if (selected === questions[step].answer) {
      setCorrect(correct + 1);
    }

    if (step + 1 < questions.length) {
      setStep(step + 1);
      setSelected(null);
    } else {
      finishGame(correct + (selected === questions[step].answer ? 1 : 0));
    }
  };

  const finishGame = (correctAnswers) => {
  // Kamida 3 ta to‘g‘ri javob bo‘lsa promo kod beriladi
  if (correctAnswers >= 3) {
    const promo = Math.floor(100000 + Math.random() * 900000).toString(); // 6 xonali raqamli kod
    localStorage.setItem("promo_code_won", promo); // Kodni saqlaymiz
    setCode(promo); // Kodni holatga o‘rnatamiz
    onWin && onWin(promo); // Agar `onWin` funksiyasi mavjud bo‘lsa, uni chaqiramiz
    toast.success("🎉 Tabriklaymiz! Siz promo kod yutdingiz");
  } else {
    toast.error("❌ Afsus, yetarli savollarga to‘g‘ri javob bermadingiz.");
  }
  setFinished(true); // O‘yinni tugatamiz
};


  if (finished && code) {
    return (
      <div className="bg-green-100 dark:bg-green-800 p-[100px] rounded-md mt-4 text-center">
        <p className="text-green-700 dark:text-white font-bold text-lg">
          Sizning promo kodingiz:
        </p>
        <div className="text-2xl mt-2 font-mono text-green-800 dark:text-green-300">
          {code}
        </div>
      </div>
    );
  }

  if (finished) return;

  const q = questions[step];

  return (
    <div className=" max-w-[1200px] m-auto border  p-4 rounded-md dark:border-gray-700 mb-[85px] mt-[155px]">
      <h2 className="text-lg font-semibold mb-2 dark:text-white">{q.question}</h2>
      <div className="space-y-2">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(opt)}
            className={`w-full text-left px-4 py-2 rounded-md border ${
              selected === opt
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-800 dark:text-white hover:bg-gray-200"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Keyingisi
      </button>
    </div>
  );
}






















































































