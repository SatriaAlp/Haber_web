import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Check, 
  Plane, 
  Users, 
  MessageSquareHeart, 
  ChevronDown, 
  ChevronUp, 
  Crown,
  Car
} from "lucide-react";
import { weddingPackages, getElmourWhatsAppUrl } from "../../data/weddingData";

export const WeddingPricing: React.FC = () => {
  const [expandedPackage, setExpandedPackage] = useState<string | null>("paket-emas-250jt");

  const toggleExpand = (id: string) => {
    setExpandedPackage(expandedPackage === id ? null : id);
  };

  return (
    <section id="paket" className="py-16 sm:py-20 bg-[#F9FAFB] text-[#1F2937] relative overflow-hidden border-b border-gray-200">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#B88E2F]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#B88E2F]/20 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <Crown className="w-3.5 h-3.5" />
            <span>Paket Pernikahan & Harga 2026</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F2937] mb-4">
            Pilihan Paket Mewah & Transparan
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
            Setiap paket dirancang dengan cermat untuk memenuhi preferensi dan anggaran Anda. Menghadirkan kualitas tertinggi tanpa kompromi.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {weddingPackages.map((pkg, idx) => {
            const isExpanded = expandedPackage === pkg.id;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.12 }}
                className={`relative flex flex-col justify-between rounded-none bg-white transition-all duration-500 ${
                  pkg.isPopular
                    ? "border-2 border-[#B88E2F] shadow-2xl lg:-translate-y-2"
                    : "border border-gray-200 hover:border-[#B88E2F] shadow-lg hover:shadow-2xl"
                }`}
              >
                {/* Popular / Signature Floating Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-white bg-[#B88E2F] shadow-md">
                    {pkg.badge}
                  </div>
                )}

                {/* Card Top Section */}
                <div className="p-7 sm:p-8">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#B88E2F] font-bold">
                      {pkg.tagline}
                    </span>
                    <div className="flex items-center gap-1 text-[#B88E2F]">
                      <Users className="w-3.5 h-3.5" />
                      <span className="text-[10px] uppercase font-bold tracking-wider">{pkg.capacity}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2937] mb-3">
                    {pkg.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B5563] font-light mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Price Box */}
                  <div className="p-5 bg-[#F9FAFB] border border-gray-200 mb-6 text-center shadow-xs">
                    <span className="text-[10px] uppercase tracking-widest text-[#6B7280] block mb-1">
                      Investasi Paket
                    </span>
                    <div className="font-serif text-3xl sm:text-4xl font-bold text-[#B88E2F]">
                      {pkg.price}
                    </div>
                    <span className="text-[10px] text-[#6B7280] mt-1 block">
                      *Termasuk seluruh fasilitas & pendampingan tim
                    </span>
                  </div>

                  {/* Bonus Tag If Available */}
                  {pkg.bonusItem && (
                    <div className="mb-6 p-3 bg-[#B88E2F]/10 border border-[#B88E2F]/30 text-[#B88E2F] text-xs font-semibold flex items-center gap-2">
                      <Car className="w-4 h-4 text-[#B88E2F] flex-shrink-0" />
                      <span className="text-[#1F2937]">{pkg.bonusItem}</span>
                    </div>
                  )}

                  {/* Honeymoon Tag If Available */}
                  {pkg.honeymoonDetails && (
                    <div className="mb-6 p-3.5 bg-[#F9FAFB] border border-gray-200">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#B88E2F] mb-2">
                        <Plane className="w-4 h-4" />
                        <span>{pkg.honeymoonDetails.title}</span>
                      </div>
                      <div className="text-[11px] text-[#4B5563] space-y-1">
                        <p className="font-medium text-[#1F2937]">
                          Pilihan: {pkg.honeymoonDetails.destinations.join(" • ")}
                        </p>
                        <p className="text-[#6B7280]">
                          {pkg.honeymoonDetails.facilities.join(" | ")}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Collapsible Phase Breakdown */}
                  <div className="border-t border-gray-100 pt-4">
                    <button
                      onClick={() => toggleExpand(pkg.id)}
                      className="w-full flex items-center justify-between text-xs uppercase font-bold tracking-wider text-[#B88E2F] hover:underline py-2 transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? "Tutup Rincian Tahapan" : "Lihat Rincian Seluruh Tahapan"}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-3 space-y-3.5 text-left text-xs"
                        >
                          {pkg.phases.map((phase, pIdx) => (
                            <div key={pIdx} className="bg-[#F9FAFB] p-3.5 border border-gray-200">
                              <h5 className="font-serif font-bold text-[#1F2937] text-xs mb-2">
                                {phase.phaseTitle}
                              </h5>
                              <ul className="space-y-1.5">
                                {phase.items.map((item, iIdx) => (
                                  <li key={iIdx} className="flex items-start gap-2 text-[#4B5563] font-light">
                                    <Check className="w-3.5 h-3.5 text-[#B88E2F] flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="p-7 sm:p-8 pt-0">
                  <a
                    id={`pricing-cta-${pkg.id}`}
                    href={getElmourWhatsAppUrl(pkg.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-[#B88E2F] hover:brightness-110 active:scale-98 transition-all shadow-md"
                  >
                    <MessageSquareHeart className="w-4 h-4" />
                    <span>Pilih / Tanya Paket Ini</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Package Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 bg-white border border-[#B88E2F]/40 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B88E2F] mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Kustomisasi Tanpa Batas</span>
            </div>
            <h4 className="font-serif text-2xl font-bold text-[#1F2937] mb-2">
              Menginginkan Paket Kustom Sesuai Kebutuhan Spesifik Anda?
            </h4>
            <p className="text-xs sm:text-sm text-[#4B5563] font-light max-w-2xl">
              Kami siap merancang proposal penawaran terpersonalisasi sesuai dengan preferensi tema, jumlah tamu, durasi, dan batasan anggaran yang Anda miliki.
            </p>
          </div>

          <a
            id="pricing-custom-cta"
            href={getElmourWhatsAppUrl(undefined, "Halo Mas Igun, saya ingin membuat Custom Package pernikahan")}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-[#B88E2F] hover:brightness-110 active:scale-98 transition-all shadow-md"
          >
            Konsultasi Custom Package
          </a>
        </motion.div>

      </div>
    </section>
  );
};
