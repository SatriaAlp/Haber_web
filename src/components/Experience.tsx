import React from "react";
import { motion } from "motion/react";
import { Sparkles, Utensils, CalendarCheck, HeartHandshake, Music } from "lucide-react";
import { experienceItems } from "../data/experienceData";

export const Experience: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case "dining":
        return <Utensils className="w-5 h-5" />;
      case "event":
        return <CalendarCheck className="w-5 h-5" />;
      case "wedding":
        return <HeartHandshake className="w-5 h-5" />;
      case "live-music":
        return <Music className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-20 bg-[#F9FAFB] text-[#1F2937] relative overflow-hidden border-b border-gray-200">
      {/* Subtle warm glow backgrounds */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#B88E2F]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#4A5D4E]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#B88E2F]/20 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Haber Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F2937] mb-4">
            Pengalaman Lebih dari Sekadar Rasa
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
            Empat pilar pengalaman istimewa yang kami hadirkan untuk melengkapi setiap kunjungan Anda di Bandung.
          </p>
        </div>

        {/* 4 Experience Grid (2x2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {experienceItems.map((item, index) => {
            const isWedding = item.id === "wedding";

            const CardContent = (
              <div className="flex flex-col h-full">
                {/* Image with Dark Gradient Overlay */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Floating Category Tag */}
                  <div className="absolute top-4 left-4 px-4 py-1.5 bg-white/95 backdrop-blur-sm border border-[#B88E2F]/30 text-xs font-bold uppercase tracking-wider text-[#B88E2F] shadow-sm">
                    {item.badge}
                  </div>

                  {isWedding && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#181A16]/90 backdrop-blur-sm border border-[#D4AF37] text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] shadow-lg flex items-center gap-1.5 animate-pulse">
                      <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                      <span>Buka Katalog Elmour ↗</span>
                    </div>
                  )}
                </div>

                {/* Text Card Body */}
                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3 text-[#B88E2F]">
                      {React.cloneElement(getIcon(item.id) as React.ReactElement, { className: 'w-5 h-5' })}
                      <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-[#1F2937] group-hover:text-[#B88E2F] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm uppercase font-bold tracking-widest text-[#B88E2F] mb-4">
                      {item.subtitle}
                    </p>

                    <p className="text-sm md:text-base text-[#4B5563] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px] uppercase tracking-wider text-[#9CA3AF] group-hover:text-[#1F2937] transition-colors">
                    <span>Haber Bandung</span>
                    <span className={`font-semibold flex items-center gap-1 ${isWedding ? "text-[#B88E2F] opacity-100" : "text-[#B88E2F] opacity-0 group-hover:opacity-100"} transition-opacity`}>
                      {isWedding ? "Buka Tab Baru ↗" : "Jelajahi →"}
                    </span>
                  </div>
                </div>
              </div>
            );

            if (isWedding) {
              return (
                <motion.a
                  key={item.id}
                  id="experience-card-wedding"
                  href="/wedding"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="group relative overflow-hidden bg-white border-2 border-[#B88E2F]/40 hover:border-[#B88E2F] hover:shadow-2xl transition-all duration-500 flex flex-col h-full shadow-lg block focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                  title="Buka HABER Elmour Wedding Planner di Tab Baru"
                >
                  {CardContent}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-white border border-gray-200 hover:border-[#B88E2F] hover:shadow-2xl transition-all duration-500 flex flex-col h-full shadow-lg"
              >
                {CardContent}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
