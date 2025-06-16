"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/authProvider";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ApiUnavailableModal = () => {
  const { apiAvailable } = useAuth();
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [menuOpen]);

  if (apiAvailable || !menuOpen) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black   z-[100]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: "-50%", x: "-50%" }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-1/2 left-1/2 w-[90%] max-w-xl p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-xl z-[101]"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Offline Mode Activated</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300">
          We couldn't connect to the server. You're now browsing in offline
          mode. Some features may be disabled until the connection is restored.
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default ApiUnavailableModal;
