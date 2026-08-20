import React from "react";
import { motion } from "motion/react";
import { 
  Users, 
  Camera, 
  Flower2, 
  Utensils, 
  Music, 
  Sparkles, 
  Smartphone,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { weddingVendorCategories } from "../../data/weddingData";

export const WeddingVendors: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Camera":
        return <Camera className="w-5 h-5" />;
      case "Flower2":
        return <Flower2 className="w-5 h-5" />;
      case "Utensils":
        return <Utensils className="w-5 h-5" />;
      case "Music":
        return <Music className="w-5 h-5" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5" />;
      default:
        return <Users className="w-5 h-5" />;
    }
  };

  return (
    <section id="vendor" className="py-16 sm:py-20 bg-[#F9FAFB] text-[#1F2937] relative overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#B88E2F]/20 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Jaringan Vendor Ahli</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F2937] mb-4">
            Ekosistem Vendor Terkurasi & Berpengalaman
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] font-light leading-relaxed">
            Kami telah mengembangkan hubungan yang kuat dengan jaringan vendor pernikahan profesional terpercaya. Kami memilih sendiri vendor yang sesuai dengan visi Anda untuk memastikan pengalaman yang mulus dan serasi.
          </p>
        </div>

        {/* Vendor Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {weddingVendorCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="p-6 sm:p-7 bg-white border border-gray-200 hover:border-[#B88E2F] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="w-12 h-12 mb-4 bg-[#F9FAFB] border border-gray-200 group-hover:border-[#B88E2F] text-[#B88E2F] flex items-center justify-center transition-all">
                  {getIcon(cat.icon)}
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1F2937] group-hover:text-[#B88E2F] transition-colors mb-2">
                  {cat.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed mb-4">
                  {cat.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-gray-100">
                  {cat.examples.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#4B5563] font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B88E2F] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#9CA3AF]">
                <span>Standar Mutu Teruji</span>
                <span className="text-[#B88E2F] font-semibold">Terkurasi 100%</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
