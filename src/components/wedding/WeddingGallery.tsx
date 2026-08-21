import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Image as ImageIcon, X } from "lucide-react";
import { weddingGalleryItems, WeddingGalleryItem } from "../../data/weddingData";

export const WeddingGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<WeddingGalleryItem | null>(null);

  // 9 visible mosaic grid slots
  const [displaySlots, setDisplaySlots] = useState<WeddingGalleryItem[]>(() => 
    weddingGalleryItems.slice(0, 9)
  );

  // Index of slot currently undergoing crossfade animation
  const [animatingSlot, setAnimatingSlot] = useState<number | null>(null);

  // Automatic Random Crossfade Matrix Animation
  useEffect(() => {
    if (weddingGalleryItems.length <= 9) return;

    const interval = setInterval(() => {
      // Pick a random slot index (0 to 8) to swap out
      const slotToSwap = Math.floor(Math.random() * displaySlots.length);
      
      // Candidate items from weddingGalleryItems not currently displayed in displaySlots
      const currentIds = new Set(displaySlots.map((item) => item.id));
      const availableCandidates = weddingGalleryItems.filter((item) => !currentIds.has(item.id));

      if (availableCandidates.length > 0) {
        const nextItem = availableCandidates[Math.floor(Math.random() * availableCandidates.length)];

        // Start crossfade animation on chosen slot
        setAnimatingSlot(slotToSwap);

        setTimeout(() => {
          setDisplaySlots((prevSlots) => {
            const newSlots = [...prevSlots];
            newSlots[slotToSwap] = nextItem;
            return newSlots;
          });
          setAnimatingSlot(null);
        }, 550); // 550ms smooth crossfade duration
      }
    }, 2200); // Trigger a random crossfade every 2.2 seconds

    return () => clearInterval(interval);
  }, [displaySlots]);

  return (
    <section id="galeri-wedding" className="relative py-16 sm:py-24 overflow-hidden border-b border-gray-200 text-[#1F2937] bg-white">
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#B88E2F]/15 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-4 rounded-full shadow-sm">
            <ImageIcon className="w-3.5 h-3.5 text-[#B88E2F]" />
            <span>Mahakarya Karya • Photo Mosaic</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F2937] mb-3">
            Mahakarya & Inspirasi Dekorasi
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
            Galeri visual dinamis bertema <em>Random Crossfade Matrix</em> yang menampilkan foto-foto momen keindahan pernikahan Haber Elmour.
          </p>
        </div>

        {/* Larger & Elegant Random Crossfade Photo Matrix Grid (3 Columns Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {displaySlots.map((item, index) => {
            const isFading = animatingSlot === index;

            return (
              <div
                key={`slot-${index}`}
                onClick={() => setActiveItem(item)}
                className="group relative overflow-hidden bg-gray-900 border border-gray-200 hover:border-[#B88E2F] cursor-pointer transition-all duration-500 shadow-lg hover:shadow-2xl rounded-2xl aspect-[4/3]"
              >
                {/* Crossfade Image with smooth opacity & subtle scale */}
                <motion.img
                  key={item.id}
                  src={item.image}
                  alt={item.title || "Wedding Photo"}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ 
                    opacity: isFading ? 0.15 : 1, 
                    scale: isFading ? 0.96 : 1 
                  }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Subtle Glow Border on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#B88E2F]/80 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Full-Screen Lightbox Modal (Pure Photo View) */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
              onClick={() => setActiveItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full bg-black border border-[#B88E2F]/40 shadow-2xl overflow-hidden rounded-2xl flex flex-col items-center"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/75 text-white hover:text-[#B88E2F] flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                  aria-label="Tutup Preview"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Pure Modal Image View */}
                <div className="w-full max-h-[85vh] overflow-hidden flex items-center justify-center bg-black">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title || "Wedding Photo"}
                    className="w-full h-full object-contain max-h-[85vh]"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

