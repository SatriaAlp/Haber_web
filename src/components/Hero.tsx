import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, UtensilsCrossed, MapPin, ChevronDown } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "../config/siteConfig";

const heroImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85&w=1920&auto=format&fit=crop", // Dining
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=85&w=1920&auto=format&fit=crop", // Event
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=85&w=1920&auto=format&fit=crop", // Wedding
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=85&w=1920&auto=format&fit=crop", // Live Music
];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (idx: number) => {
    setDirection(idx > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(idx);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0
    })
  };

  const scrollToMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const menuElement = document.querySelector("#menu");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutElement = document.querySelector("#tentang");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#2A2522]"
    >
      {/* Background Carousel with Dark Overlays */}
      <div className="absolute inset-0 z-0 bg-[#2A2522]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentImageIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}
            src={heroImages[currentImageIndex]}
            alt="Suasana Haber Cafe & Resto Bandung"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.05] blur-[3px]"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        
        {/* Gradients for text contrast & warm atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A2522] via-[#2A2522]/40 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#2A2522]/20 to-[#2A2522]/70 z-10 pointer-events-none"></div>
        {/* Subtle warm gold shimmer highlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#B88E2F]/10 rounded-full blur-3xl pointer-events-none z-10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center mt-10">
        
        {/* Location / Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.3em] mb-6 bg-[#2A2522]/80 backdrop-blur-sm shadow-sm"
        >
          <MapPin className="w-3.5 h-3.5 text-[#B88E2F]" />
          <span>{siteConfig.location}</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-5 leading-[1.08]"
        >
          Haber Cafe & Resto
        </motion.h1>

        {/* Subheadline Highlight (Dynamic text color based on active image) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[#B88E2F] text-xs sm:text-sm md:text-base font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6"
        >
          <span className={currentImageIndex === 0 ? "text-white transition-colors duration-1000" : "transition-colors duration-1000"}>Dining</span>
          <span className="text-[#EDE5D8]/30">•</span>
          <span className={currentImageIndex === 1 ? "text-white transition-colors duration-1000" : "transition-colors duration-1000"}>Event</span>
          <span className="text-[#EDE5D8]/30">•</span>
          <span className={currentImageIndex === 2 ? "text-white transition-colors duration-1000" : "transition-colors duration-1000"}>Wedding</span>
          <span className="text-[#EDE5D8]/30">•</span>
          <span className={currentImageIndex === 3 ? "text-white transition-colors duration-1000" : "transition-colors duration-1000"}>Live Music</span>
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-24 sm:w-32 h-[1.5px] bg-[#B88E2F] mb-8"
        ></motion.div>

        {/* Descriptive Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-[#EDE5D8]/90 font-light leading-relaxed mb-10 text-center px-4"
        >
          Nikmati pengalaman kuliner, suasana elegan, dan rayakan momen istimewa Anda bersama kami di Bandung.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
        >
          {/* Primary CTA: WhatsApp Reservation */}
          <a
            id="hero-cta-reservasi"
            href={getWhatsAppUrl("general")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-[#B88E2F] hover:brightness-110 active:scale-98 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E2F]"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>RESERVASI SEKARANG</span>
          </a>

          {/* Secondary CTA: Lihat Menu */}
          <a
            id="hero-cta-menu"
            href="#menu"
            onClick={scrollToMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-white/5 hover:bg-white/10 border border-white/20 active:scale-98 transition-all backdrop-blur-sm shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E2F]"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#B88E2F]" />
            <span>LIHAT MENU</span>
          </a>
        </motion.div>

        {/* Carousel Dots */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-center gap-3 mt-12"
        >
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                currentImageIndex === idx ? "bg-[#B88E2F] w-8" : "bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <a
          id="hero-scroll-indicator"
          href="#tentang"
          onClick={scrollToAbout}
          aria-label="Scroll to about section"
          className="mt-8 text-[#EDE5D8]/50 hover:text-[#B88E2F] transition-colors flex flex-col items-center gap-1 text-xs"
        >
          <span className="tracking-widest uppercase text-[10px]">Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>

      </div>
    </section>
  );
};
