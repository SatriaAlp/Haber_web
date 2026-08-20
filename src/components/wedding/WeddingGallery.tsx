import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Image as ImageIcon, Sparkles, X, Eye } from "lucide-react";
import { weddingGalleryItems, WeddingGalleryItem } from "../../data/weddingData";

export const WeddingGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<WeddingGalleryItem | null>(null);

  const categories = [
    { key: "all", label: "Semua Karya" },
    { key: "pelaminan", label: "Pelaminan Glamour" },
    { key: "table", label: "Meja Perjamuan (VIP)" },
    { key: "akad", label: "Akad & Pemberkatan" },
    { key: "entrance", label: "Venue Haber Resto" },
    { key: "lighting", label: "Lighting & Panggung" },
  ];

  const filteredItems = selectedCategory === "all"
    ? weddingGalleryItems
    : weddingGalleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="galeri-wedding" className="py-16 sm:py-20 bg-white text-[#1F2937] relative overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#B88E2F]/20 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Galeri Karya • Wedding Glamour</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F2937] mb-4">
            Mahakarya & Inspirasi Dekorasi
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
            Koleksi karya nyata dekorasi pelaminan, penataan banquet table, dan tata cahaya panggung bernuansa <em>kemewahan yang terjangkau</em>.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.key
                    ? "bg-[#B88E2F] text-white shadow-md"
                    : "bg-[#F9FAFB] text-[#4B5563] hover:text-[#1F2937] border border-gray-200 hover:border-[#B88E2F]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setActiveItem(item)}
                className="group relative overflow-hidden bg-white border border-gray-200 hover:border-[#B88E2F] cursor-pointer transition-all duration-500 shadow-lg"
              >
                {/* Image Aspect Ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm border border-[#B88E2F]/30 text-[10px] font-bold uppercase tracking-wider text-[#B88E2F] shadow-sm">
                    {item.categoryLabel}
                  </div>

                  {/* Zoom Overlay Icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-none bg-[#B88E2F] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Eye className="w-4 h-4 text-white" />
                  </div>

                  {/* Text Details at Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#F3E5AB] transition-colors leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-200 font-light line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
              onClick={() => setActiveItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-white border border-[#B88E2F]/40 shadow-2xl overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-white hover:text-[#B88E2F] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Tutup Preview"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Image */}
                <div className="aspect-[16/10] w-full overflow-hidden bg-black">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Modal Details */}
                <div className="p-6 sm:p-8 bg-white text-[#1F2937]">
                  <div className="inline-block px-2.5 py-0.5 bg-[#B88E2F]/20 border border-[#B88E2F]/40 text-[#B88E2F] text-[10px] font-bold uppercase tracking-wider mb-2">
                    {activeItem.categoryLabel}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1F2937] mb-2">
                    {activeItem.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] font-light leading-relaxed">
                    {activeItem.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
