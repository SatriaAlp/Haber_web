import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Camera, X, Eye } from "lucide-react";
import { galleryItems } from "../data/galleryData";
import { GalleryItem } from "../types";

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Duplicate items to ensure smooth infinite scrolling marquee
  const row1 = [...galleryItems, ...galleryItems];
  const row2 = [...[...galleryItems].reverse(), ...[...galleryItems].reverse()];

  return (
    <section id="galeri" className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#B88E2F]/10 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-5">
            Inspiration Board
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
            Sekilas potret kelezatan hidangan, kehangatan atmosfer, dan keceriaan acara di Haber Cafe & Resto Bandung. Temukan inspirasi momen spesial Anda di sini.
          </p>
        </div>
      </div>

      {/* Inspiration Board Marquee */}
      <div className="relative w-full flex flex-col gap-4 sm:gap-6 py-2">
        
        {/* Row 1 - Scroll Left */}
        <div className="flex w-max animate-scroll-left">
          {row1.map((item, index) => (
            <div
              key={`r1-${index}`}
              className="w-[260px] sm:w-[350px] aspect-[4/3] flex-shrink-0 mx-2 sm:mx-3 group relative overflow-hidden bg-gray-200 cursor-pointer border border-gray-200 hover:border-[#B88E2F] shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#1F2937]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#B88E2F]">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-serif text-sm sm:text-base font-bold text-white line-clamp-1 mt-1">
                      {item.title}
                    </h3>
                  </div>
                  <div className="p-2.5 bg-[#B88E2F] rounded-full text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75 shadow-lg">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Row 2 - Scroll Right */}
        <div className="flex w-max animate-scroll-right">
          {row2.map((item, index) => (
            <div
              key={`r2-${index}`}
              className="w-[260px] sm:w-[350px] aspect-[4/3] flex-shrink-0 mx-2 sm:mx-3 group relative overflow-hidden bg-gray-200 cursor-pointer border border-gray-200 hover:border-[#B88E2F] shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#1F2937]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#B88E2F]">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-serif text-sm sm:text-base font-bold text-white line-clamp-1 mt-1">
                      {item.title}
                    </h3>
                  </div>
                  <div className="p-2.5 bg-[#B88E2F] rounded-full text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75 shadow-lg">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div
            id="gallery-lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[90vh] w-full overflow-hidden bg-white shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-white/90 text-[#1F2937] hover:bg-[#B88E2F] hover:text-white transition-colors focus:outline-none shadow-md rounded-full"
                aria-label="Tutup preview galeri"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-[65vh] sm:h-[75vh] bg-[#111] flex items-center justify-center p-2 sm:p-0">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-5 sm:p-6 bg-white text-[#1F2937] flex items-center justify-between border-t border-gray-100">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#B88E2F] font-bold">
                    {selectedImage.categoryLabel}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2937] mt-1">
                    {selectedImage.title}
                  </h4>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="text-xs text-[#6B7280] font-light uppercase tracking-widest">Haber Cafe & Resto</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
