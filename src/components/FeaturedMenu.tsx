import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Utensils, ArrowRight } from "lucide-react";
import { featuredMenuItems } from "../data/menuData";
import { MenuModal } from "./MenuModal";
import { getWhatsAppUrl } from "../config/siteConfig";

export const FeaturedMenu: React.FC = () => {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  return (
    <section id="menu" className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden border-b border-gray-200">
      {/* Background accents */}
      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-[#B88E2F]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#B88E2F]/10 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Signature Selections</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4">
            Menu Favorit Haber
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
            Perpaduan hidangan Nusantara autentik dan Western grill pilihan yang diracik khusus oleh chef berpengalaman.
          </p>
        </div>

        {/* Menu Grid: Desktop 3 cols, Tablet 2 cols, Mobile 1 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {featuredMenuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group bg-white overflow-hidden border border-gray-200 hover:border-[#B88E2F] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Tag */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category & Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-white text-[#1F2937]">
                    {item.categoryLabel}
                  </span>
                  {item.tags && item.tags[0] && (
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#B88E2F] text-white">
                      {item.tags[0]}
                    </span>
                  )}
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-white text-[#1F2937] font-semibold text-xs border border-[#B88E2F]/40 shadow-xs">
                  {item.price}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1F2937] group-hover:text-[#B88E2F] transition-colors mb-2.5">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#6B7280] uppercase tracking-wider">
                    Tersedia Setiap Hari
                  </span>
                  <a
                    href={getWhatsAppUrl("general", `Halo Haber, saya ingin reservasi meja dan memesan menu ${item.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider text-[#1F2937] hover:text-[#B88E2F] inline-flex items-center gap-1 group/link transition-colors"
                  >
                    <span>Pesan via WA</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform text-[#B88E2F]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Footer CTA */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="featured-menu-view-all-btn"
            type="button"
            onClick={() => setIsMenuModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 text-xs font-bold uppercase tracking-widest text-white bg-[#1F2937] hover:bg-[#B88E2F] active:scale-98 transition-all shadow-md hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E2F]"
          >
            <Utensils className="w-4 h-4 text-white" />
            <span>LIHAT MENU LENGKAP</span>
          </button>
        </div>

      </div>

      {/* Full Menu Modal */}
      <MenuModal
        isOpen={isMenuModalOpen}
        onClose={() => setIsMenuModalOpen(false)}
      />
    </section>
  );
};
