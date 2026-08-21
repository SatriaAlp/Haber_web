import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { weddingBrandConfig } from "../../data/weddingData";

export const WeddingHero: React.FC = () => {
  const heroHighlights = [
    "One Stop Wedding Solution",
    "Adat Tradisional & Modern",
    "Paket Honeymoon Eksklusif",
    "Bonus Alphard Pengantin",
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-36 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#2A2522] text-white">
      {/* Background Image with Dark Overlays */}
      <div className="absolute inset-0 z-0 bg-[#2A2522]">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=85&w=1920&auto=format&fit=crop"
          alt="Luxury Wedding Hall HABER Elmour"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1]"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Gradients matching initial Hero */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A2522] via-[#2A2522]/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#2A2522]/30 to-[#2A2522]/80 z-10 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#B88E2F]/15 rounded-full blur-3xl pointer-events-none z-10"></div>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center mt-4 sm:mt-8">
        
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-6 leading-[1.05]"
        >
          Wedding Planner
        </motion.h1>

        {/* Subheadline Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[#B88E2F] text-sm sm:text-base md:text-lg font-bold tracking-[0.25em] sm:tracking-[0.35em] uppercase mb-8"
        >
          <span>Kemewahan yang Terjangkau</span>
          <span className="text-[#EDE5D8]/30">•</span>
          <span>Elegant & Glamour</span>
        </motion.div>

        {/* Decorative Gold Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-32 sm:w-44 h-[2px] bg-[#B88E2F] mb-8"
        ></motion.div>

        {/* Tagline Quotation */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-serif italic text-lg sm:text-2xl text-[#EDE5D8] max-w-3xl mx-auto mb-6 font-normal leading-relaxed"
        >
          &ldquo;{weddingBrandConfig.tagline}&rdquo;
        </motion.blockquote>

        {/* Descriptive Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-base sm:text-lg text-[#EDE5D8]/90 font-light leading-relaxed mb-12 text-center px-4"
        >
          Mulai dari tahap perencanaan awal, lamaran, upacara adat, resepsi berkelas, hingga bulan madu impian di destinasi favorit Anda.
        </motion.p>

        {/* Trust Badges Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="w-full max-w-4xl pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left"
        >
          {heroHighlights.map((hl, index) => (
            <div key={index} className="flex items-center gap-2.5 bg-[#2A2522]/80 backdrop-blur-md p-3.5 border border-white/10 rounded-sm">
              <CheckCircle2 className="w-4 h-4 text-[#B88E2F] flex-shrink-0" />
              <span className="text-xs sm:text-sm text-gray-200 font-medium leading-snug">
                {hl}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <a
          id="hero-scroll-indicator"
          href="#keunggulan"
          aria-label="Scroll to keunggulan section"
          className="mt-12 text-[#EDE5D8]/50 hover:text-[#B88E2F] transition-colors flex flex-col items-center gap-1.5 text-xs"
        >
          <span className="tracking-widest uppercase text-[10px] font-semibold">Explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce text-[#B88E2F]" />
        </a>

      </div>
    </section>
  );
};

