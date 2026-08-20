import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MessageCircle, 
  Calendar, 
  Users, 
  HeartHandshake, 
  Sparkles, 
  Clock, 
  Phone, 
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "../config/siteConfig";

export const ReservationCTA: React.FC = () => {
  const [activeType, setActiveType] = useState<"table" | "event" | "wedding">("table");

  const reservationOptions = [
    {
      id: "table" as const,
      title: "Reservasi Meja",
      subtitle: "Dining & Hangout",
      icon: Calendar,
      badge: "Cepat & Praktis",
      desc: "Santap siang, makan malam, atau nongkrong asik sambil menikmati hidangan lezat dan live music.",
      message: siteConfig.messages.table,
      actionText: "Chat CS Reservasi Meja",
    },
    {
      id: "event" as const,
      title: "Event & Gathering",
      subtitle: "Private & Corporate",
      icon: Users,
      badge: "Kapasitas Fleksibel",
      desc: "Arisan keluarga, ulang tahun spesial, gathering kantor, hingga pertemuan bisnis privat.",
      message: siteConfig.messages.event,
      actionText: "Konsultasi Paket Event",
    },
    {
      id: "wedding" as const,
      title: "Wedding Venue",
      subtitle: "Romantic Celebration",
      icon: HeartHandshake,
      badge: "Konsultasi Gratis",
      desc: "Venue pernikahan indoor & garden romantis lengkap dengan konsultasi pricelist dan survei lokasi.",
      message: siteConfig.messages.wedding,
      actionText: "Tanya Venue & Pricelist",
    },
  ];

  const currentOption = reservationOptions.find((o) => o.id === activeType) || reservationOptions[0];

  return (
    <section id="reservasi" className="py-20 sm:py-28 bg-[#F9FAFB] text-[#1F2937] relative overflow-hidden border-y border-gray-200">
      {/* Decorative luxury warm ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-[#B88E2F]/8 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -top-24 right-10 w-80 h-80 bg-[#4A5D4E]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B88E2F]/15 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-4 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast & Direct Response</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F2937] mb-5 leading-tight"
          >
            Siap Merencanakan Kunjungan?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed max-w-2xl mx-auto"
          >
            Hubungi tim kami untuk reservasi meja, event, wedding, atau kebutuhan lainnya. Kami siap memberikan pelayanan terbaik untuk momen istimewa Anda.
          </motion.p>
        </div>

        {/* 3 Interactive Cards with Smooth Scaling & Modern Depth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 items-stretch">
          {reservationOptions.map((opt, idx) => {
            const isSelected = activeType === opt.id;
            const IconComponent = opt.icon;

            return (
              <motion.div
                key={opt.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                onClick={() => setActiveType(opt.id)}
                className={`group relative rounded-2xl p-7 sm:p-8 cursor-pointer transition-all duration-400 flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-2 border-[#B88E2F] shadow-2xl shadow-[#B88E2F]/15 -translate-y-2 scale-[1.02]"
                    : "bg-white/90 border border-gray-200/90 hover:border-[#B88E2F]/60 hover:shadow-xl hover:-translate-y-1 hover:bg-white"
                }`}
              >
                {/* Active Selection Pin Indicator */}
                {isSelected && (
                  <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#B88E2F] text-white text-[10px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5 animate-fade-in">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Pilihan Anda</span>
                  </div>
                )}

                <div>
                  {/* Icon with soft gradient rounded bubble */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? "bg-[#B88E2F] text-white shadow-lg shadow-[#B88E2F]/30 scale-105"
                          : "bg-[#F9FAFB] text-[#B88E2F] border border-gray-200 group-hover:border-[#B88E2F]/40 group-hover:bg-[#B88E2F]/10"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-semibold tracking-wider text-[#B88E2F] bg-[#B88E2F]/10 px-3 py-1 rounded-full">
                      {opt.badge}
                    </span>
                  </div>

                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#B88E2F] font-bold block mb-1">
                    {opt.subtitle}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-[#1F2937] group-hover:text-[#B88E2F] transition-colors mb-3 leading-snug">
                    {opt.title}
                  </h3>

                  <p className="text-sm text-[#4B5563] font-light leading-relaxed mb-6">
                    {opt.desc}
                  </p>
                </div>

                {/* Direct Action Link */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors ${
                    isSelected ? "text-[#B88E2F]" : "text-[#6B7280] group-hover:text-[#1F2937]"
                  }`}>
                    <span>{isSelected ? "Terpilih" : "Pilih Kategori Ini"}</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      isSelected ? "translate-x-1" : "group-hover:translate-x-1"
                    }`} />
                  </span>

                  <span className="text-[11px] text-[#9CA3AF] font-light">
                    via WhatsApp
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Master CTA Card - Modern, Soft & Fluid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-b from-white via-white to-[#FAF7F2] border border-[#B88E2F]/30 shadow-2xl text-center flex flex-col items-center overflow-hidden"
        >
          {/* Subtle Corner Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B88E2F]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4A5D4E]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
            
            {/* Guarantee Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B88E2F]/10 border border-[#B88E2F]/30 text-[#B88E2F] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#B88E2F]" />
              <span>Customer Service Siap Melayani Setiap Hari</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2937] mb-3">
              Terhubung Langsung dengan CS Haber
            </h3>

            <p className="text-sm sm:text-base text-[#4B5563] font-light mb-8 leading-relaxed">
              Anda sedang memilih layanan <strong className="text-[#B88E2F] font-semibold">{currentOption.title}</strong>. Klik tombol di bawah ini untuk memulai obrolan WhatsApp dengan format pesan otomatis:
            </p>

            {/* Pulsing Highlight CTA Button */}
            <a
              id="main-reservation-cta-btn"
              href={getWhatsAppUrl(activeType)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-gradient-to-r from-[#B88E2F] via-[#C99E3B] to-[#AA7C11] hover:brightness-110 active:scale-98 transition-all shadow-xl hover:shadow-2xl hover:shadow-[#B88E2F]/40 focus:outline-none focus:ring-4 focus:ring-[#B88E2F]/30"
            >
              <MessageCircle className="w-5 h-5 text-white fill-current" />
              <span>{currentOption.actionText.toUpperCase()}</span>
            </a>

            {/* Operational Info Badges */}
            <div className="mt-8 pt-6 border-t border-gray-200/80 w-full flex flex-wrap items-center justify-center gap-6 text-xs text-[#4B5563] font-medium">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs px-4 py-2 rounded-full border border-gray-200 shadow-xs">
                <Clock className="w-4 h-4 text-[#B88E2F]" />
                <span>Jam Operasional: {siteConfig.openingHours.weekdays}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs px-4 py-2 rounded-full border border-gray-200 shadow-xs">
                <Phone className="w-4 h-4 text-[#B88E2F]" />
                <span>WhatsApp CS: {siteConfig.whatsappDisplay}</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
