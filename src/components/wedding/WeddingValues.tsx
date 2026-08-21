import React from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  Palette, 
  Users, 
  ShieldCheck, 
  Camera, 
  Plane, 
  Crown, 
  MessageSquareHeart,
  Check,
  ArrowRight
} from "lucide-react";
import { weddingValues, getElmourWhatsAppUrl } from "../../data/weddingData";

export const WeddingValues: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "Palette":
        return <Palette className="w-5 h-5" />;
      case "Users":
        return <Users className="w-5 h-5" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5" />;
      case "Camera":
        return <Camera className="w-5 h-5" />;
      case "Plane":
        return <Plane className="w-5 h-5" />;
      case "Crown":
        return <Crown className="w-5 h-5" />;
      case "MessageSquareHeart":
        return <MessageSquareHeart className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="keunggulan" className="py-16 sm:py-20 bg-[#F9FAFB] text-[#1F2937] relative overflow-hidden border-b border-gray-200">
      {/* Subtle warm glow backgrounds matching initial website */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#B88E2F]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#4A5D4E]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#B88E2F]/20 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nilai Jual & Keunggulan</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F2937] mb-4">
            Keunggulan HABER Wedding Planner
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
            Positioning kelas menengah hingga luxury premium — menyasar pasangan profesional, pengusaha, dan keluarga besar yang menginginkan kesempurnaan momen tanpa kompromi.
          </p>
        </div>

        {/* 8 Value Cards Grid (2 Columns layout with bold & attractive text, no icons/numbers) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {weddingValues.map((val, idx) => (
            <motion.div
              key={val.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className={`relative p-7 sm:p-8 bg-white border-y border-r ${
                val.highlight 
                  ? "border-l-4 border-l-[#B88E2F] border-t-gray-200 border-b-gray-200 border-r-gray-200 shadow-xl" 
                  : "border-l-4 border-l-[#B88E2F]/40 hover:border-l-[#B88E2F] border-t-gray-200 border-b-gray-200 border-r-gray-200 hover:shadow-2xl"
              } transition-all duration-300 group shadow-md rounded-r-xl rounded-l-sm hover:-translate-y-1`}
            >
              {/* Badge */}
              {val.highlight && (
                <div className="absolute top-5 right-5 px-3 py-1 bg-[#B88E2F]/15 border border-[#B88E2F]/40 text-[#B88E2F] text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Signature
                </div>
              )}

              {/* Main Text Content */}
              <div className="pr-12 sm:pr-16">
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-gray-900 group-hover:text-[#B88E2F] transition-colors leading-snug mb-3">
                  {val.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
                  {val.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 sm:p-8 bg-white border border-[#B88E2F]/40 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#B88E2F]/10 border border-[#B88E2F] flex items-center justify-center flex-shrink-0 text-[#B88E2F]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1F2937] mb-1">
                Layanan Adat & Internasional Fleksibel
              </h4>
              <p className="text-xs sm:text-sm text-[#4B5563] font-light">
                Mulai dari Adat Sunda, Jawa, Minang, Betawi, Melayu hingga Western Modern International Wedding.
              </p>
            </div>
          </div>

          <a
            id="values-cta-konsultasi"
            href={getElmourWhatsAppUrl(undefined, "Tanya seputar adat & konsep pernikahan")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-center px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-[#B88E2F] hover:brightness-110 active:scale-98 transition-all shadow-md whitespace-nowrap"
          >
            Konsultasi Konsep Anda
          </a>
        </motion.div>

      </div>
    </section>
  );
};
