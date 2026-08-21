import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CalendarDays, 
  Sparkles, 
  DollarSign, 
  Palette, 
  Clock, 
  CheckCircle,
  ShieldCheck
} from "lucide-react";
import { weddingServiceBreakdown, getElmourWhatsAppUrl } from "../../data/weddingData";

export const WeddingServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"flow" | "philosophy" | "budgeting">("flow");

  return (
    <section id="layanan" className="py-16 sm:py-20 bg-white text-[#1F2937] relative overflow-hidden border-b border-gray-200">
      {/* Subtle warm glow background */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#B88E2F]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#B88E2F]/20 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>Gambaran Layanan</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F2937] mb-4">
            Pendekatan Menyeluruh Menuju Hari Bahagia
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
            Mulai dari tahap perencanaan awal hingga hari pernikahan itu sendiri, kami mengurus semua detailnya sehingga Anda dapat bersantai dan menikmati perjalanan ini.
          </p>

          {/* Service Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            <button
              onClick={() => setActiveTab("flow")}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "flow"
                  ? "bg-[#B88E2F] text-white shadow-md"
                  : "bg-[#F9FAFB] text-[#4B5563] hover:text-[#1F2937] border border-gray-200 hover:border-[#B88E2F]"
              }`}
            >
              Alur Pra-Nikah & Hari H
            </button>
            <button
              onClick={() => setActiveTab("philosophy")}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "philosophy"
                  ? "bg-[#B88E2F] text-white shadow-md"
                  : "bg-[#F9FAFB] text-[#4B5563] hover:text-[#1F2937] border border-gray-200 hover:border-[#B88E2F]"
              }`}
            >
              Kustomisasi & Personalisasi
            </button>
            <button
              onClick={() => setActiveTab("budgeting")}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "budgeting"
                  ? "bg-[#B88E2F] text-white shadow-md"
                  : "bg-[#F9FAFB] text-[#4B5563] hover:text-[#1F2937] border border-gray-200 hover:border-[#B88E2F]"
              }`}
            >
              Pengelolaan Anggaran Transparan
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === "flow" && (
            <motion.div
              key="flow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Card 1: Pra-Pernikahan */}
              <div className="bg-[#F9FAFB] border border-gray-200 hover:border-[#B88E2F] p-8 flex flex-col justify-between relative group transition-all shadow-md">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#B88E2F]/20 text-[#B88E2F] text-[10px] font-bold uppercase tracking-widest border-b border-l border-[#B88E2F]/30">
                  Fase 01: Persiapan
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4 text-[#B88E2F]">
                    <div className="w-10 h-10 rounded-none bg-white border border-[#B88E2F]/40 flex items-center justify-center">
                      <Palette className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#1F2937]">
                        {weddingServiceBreakdown.preWedding.title}
                      </h3>
                      <p className="text-xs uppercase tracking-wider text-[#B88E2F] font-semibold">
                        {weddingServiceBreakdown.preWedding.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#4B5563] font-light mb-6">
                    {weddingServiceBreakdown.preWedding.description}
                  </p>

                  <div className="space-y-3.5">
                    {weddingServiceBreakdown.preWedding.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-none border border-gray-200 shadow-xs">
                        <CheckCircle className="w-4 h-4 text-[#B88E2F] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-semibold text-[#1F2937] mb-0.5">{item.title}</h4>
                          <p className="text-xs text-[#4B5563] font-light leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-[#6B7280]">
                  <span>Dampingan Konsultan Khusus</span>
                  <span className="text-[#B88E2F] font-semibold">100% Fleksibel</span>
                </div>
              </div>

              {/* Card 2: Hari Pernikahan (Hari H) */}
              <div className="bg-[#F9FAFB] border border-gray-200 hover:border-[#B88E2F] p-8 flex flex-col justify-between relative group transition-all shadow-md">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#4A5D4E]/20 text-[#4A5D4E] text-[10px] font-bold uppercase tracking-widest border-b border-l border-gray-200">
                  Fase 02: Eksekusi Hari H
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4 text-[#B88E2F]">
                    <div className="w-10 h-10 rounded-none bg-white border border-[#B88E2F]/40 flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#1F2937]">
                        {weddingServiceBreakdown.weddingDay.title}
                      </h3>
                      <p className="text-xs uppercase tracking-wider text-[#B88E2F] font-semibold">
                        {weddingServiceBreakdown.weddingDay.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#4B5563] font-light mb-6">
                    {weddingServiceBreakdown.weddingDay.description}
                  </p>

                  <div className="space-y-3.5">
                    {weddingServiceBreakdown.weddingDay.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-none border border-gray-200 shadow-xs">
                        <CheckCircle className="w-4 h-4 text-[#B88E2F] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-semibold text-[#1F2937] mb-0.5">{item.title}</h4>
                          <p className="text-xs text-[#4B5563] font-light leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-[#6B7280]">
                  <span>Tim Standby 20 - 50 Crew</span>
                  <span className="text-[#B88E2F] font-semibold">Bebas Stres & Tenang</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "philosophy" && (
            <motion.div
              key="philosophy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#F9FAFB] border border-gray-200 p-8 sm:p-12 max-w-4xl mx-auto shadow-md"
            >
              <div className="text-center max-w-2xl mx-auto">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#B88E2F]/10 border border-[#B88E2F] flex items-center justify-center text-[#B88E2F]">
                  <Sparkles className="w-7 h-7" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#B88E2F] font-bold block mb-2">
                  {weddingServiceBreakdown.philosophy.tagline}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2937] mb-6">
                  {weddingServiceBreakdown.philosophy.heading}
                </h3>
                <blockquote className="font-serif italic text-lg sm:text-xl text-[#B88E2F] mb-6 border-y border-gray-200 py-4">
                  &ldquo;{weddingServiceBreakdown.philosophy.quote}&rdquo;
                </blockquote>
                <p className="text-sm sm:text-base text-[#4B5563] font-light leading-relaxed mb-8">
                  {weddingServiceBreakdown.philosophy.body}
                </p>

                <a
                  href={getElmourWhatsAppUrl(undefined, "Diskusi personalisasi & visi pernikahan impian")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-[#B88E2F] hover:brightness-110 active:scale-98 transition-all shadow-md"
                >
                  Ceritakan Kisah & Visi Anda
                </a>
              </div>
            </motion.div>
          )}

          {activeTab === "budgeting" && (
            <motion.div
              key="budgeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#F9FAFB] border border-gray-200 p-8 sm:p-12 max-w-4xl mx-auto shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-white border border-gray-200 text-center shadow-xs">
                  <DollarSign className="w-12 h-12 text-[#B88E2F] mb-3" />
                  <span className="font-serif text-2xl font-bold text-[#1F2937] mb-1">Transparan</span>
                  <span className="text-xs uppercase tracking-widest text-[#B88E2F] font-semibold">Tanpa Biaya Tersembunyi</span>
                </div>

                <div className="md:col-span-8">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#B88E2F] font-bold block mb-2">
                    Kemewahan yang Terjangkau
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2937] mb-4">
                    {weddingServiceBreakdown.budgeting.heading}
                  </h3>
                  <p className="text-sm text-[#4B5563] font-light leading-relaxed mb-6">
                    {weddingServiceBreakdown.budgeting.body}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-xs text-[#4B5563]">
                      <CheckCircle className="w-4 h-4 text-[#B88E2F]" />
                      <span>RAB Terperinci & Terkunci</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#4B5563]">
                      <CheckCircle className="w-4 h-4 text-[#B88E2F]" />
                      <span>Optimasi Vendor Terbaik</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#4B5563]">
                      <CheckCircle className="w-4 h-4 text-[#B88E2F]" />
                      <span>Fleksibilitas Termin Bayar</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#4B5563]">
                      <CheckCircle className="w-4 h-4 text-[#B88E2F]" />
                      <span>Value for Money Maksimal</span>
                    </div>
                  </div>

                  <a
                    href={getElmourWhatsAppUrl(undefined, "Request simulasi budgeting pernikahan")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white bg-[#B88E2F] hover:brightness-110 active:scale-98 transition-all shadow-md"
                  >
                    Simulasi Anggaran Bersama Tim Kami
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
