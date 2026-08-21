import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../config/siteConfig";

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after slight scroll or small delay
    const timer = setTimeout(() => setIsVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group"
    >
      <a
        id="floating-whatsapp-btn"
        href={getWhatsAppUrl("general")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp CS Haber Cafe & Resto"
        className="flex items-center gap-3 px-5 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl hover:shadow-[#25D366]/40 active:scale-95 transition-all duration-300 border border-white/30 group-hover:scale-105"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        
        <MessageCircle className="w-5 h-5 fill-current" />
        
        <span className="text-xs font-bold uppercase tracking-wider">
          Reservasi WhatsApp
        </span>
      </a>
    </div>
  );
};
