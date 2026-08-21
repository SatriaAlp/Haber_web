import React from "react";
import { motion } from "motion/react";
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight
} from "lucide-react";
import { weddingVendorCategories, getElmourWhatsAppUrl } from "../../data/weddingData";

export const WeddingVendors: React.FC = () => {
  return (
    <section id="vendor" className="py-16 sm:py-24 bg-[#F9FAFB] text-[#1F2937] relative overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#B88E2F]/15 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-4 rounded-full">
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

        {/* 2-Column Side-by-Side Compact Alternating Cards Grid (Matching Reference Screenshot) */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {weddingVendorCategories.map((cat, idx) => {
            // Alternate text and image positions for visual variety
            const isTextLeft = idx % 2 === 0;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (idx % 2) * 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Text Content Column */}
                <div
                  className={`p-6 sm:p-7 flex flex-col justify-between ${
                    isTextLeft ? "sm:order-1" : "sm:order-2"
                  }`}
                >
                  <div>
                    {/* Eyebrow Label */}
                    <div className="inline-block px-2.5 py-0.5 bg-[#FAF8F5] border border-[#B88E2F]/30 text-[#B88E2F] text-[10px] font-bold uppercase tracking-wider rounded-full mb-3">
                      Vendor Terkurasi 100%
                    </div>

                    {/* Headline Title */}
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1F2937] group-hover:text-[#B88E2F] transition-colors leading-snug mb-2">
                      {cat.title}
                    </h3>

                    {/* Description Copy */}
                    <p className="text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed mb-4 line-clamp-3">
                      {cat.description}
                    </p>

                    {/* Feature Examples List */}
                    <div className="space-y-1.5 pt-3 border-t border-gray-100 mb-5">
                      {cat.examples.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-[#374151] font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B88E2F] flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <a
                      href={getElmourWhatsAppUrl(undefined, `Tanya seputar vendor ${cat.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#1F2937] hover:bg-[#B88E2F] text-white text-[11px] font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5 active:scale-98"
                    >
                      <span>Tanya Vendor</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <span className="text-[10px] font-semibold text-[#B88E2F] uppercase tracking-wider">
                      Teruji
                    </span>
                  </div>
                </div>

                {/* Image Column */}
                <div
                  className={`relative overflow-hidden min-h-[220px] sm:min-h-[260px] h-full bg-gray-100 ${
                    isTextLeft ? "sm:order-2" : "sm:order-1"
                  }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

