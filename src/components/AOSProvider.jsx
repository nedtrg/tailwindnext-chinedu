"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      once: true, // animate only once
      duration: 800, // animation duration
      easing: "ease-out-cubic",
      offset: 100, // trigger point
    });
  }, []);

  return <>{children}</>;
}
