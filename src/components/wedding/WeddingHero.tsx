import React from "react";
import { motion } from "motion/react";
import { Sparkles, Calendar, MessageCircle, CheckCircle2, ChevronDown, Heart } from "lucide-react";
import { weddingBrandConfig, getElmourWhatsAppUrl } from "../../data/weddingData";

export const WeddingHero: React.FC = () => {
  const heroHighlights = [
    "One Stop Wedding Solution",
    "Adat Tradisional & Modern",
    "Paket Honeymoon Eksklusif",
    "Bonus Alphard Pengantin",
  ];

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#2A2522] text-white">
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

      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center mt-10">
        
        {/* Eyebrow / Tag */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.3em] mb-6 bg-[#2A2522]/80 backdrop-blur-sm shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B88E2F]" />
          <span>{weddingBrandConfig.brandName} • {weddingBrandConfig.year}</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4 leading-[1.08]"
        >
          Wedding Planner
        </motion.h1>

        {/* Subheadline Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[#B88E2F] text-xs sm:text-sm md:text-base font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6"
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
          className="w-24 sm:w-32 h-[1.5px] bg-[#B88E2F] mb-6"
        ></motion.div>

        {/* Tagline Quotation */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-serif italic text-base sm:text-xl text-[#EDE5D8] max-w-3xl mx-auto mb-4 font-normal"
        >
          &ldquo;{weddingBrandConfig.tagline}&rdquo;
        </motion.blockquote>

        {/* Descriptive Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-sm sm:text-base text-[#EDE5D8]/90 font-light leading-relaxed mb-10 text-center px-4"
        >
          Mulai dari tahap perencanaan awal, lamaran, upacara adat, resepsi berkelas, hingga bulan madu impian di destinasi favorit Anda.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 mb-12"
        >
          <a
            id="hero-cta-explore-package"
            href="#paket"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-[#B88E2F] hover:brightness-110 active:scale-98 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E2F]"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>LIHAT PAKET & HARGA</span>
          </a>

          <a
            id="hero-cta-contact-igun"
            href={getElmourWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-white/5 hover:bg-white/10 border border-white/20 active:scale-98 transition-all backdrop-blur-sm shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E2F]"
          >
            <MessageCircle className="w-4 h-4 text-[#B88E2F]" />
            <span>KONSULTASI MAS IGUN (WA)</span>
          </a>
        </motion.div>

        {/* Trust Badges Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-4xl pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left"
        >
          {heroHighlights.map((hl, index) => (
            <div key={index} className="flex items-center gap-2 bg-[#2A2522]/80 backdrop-blur-sm p-3 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#B88E2F] flex-shrink-0" />
              <span className="text-[11px] sm:text-xs text-gray-200 font-medium leading-snug">
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
          className="mt-8 text-[#EDE5D8]/50 hover:text-[#B88E2F] transition-colors flex flex-col items-center gap-1 text-xs"
        >
          <span className="tracking-widest uppercase text-[10px]">Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#B88E2F]" />
        </a>

      </div>
    </section>
  );
};
