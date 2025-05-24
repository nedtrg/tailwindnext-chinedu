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
    <div ref={containerRef} className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-light text-white">NedTRG</h1>
      </div>
      <div>
        <Link className="flex space-x-4" href="">
          <div>
            <button className="px-3 py-1 text-white rounded-full bg-gray-800/50 border-gray-700 hover:border-purple-900/10 hover:bg-gradient-to-r hover:from-purple-800/10 hover:via-purple-700/10 hover:to-purple-500/10 transition duration-300">
              <span className="inline-flex uppercase p-1 font-semibold">
                <h1>Let's Talk</h1>
                <IconPoint stroke={2} />
              </span>
            </button>
          </div>
          <div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-white px-3 py-1 border-white text-white rounded-full hover:rotate-x-360 transition duration-300"
            >
              <span className="inline-flex uppercase p-1 font-semibold text-black">
                <h1>Menu</h1>
                <IconPoint stroke={2} />
              </span>
            </button>
          </div>
        </Link>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute border rounded-lg top-16 right-7 w-48 p-2 bg-gray-900 border-blue-300/10"
          >
            <ul className="space-y-2">
              <li className="border-blue-300/10 border rounded-lg hover:border-purple-900/10 hover:bg-gradient-to-r hover:from-purple-800/10 hover:via-purple-700/10 hover:to-purple-500/10 transition duration-300">
                <Link href="#about">
                  <h1 className="block px-4 py-2 capitalize text-center font-semibold text-white hover:rotate-x-360">
                    About
                  </h1>
                </Link>
              </li>
              <li className="border-blue-300/10 border rounded-lg hover:border-purple-900/10 hover:bg-gradient-to-r hover:from-purple-800/10 hover:via-purple-700/10 hover:to-purple-500/10 transition duration-300">
                <Link href="#services">
                  <h1 className="block px-4 py-2 capitalize text-center font-semibold text-white hover:rotate-x-360">
                    Services
                  </h1>
                </Link>
              </li>
              <li className="border-blue-300/10 border rounded-lg hover:border-purple-900/10 hover:bg-gradient-to-r hover:from-purple-800/10 hover:via-purple-700/10 hover:to-purple-500/10 transition duration-300">
                <Link href="#portfolio">
                  <h1 className="block px-4 py-2 capitalize text-center font-semibold text-white hover:rotate-x-360">
                    Portfolio
                  </h1>
                </Link>
              </li>
              <li className="border-blue-300/10 border rounded-lg hover:border-purple-900/10 hover:bg-gradient-to-r hover:from-purple-800/10 hover:via-purple-700/10 hover:to-purple-500/10 transition duration-300">
                <Link href="#awards">
                  <h1 className="block px-4 py-2 capitalize text-center font-semibold text-white hover:rotate-x-360">
                    Awards
                  </h1>
                </Link>
              </li>
              <li className="border-blue-300/10 border rounded-lg hover:border-purple-900/10 hover:bg-gradient-to-r hover:from-purple-800/10 hover:via-purple-700/10 hover:to-purple-500/10 transition duration-300">
                <Link href="#testimonial">
                  <h1 className="block px-4 py-2 capitalize text-center font-semibold text-white hover:rotate-x-360">
                    Testimonial
                  </h1>
                </Link>
              </li>
              <li className="border-blue-300/10 border rounded-lg hover:border-purple-900/10 hover:bg-gradient-to-r hover:from-purple-800/10 hover:via-purple-700/10 hover:to-purple-500/10 transition duration-300">
                <Link href="#blog">
                  <h1 className="block px-4 py-2 capitalize text-center font-semibold text-white hover:rotate-x-360">
                    Blog
                  </h1>
                </Link>
              </li>
              <li className="border-blue-300/10 border rounded-lg hover:border-purple-900/10 hover:bg-gradient-to-r hover:from-purple-800/10 hover:via-purple-700/10 hover:to-purple-500/10 transition duration-300">
                <Link href="">
                  <h1 className="block px-4 py-2 capitalize text-center font-semibold text-white hover:rotate-x-360">
                    Contact
                  </h1>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
