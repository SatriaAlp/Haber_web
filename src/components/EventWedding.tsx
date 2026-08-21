import React from "react";
import { motion } from "motion/react";
import { Sparkles, MessageCircle, CheckCircle2, Heart, Award } from "lucide-react";
import { getWhatsAppUrl } from "../config/siteConfig";

export const EventWedding: React.FC = () => {
  const weddingFeatures = [
    "Venue Indoor & Garden Romantis",
    "Paket Prasmanan & Set Menu Fleksibel",
    "Sound System & Stage Lengkap",
    "Ruang VIP & Ruang Rias Pengantin",
    "Area Parkir Luas & Valet Assistance",
    "Pendampingan Tim Event Profesional",
  ];

  return (
    <section id="wedding" className="relative overflow-hidden bg-[#2A2522] text-white py-20 sm:py-28 border-y border-[#B88E2F]/20">
      {/* Background Visual with Soft Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=85&w=1600&auto=format&fit=crop"
          alt="Venue Pernikahan dan Event Spesial di Haber Cafe & Resto Bandung"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.1]"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A2522] via-[#2A2522]/85 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B88E2F]/15 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#2A2522]/80 backdrop-blur-md border border-[#B88E2F]/50 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-6 shadow-sm"
          >
            <Heart className="w-3.5 h-3.5 text-[#B88E2F]" />
            <span>Wedding & Private Event</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.18]"
          >
            Rayakan Momen Spesial Bersama Haber
          </motion.h2>

          {/* Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#EDE5D8]/90 font-light leading-relaxed mb-8"
          >
            Ruang dan suasana yang dirancang untuk membuat setiap perayaan terasa lebih istimewa. Dari pernikahan impian, pertunangan, ulang tahun, hingga gathering korporat berskala besar.
          </motion.p>

          {/* Feature Bullet Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10"
          >
            {weddingFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#FDFCFB]">
                <CheckCircle2 className="w-4 h-4 text-[#B88E2F] flex-shrink-0" />
                <span className="font-light">{feat}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              id="wedding-cta-elmour-page"
              href="/wedding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#181A16] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] hover:brightness-110 active:scale-98 transition-all shadow-xl hover:shadow-[#D4AF37]/30"
            >
              <Sparkles className="w-4 h-4 text-[#181A16]" />
              <span>Buka Katalog Elmour Wedding ↗</span>
            </a>

            <a
              id="wedding-cta-konsultasi"
              href={getWhatsAppUrl("wedding")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs font-bold uppercase tracking-widest text-white bg-white/10 hover:bg-white/20 border border-[#B88E2F]/50 backdrop-blur-md active:scale-98 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#B88E2F]" />
              <span>Konsultasi Cepat (WA)</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
