"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "917780667248"; // Replace with actual number
  const message = encodeURIComponent("Hello! I'm interested in Sreehisoft Solutions.");

  // Show tooltip after a small delay on initial load to grab attention
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[999] flex flex-col items-end">
      {/* Tooltip / Welcome Message */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-4 mr-2"
          >
            <div className="bg-white rounded-2xl p-4 shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 relative w-72 max-w-[calc(100vw-3rem)]">
              <button 
                onClick={() => setShowTooltip(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 text-[15px] font-[family-name:var(--font-poppins-custom)]">Sreehisoft Support</h4>
              </div>
              <p className="text-[14px] text-gray-600 leading-relaxed font-[family-name:var(--font-poppins-custom)]">
                Hi there! 👋 How can we help you today? We typically reply within a few minutes.
              </p>
              {/* Chat bubble tail */}
              <div className="absolute -bottom-[6px] right-6 w-3 h-3 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:bg-[#128C7E] hover:-translate-y-1 transition-all duration-300 group"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
      >
        {/* Pinging ring effect */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping" style={{ animationDuration: '3s' }}></span>
        
        <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8 relative z-10" />
      </a>
    </div>
  );
}
