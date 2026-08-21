import React from "react";
import { motion } from "motion/react";
import { Sparkles, HeartHandshake, Coffee, Users, ArrowRight } from "lucide-react";

export const About: React.FC = () => {
  const handleScrollToExperience = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const exp = document.querySelector("#experience");
    if (exp) {
      exp.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="tentang" className="py-16 sm:py-20 bg-white relative overflow-hidden border-b border-gray-200">
      {/* Decorative background warmth */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#B88E2F]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Visual Storytelling Images */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] z-10">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=900&auto=format&fit=crop"
                  alt="Interior dan suasana hangat di Haber Cafe & Resto Bandung"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#B88E2F] font-bold">Bandung Culinary Haven</p>
                  <p className="font-serif text-xl font-medium">Suasana Hangat & Estetik</p>
                </div>
              </div>

              {/* Floating Secondary Accent Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-52 h-52 overflow-hidden shadow-xl border-4 border-white z-20">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop"
                  alt="Kopi racikan khas Haber Cafe"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Subtle Gold Accent Box */}
              <div className="absolute -top-4 -left-4 w-28 h-28 bg-[#B88E2F]/10 -z-0"></div>
            </motion.div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              {/* Section Subtitle */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4A5D4E]/10 text-[#4A5D4E] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#4A5D4E]" />
                <span>Tentang Kami</span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] leading-[1.18] mb-6">
                Tempat Bertemunya Rasa dan Suasana
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed mb-8">
                Haber Cafe & Resto menghadirkan pengalaman kuliner yang hangat dengan pilihan makanan premium, suasana yang nyaman, live music berkala, serta ruang untuk berbagai momen spesial Anda di Bandung.
              </p>

              {/* 2 Quick Value Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full">
                <div className="flex items-start gap-3.5 p-4 bg-gray-50 border border-gray-200">
                  <div className="p-2 bg-white text-[#B88E2F] shadow-xs">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#1F2937]">Artisan Food & Drinks</h3>
                    <p className="text-xs text-[#6B7280] mt-0.5 font-light">Ragam menu Nusantara & Western</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-gray-50 border border-gray-200">
                  <div className="p-2 bg-white text-[#4A5D4E] shadow-xs">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#1F2937]">Spacious & Comfort</h3>
                    <p className="text-xs text-[#6B7280] mt-0.5 font-light">Area luas indoor & semi-outdoor</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                id="about-cta-kenal-lebih-dekat"
                href="#experience"
                onClick={handleScrollToExperience}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-[#1F2937] hover:bg-[#B88E2F] active:scale-98 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E2F]"
              >
                <span>KENAL LEBIH DEKAT</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
