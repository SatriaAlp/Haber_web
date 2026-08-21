import React, { useEffect } from "react";
import { WeddingNavbar } from "./WeddingNavbar";
import { WeddingHero } from "./WeddingHero";
import { WeddingValues } from "./WeddingValues";
import { WeddingServices } from "./WeddingServices";
import { WeddingPricing } from "./WeddingPricing";
import { WeddingGallery } from "./WeddingGallery";
import { WeddingVendors } from "./WeddingVendors";
import { WeddingTestimonials } from "./WeddingTestimonials";
import { WeddingContact } from "./WeddingContact";
import { WeddingFooter } from "./WeddingFooter";
import { MessageSquareHeart } from "lucide-react";
import { getElmourWhatsAppUrl, weddingBrandConfig } from "../../data/weddingData";

export const WeddingLandingPage: React.FC = () => {
  useEffect(() => {
    // Set page title for wedding
    const originalTitle = document.title;
    document.title = `${weddingBrandConfig.brandName} | Wedding Planner 2026 - Kemewahan yang Terjangkau`;
    window.scrollTo(0, 0);

    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1F2937] flex flex-col font-sans selection:bg-[#B88E2F]/25 selection:text-[#18110E]">
      {/* Sticky Wedding Navigation */}
      <WeddingNavbar />

      {/* Main Wedding Landing Content */}
      <main id="wedding-content" className="flex-1">
        <WeddingHero />
        <WeddingValues />
        <WeddingServices />
        <WeddingPricing />
        <WeddingGallery />
        <WeddingVendors />
        <WeddingTestimonials />
        <WeddingContact />
      </main>

      {/* Wedding Footer */}
      <WeddingFooter />

      {/* Floating WhatsApp Action for Igun Prabu */}
      <aside
        id="wedding-floating-whatsapp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
        aria-label="Konsultasi Wedding via WhatsApp"
      >
        <a
          id="btn-wedding-floating-wa"
          href={getElmourWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 transform group-hover:scale-105 active:scale-95 focus:outline-none"
        >
          <div className="w-5 h-5 flex items-center justify-center">
            <MessageSquareHeart className="w-5 h-5 fill-white text-[#25D366]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase font-bold tracking-wider leading-none text-white/90">
              Tanya Wedding
            </span>
            <span className="text-xs font-bold leading-tight text-white">
              Mas Igun Prabu
            </span>
          </div>
        </a>
      </aside>
    </div>
  );
};
