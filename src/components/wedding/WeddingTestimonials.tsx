import React from "react";
import { motion } from "motion/react";
import { Quote, Star, Sparkles, Heart } from "lucide-react";
import { weddingTestimonials } from "../../data/weddingData";

export const WeddingTestimonials: React.FC = () => {
  return (
    <section id="testimoni" className="py-16 sm:py-20 bg-white text-[#1F2937] relative overflow-hidden border-b border-gray-200">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#B88E2F]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#B88E2F]/20 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <Heart className="w-3.5 h-3.5" />
            <span>Testimoni & Kisah Sukses</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F2937] mb-4">
            Kisah Bahagia Klien Kami
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
            Jangan hanya percaya kata-kata kami. Berikut adalah testimoni tulus dari pasangan pengantin yang telah mempercayakan hari istimewa mereka bersama HABER Elmour.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {weddingTestimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.12 }}
              className="p-8 bg-[#F9FAFB] border border-gray-200 hover:border-[#B88E2F] transition-all duration-300 flex flex-col justify-between relative group shadow-sm hover:shadow-xl"
            >
              <div className="absolute top-6 right-6 text-[#B88E2F]/20 group-hover:text-[#B88E2F]/40 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-[#B88E2F] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <blockquote className="font-serif italic text-base sm:text-lg text-[#1F2937] leading-relaxed mb-6 font-normal">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-6 border-t border-gray-200 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#B88E2F]"
                />
                <div>
                  <h4 className="font-serif font-bold text-[#1F2937] text-base">
                    {t.author}
                  </h4>
                  <p className="text-xs text-[#B88E2F] font-semibold">
                    {t.role}
                  </p>
                  <p className="text-[11px] text-[#6B7280] font-light mt-0.5">
                    {t.weddingDate}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
