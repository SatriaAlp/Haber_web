import React from "react";
import { MessageCircle, Instagram, MapPin, Phone, Heart } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "../config/siteConfig";

export const Footer: React.FC = () => {
  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "Tentang", href: "#tentang" },
    { label: "Menu", href: "#menu" },
    { label: "Experience", href: "#experience" },
    { label: "Wedding & Event", href: "#wedding" },
    { label: "Katalog Wedding Elmour ↗", href: "/wedding", isExternal: true },
    { label: "Reservasi", href: "#reservasi" },
    { label: "Lokasi", href: "#lokasi" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal?: boolean) => {
    if (isExternal) {
      return; // Allow natural new tab navigation
    }
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#F9FAFB] text-[#4B5563] pt-16 pb-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-gray-200">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-2">
              <img 
                src="/logo.png" 
                alt="Haber Logo" 
                className="w-10 h-10 rounded-full border border-white/20 object-cover bg-white"
              />
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#1F2937]">
                HABER
              </span>
            </div>
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#B88E2F] font-bold mb-3">
              Cafe & Resto Bandung
            </span>
            <p className="font-serif text-sm font-light text-[#1F2937] tracking-wider mb-4 italic">
              "{siteConfig.tagline}"
            </p>
            <p className="text-xs text-[#4B5563] font-light leading-relaxed max-w-sm mb-6">
              Destinasi kuliner istimewa di Bandung yang memadukan kelezatan hidangan Nusantara & Western, live music session yang hangat, serta venue terbaik untuk perayaan event & wedding.
            </p>

            {/* Social Icons & WhatsApp */}
            <div className="flex items-center gap-3">
              <a
                id="footer-social-instagram"
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white shadow-sm hover:bg-[#B88E2F] text-[#4B5563] hover:text-white transition-all border border-gray-200"
                aria-label="Instagram Haber Cafe & Resto"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="footer-social-whatsapp"
                href={getWhatsAppUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white shadow-sm hover:bg-[#B88E2F] text-[#4B5563] hover:text-white transition-all border border-gray-200"
                aria-label="WhatsApp Customer Service"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-[#B88E2F] mb-4">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-xs text-[#4B5563] font-light">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    id={`footer-link-${link.label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    onClick={(e) => handleNavClick(e, link.href, link.isExternal)}
                    className={`transition-colors ${link.isExternal ? "text-[#B88E2F] font-semibold hover:underline" : "hover:text-[#B88E2F]"}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-[#B88E2F] mb-4">
              Kontak & Operasional
            </h4>
            <div className="space-y-3 text-xs text-[#4B5563] font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B88E2F] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B88E2F] flex-shrink-0" />
                <span>{siteConfig.whatsappDisplay} (CS WhatsApp)</span>
              </p>
              <div className="pt-2 border-t border-gray-200 text-[11px] text-[#6B7280] space-y-1">
                <p>Senin - Minggu: 10:00 - 23:00 WIB</p>
                <p className="text-[#B88E2F] font-medium">Live Music: Rabu - Minggu (Mulai 19:00 WIB)</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF] font-light">
          <p>© {new Date().getFullYear()} Haber Cafe & Resto Bandung. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted for</span>
            <span className="font-serif text-[#1F2937] italic">Bandung Culinary Connoisseurs</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
