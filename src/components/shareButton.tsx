"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaShareAlt, FaTelegramPlane, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

const ShareButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState<string | null>(null); 

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const toggleShareMenu = () => setIsOpen((prev) => !prev);

  const socialLinks = [
    { icon: <FaWhatsapp />, color: "bg-green-600", link: `https://wa.me/?text=${currentUrl || ""}` },
    { icon: <FaTelegramPlane />, color: "bg-blue-400", link: `https://t.me/share/url?url=${currentUrl || ""}` },
    { icon: <FaFacebook />, color: "bg-blue-600", link: `fb-messenger://share/?link=${currentUrl || ""}` },
    { icon: <FaTwitter />, color: "bg-blue-500", link: `tweet:?subject=Check this&body=${currentUrl || ""}` },
    { icon: <FaLinkedin />, color: "bg-indigo-500", link: `message:?body=${currentUrl || ""}` },
  ];

  return (
    <div className="relative flex justify-center items-center">
      {/* Share Btn */}
      <motion.button
        className="w-10 h-10 bg-purple-500 text-white rounded-full flex justify-center items-center cursor-pointer shadow-lg"
        onClick={toggleShareMenu}
        whileTap={{ scale: 0.9 }}
      >
        <FaShareAlt className="text-xl" />
      </motion.button>

      {/* Share Menu */}
      <AnimatePresence>
        {isOpen && currentUrl && ( 
          <motion.div
            className="absolute w-30 h-30 flex -left-15 -top-15 items-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          >
            {socialLinks.map((item, index) => {
              const angle = (index / socialLinks.length) * (2 * Math.PI);
              const x = 50 * Math.cos(angle);
              const y = 50 * Math.sin(angle);

              return (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`absolute w-10 h-10 flex justify-center items-center rounded-full text-white ${item.color}`}
                  style={{ left: `calc(50% + ${x}px)`, top: `calc(50% - ${y}px)` }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {item.icon}
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShareButton;
