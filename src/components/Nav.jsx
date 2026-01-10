"use client";
import Link from "next/link";
import { IconPoint } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-between px-4 py-4 lg:px-10"
    >
      {/* LOGO */}
      <div>
        <h1
          className="text-2xl lg:text-3xl font-light text-white"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          NedTRG
        </h1>
      </div>

      {/* ACTION BUTTONS */}
      <div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div data-aos="fade-down" data-aos-delay="400">
            <Link href="#contact">
              <button className="px-4 py-2 text-white rounded-full bg-gray-800/50 border border-gray-700 hover:border-purple-900/10 hover:bg-gradient-to-r hover:from-purple-800/10 hover:via-purple-700/10 hover:to-purple-500/10 transition duration-300">
                <span className="inline-flex items-center gap-1 uppercase font-semibold text-sm hover:rotate-x-360 transition duration-300">
                  <h1>Let&apos;s Talk</h1>
                  <IconPoint stroke={2} />
                </span>
              </button>
            </Link>
          </div>

          <div data-aos="fade-down" data-aos-delay="600">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-white px-4 py-2 border border-white rounded-full transition duration-300"
            >
              <span className="inline-flex items-center gap-1 uppercase font-semibold text-black text-sm hover:rotate-x-360 transition duration-300">
                <h1>Menu</h1>
                <IconPoint stroke={2} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* DROPDOWN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="
              absolute
              top-20
              right-4
              left-4
              sm:left-auto
              sm:right-7
              w-auto
              sm:w-48
              p-3
              bg-gray-900
              border
              border-blue-300/10
              rounded-lg
              z-50
            "
          >
            <ul className="space-y-2">
              {[
                "about",
                "services",
                "portfolio",
                "awards",
                "testimonial",
                "blog",
                "contact",
              ].map((item) => (
                <li
                  key={item}
                  className="border border-blue-300/10 rounded-lg hover:border-purple-900/10 hover:bg-gradient-to-r hover:from-purple-800/10 hover:via-purple-700/10 hover:to-purple-500/10 transition duration-300"
                >
                  <Link href={`#${item}`}>
                    <h1 className="block px-4 py-3 capitalize text-center font-semibold text-white">
                      {item}
                    </h1>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
