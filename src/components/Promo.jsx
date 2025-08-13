import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { CheckCircle, XCircle } from "lucide-react";

/**
 * PromoGame
 * - Foydalanuvchi barcha savollarga javob beradi.
 * - Agar HAMMASI to'g'ri bo'lsa => promo kod beriladi.
 * - Agar bironta noto'g'ri bo'lsa => yo'qotadi.
 * - 2 ta imkoniyat (attempts). Attempts 0 bo'lsa 24 soatga blok.
 * - Attempts va bloklash ma'lumotlari localStorage'da saqlanadi.
 */

const STORAGE_KEY = "promo_game_state_v1"; // versiya bilan saqlash

const questions = [
  {
    question: "Tailwindda text rangini belgilovchi class qaysi?",
    options: ["bg-red-500", "text-blue-600", "font-bold"],
    answer: "text-blue-600",
  },
  {
    question: "Reactda komponent nimadan boshlanadi?",
    options: ["function", "class", "div"],
    answer: "function",
  },
  {
    question: "HTMLda rasm qo‘shish uchun qaysi teg ishlatiladi?",
    options: ["<link>", "<img>", "<src>"],
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

function makePromoCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// audio: oddiy beep via WebAudio
function playTone(type = "success") {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    if (type === "success") {
      o.frequency.value = 880;
    } else {
      o.frequency.value = 220;
    }
    o.type = "sine";
    o.connect(g);
    g.connect(ctx.destination);
    g.gain.value = 0.05;
    o.start();
    setTimeout(() => {
      o.stop();
      ctx.close();
    }, 250);
  } catch (e) {
    // audio bloklangan bo'lishi mumkin (mobile/autoplay), tinch qo'yamiz
  }
}

export default function PromoGame({ onWin }) {
  const [step, setStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [finished, setFinished] = useState(false);
  const [wonCode, setWonCode] = useState("");
  const [attemptsLeft, setAttemptsLeft] = useState(2);
  const [lockedUntil, setLockedUntil] = useState(null);
  const intervalRef = useRef(null);
  const [countdown, setCountdown] = useState(null);

  // load state from localStorage
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const obj = JSON.parse(raw);
        if (obj.attemptsLeft != null) setAttemptsLeft(obj.attemptsLeft);
        if (obj.lockedUntil) {
          setLockedUntil(obj.lockedUntil);
          const until = new Date(obj.lockedUntil).getTime();
          if (until > Date.now()) {
            startCountdown(until);
          } else {
            // lock expired
            setLockedUntil(null);
            saveState({ attemptsLeft: obj.attemptsLeft ?? 2, lockedUntil: null, promo: obj.promo ?? null });
          }
        }
        if (obj.promo) setWonCode(obj.promo);
      } catch (e) {
        // ignore
      }
    }
    // cleanup on unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const saveState = (partial) => {
    const curRaw = localStorage.getItem(STORAGE_KEY);
    let cur = {};
    if (curRaw) {
      try {
        cur = JSON.parse(curRaw);
      } catch (e) {}
    }
    const next = { ...cur, ...partial };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  function startCountdown(untilTs) {
    if (intervalRef.current) clearInterval(intervalRef.current);
    const tick = () => {
      const left = Math.max(0, untilTs - Date.now());
      setCountdown(left);
      if (left <= 0) {
        clearInterval(intervalRef.current);
        setLockedUntil(null);
        setCountdown(null);
        // unlock and restore attempts to initial (2)
        setAttemptsLeft(2);
        saveState({ attemptsLeft: 2, lockedUntil: null });
        toast.success("⏰ 24 soat tugadi — endi yana urinib ko‘rishingiz mumkin!");
      }
    };
    tick();
    intervalRef.current = setInterval(tick, 1000);
  }

  const selectOption = (qIndex, option) => {
    // prevent selecting if locked or finished
    if (lockedUntil || finished) return;
    const copy = [...selectedAnswers];
    copy[qIndex] = option;
    setSelectedAnswers(copy);
  };

  const handleNext = () => {
    // require selection for current question
    if (selectedAnswers[step] == null) {
      toast.error("Iltimos, biror javobni tanlang.");
      return;
    }
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      // evaluate
      evaluateGame();
    }
  };

  const evaluateGame = () => {
    // require all answered
    const allAnswered = selectedAnswers.every((v) => v !== null);
    if (!allAnswered) {
      toast.error("Iltimos, barcha savollarga javob bering.");
      return;
    }
    // check if all correct
    const allCorrect = questions.every((q, i) => q.answer === selectedAnswers[i]);

    if (allCorrect) {
      const promo = makePromoCode();
      setWonCode(promo);
      saveState({ promo, attemptsLeft, lockedUntil });
      setFinished(true);
      playTone("success");
      toast.success("🎉 Ajoyib! Hammasi to‘g‘ri — promo kod berildi.");
      onWin && onWin(promo);
    } else {
      // lose
      playTone("fail");
      const newAttempts = Math.max(0, attemptsLeft - 1);
      setAttemptsLeft(newAttempts);
      saveState({ attemptsLeft: newAttempts, promo: wonCode });
      setFinished(true);
      toast.error("❌ Afsus, siz yutqazdingiz.");
      if (newAttempts <= 0) {
        // set lock for 24h
        const until = Date.now() + 24 * 60 * 60 * 1000;
        setLockedUntil(until);
        saveState({ attemptsLeft: 0, lockedUntil: until });
        startCountdown(until);
        toast("🔒 Attempts tugadi — 24 soatga bloklandi.", { icon: "🔒" });
      } else {
        toast(`Sizda ${newAttempts} ta imkoniyat qoldi.`, { icon: "ℹ️" });
      }
    }
  };

  const resetForRetry = () => {
    // reset state for next try (only allowed if attemptsLeft > 0 and not locked)
    if (lockedUntil) {
      toast.error("Sizda hozircha imkon yo'q — bloklangan.");
      return;
    }
    if (attemptsLeft <= 0) {
      toast.error("Imkoniyat tugagan. 24 soatdan keyin qayta urinib ko'ring.");
      return;
    }
    setStep(0);
    setSelectedAnswers(Array(questions.length).fill(null));
    setFinished(false);
    setWonCode("");
    toast("🎮 Yaxshi — o'yin qayta boshlanadi!");
  };

  // show countdown nicely
  const formatTime = (ms) => {
    if (!ms) return null;
    const total = Math.floor(ms / 1000);
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    return `${h} soat ${m} min ${s} s`;
  };

  // UI
  // If user already has promo (won previously), show it and block replay
  if (wonCode && finished) {
    return (
      <div className="max-w-xl mx-auto p-6 rounded-lg shadow-lg bg-white dark:bg-slate-800 mt-[125px]">
        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-600" />
          <h3 className="text-lg font-bold dark:text-white">Tabriklaymiz! Siz promo kod yutgansiz</h3>
        </div>
        <p className="mt-3 text-sm dark:text-gray-300">Sizning promo kodingiz saqlandi va ko‘rsatildi:</p>
        <div className="mt-4 bg-green-50 dark:bg-green-900 p-4 rounded-md text-center">
          <div className="text-3xl font-mono font-bold text-green-700 dark:text-green-200">{wonCode}</div>
          <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">Kodni nusxalash uchun belgilang</div>
        </div>
      </div>
    );
  }

  // If locked
  if (lockedUntil && !finished) {
    return (
      <div className="max-w-xl mx-auto p-6 rounded-lg shadow-lg bg-white dark:bg-slate-800  text-center mt-[155px] mb-[170px]">
        <XCircle className="mx-auto text-red-500" />
        <h3 className="mt-3 text-lg font-semibold dark:text-white">O‘yin bloklangan</h3>
        <p className="mt-2 text-sm dark:text-gray-300">Siz barcha imkoniyatlarni sarfladingiz. 24 soat o‘tguncha kuting:</p>
        <div className="mt-4 text-xl font-mono">{formatTime(countdown)}</div>
      </div>
    );
  }

  // If finished and lost (but attempts left > 0)
  if (finished && !wonCode) {
    return (
      <div className="max-w-xl mx-auto p-6 rounded-lg shadow-lg bg-white dark:bg-slate-800 mt-[150px] mb-[129px] text-center">
        <XCircle className="mx-auto text-red-500" />
        <h3 className="mt-3 text-lg font-semibold dark:text-white">Siz yutqazdingiz</h3>
        <p className="mt-2 text-sm dark:text-gray-300">Yana urinib ko‘rishingiz mumkin, ammo imkoniyatlar soni kamayadi.</p>
        <div className="mt-4">
          <button
            onClick={resetForRetry}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            disabled={attemptsLeft <= 0}
          >
            Qayta urinib ko‘rish
          </button>
        </div>
        <p className="mt-3 text-sm dark:text-gray-300">Qolgan imkoniyatlar: <span className="font-semibold">{attemptsLeft}</span></p>
      </div>
    );
  }

  // Main quiz view
  const q = questions[step];
  const progressPercent = Math.round(((step) / questions.length) * 100);

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-md bg-white dark:bg-slate-800 mt-[125px] mb-[80px]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold dark:text-white">Promo Quiz</h2>
        <div className="text-sm text-gray-600 dark:text-gray-300">Imkoniyatlar: <span className="font-semibold">{attemptsLeft}</span></div>
      </div>

      {/* progress */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-4 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all" style={{ width: `${progressPercent}%` }} />
      </div>
      <div className="mt-4">
        <div className="text-sm text-gray-500 dark:text-gray-300">Savol {step + 1} / {questions.length}</div>
        <h3 className="text-lg font-semibold mt-2 dark:text-white">{q.question}</h3>
      </div>

      <div className="mt-4 space-y-3">
        {q.options.map((opt, idx) => {
          const isSelected = selectedAnswers[step] === opt;
          return (
            <button
              key={idx}
              onClick={() => selectOption(step, opt)}
              className={`w-full text-left px-4 py-3 rounded-md border transition-all
                ${isSelected ? "bg-blue-600 text-white border-blue-600" : "bg-gray-50 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-100"}
              `}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between mt-5">
        <div className="text-sm text-gray-500 dark:text-gray-300">
          {selectedAnswers[step] ? "Tanlangan: " + selectedAnswers[step] : "Javobni tanlang"}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (step > 0) setStep(step - 1);
            }}
            disabled={step === 0}
            className="px-3 py-2 rounded-md border disabled:opacity-50"
          >
            Ortga
          </button>

          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {step + 1 < questions.length ? "Keyingisi" : "Yakunlash"}
          </button>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-400">
        * Barcha savollarga javob berganingizda natija aniqlanadi. Faqat hammasi to‘g‘ri bo‘lsa promo kod beriladi.
      </div>
    </div>
  );
}
