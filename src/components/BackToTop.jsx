"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // optional icon

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-5 right-5 sm:bottom-8 sm:right-8
        z-50
        flex items-center justify-center
        h-11 w-11 sm:h-12 sm:w-12
        rounded-full
        bg-gray-900/80 text-white
        border border-gray-700
        backdrop-blur-md
        shadow-lg
        transition-all duration-300
        hover:scale-110 hover:bg-gray-800
        active:scale-95
        ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
    >
      <ArrowUp size={18} />
    </button>
  );
}
