import React from "react";
import { ArrowUp, Sparkles, PhoneCall, Mail, MapPin } from "lucide-react";
import { weddingBrandConfig, getElmourWhatsAppUrl } from "../../data/weddingData";

export const WeddingFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F9FAFB] text-[#4B5563] border-t border-gray-200 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-200">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Haber Logo" 
                className="w-10 h-10 rounded-full border border-gray-200 object-cover bg-white"
              />
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#1F2937] tracking-wider block">
                  HABER <span className="text-[#B88E2F] italic">Elmour</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B88E2F] font-bold">
                  Kemewahan yang Terjangkau • 2026
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#1F2937] font-serif italic max-w-sm">
              &ldquo;{weddingBrandConfig.tagline}&rdquo;
            </p>

            <p className="text-xs text-[#4B5563] font-light">
              Produk resmi layanan Wedding & Private Event berkelas dari <strong>{weddingBrandConfig.parentCompany}</strong>.
            </p>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-[#B88E2F] mb-4">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs font-light text-[#4B5563]">
              <li>
                <a href="#keunggulan" className="hover:text-[#B88E2F] transition-colors">8 Pilar Keunggulan</a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#B88E2F] transition-colors">Layanan Pra-Nikah & Hari H</a>
              </li>
              <li>
                <a href="#paket" className="hover:text-[#B88E2F] transition-colors">Paket Wedding (35Jt, 250Jt, 390Jt)</a>
              </li>
              <li>
                <a href="#galeri-wedding" className="hover:text-[#B88E2F] transition-colors">Galeri Karya Dekorasi</a>
              </li>
              <li>
                <a href="#vendor" className="hover:text-[#B88E2F] transition-colors">Jaringan Vendor Ahli</a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-[#B88E2F] transition-colors">Testimoni Klien</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hubungi Kami & Haber Cafe */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-[#B88E2F] mb-4">
              Kontak & Alamat
            </h4>
            <div className="space-y-2.5 text-xs text-[#4B5563] font-light">
              <div className="flex items-start gap-2.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#B88E2F] flex-shrink-0 mt-0.5" />
                <span>PIC: {weddingBrandConfig.contact.picName} ({weddingBrandConfig.contact.whatsappDisplay})</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#B88E2F] flex-shrink-0 mt-0.5" />
                <span>{weddingBrandConfig.contact.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#B88E2F] flex-shrink-0 mt-0.5" />
                <span>Haber Cafe & Resto, Bandung, Jawa Barat</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="/"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-[#B88E2F] text-[#1F2937] hover:text-white text-xs border border-gray-200 transition-all shadow-xs"
              >
                <span>← Kembali ke Website Utama Haber</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF] font-light">
          <div>
            <span>© {weddingBrandConfig.year} {weddingBrandConfig.brandName}. All rights reserved by {weddingBrandConfig.parentCompany}.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B88E2F] hover:underline cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
