import { ArrowBigDown, ArrowUp } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 z-50 right-5 p-3 rounded-full bg-blue-500 text-white shadow-lg transition-all duration-500 ease-in-out 
        ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <ArrowUp/>
    </button>
  );
}
