import React, { useState, useEffect } from "react";
import { Menu, X, CalendarCheck, ArrowLeft, PhoneCall, Sparkles } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "../../config/siteConfig";

export const EventNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Event Kami", href: "#event-types" },
    { label: "Fasilitas", href: "#fasilitas" },
    { label: "Paket", href: "#paket" },
    { label: "Galeri", href: "#galeri-event" },
    { label: "Kontak", href: "#kontak-event" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      id="event-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md py-3.5 shadow-xl border-b border-[#B88E2F]/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">
            <a
              href="/"
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold transition-all border ${
                isScrolled
                  ? "text-[#4B5563] hover:text-[#1F2937] bg-gray-100 hover:bg-gray-200 border-gray-300"
                  : "text-[#EDE5D8] hover:text-white bg-black/40 hover:bg-black/60 border-white/20"
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#B88E2F]" />
              <span>Haber Utama</span>
            </a>

            <a href="#hero-event" onClick={(e) => handleNavClick(e, "#hero-event")} className="group flex items-center gap-3 focus:outline-none">
              <img src="/logo.png" alt="Haber Logo" className="w-12 h-12 rounded-full border-2 border-[#B88E2F]/40 object-cover shadow-sm bg-white" />
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className={`font-serif text-lg sm:text-xl font-bold tracking-wider group-hover:text-[#B88E2F] transition-colors ${isScrolled ? "text-[#1F2937]" : "text-white"}`}>
                    HABER <span className="text-[#B88E2F] font-serif">Event</span>
                  </span>
                  <span className="hidden md:inline-block text-[9px] px-1.5 py-0.5 bg-[#B88E2F]/20 text-[#B88E2F] border border-[#B88E2F]/30 uppercase tracking-widest font-bold">
                    Private Event
                  </span>
                </div>
                <span className={`text-[10px] uppercase tracking-[0.25em] font-normal -mt-0.5 ${isScrolled ? "text-[#4B5563]" : "text-gray-300"}`}>
                  Gathering • Birthday • Meeting
                </span>
              </div>
            </a>
          </div>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Event Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[11px] font-semibold uppercase tracking-widest hover:text-[#B88E2F] transition-colors py-1 focus:outline-none ${isScrolled ? "text-[#4B5563]" : "text-gray-200"}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppUrl("event")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white bg-[#B88E2F] hover:brightness-110 transition-all shadow-md"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Booking Event</span>
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2.5 hover:text-[#B88E2F] focus:outline-none transition-colors ${isScrolled ? "text-[#1F2937]" : "text-white"}`}
              aria-label="Buka Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#B88E2F]/30 shadow-2xl px-6 py-6">
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-gray-100 flex items-center justify-between text-[11px] text-[#4B5563]">
              <span className="flex items-center gap-1.5 text-[#B88E2F]">
                <Sparkles className="w-3.5 h-3.5" />
                Haber Cafe & Resto
              </span>
              <a href="/" className="text-[#1F2937] hover:text-[#B88E2F] underline text-xs">Ke Web Utama</a>
            </div>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-semibold uppercase tracking-widest text-[#1F2937] hover:text-[#B88E2F] py-1.5 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#B88E2F]">→</span>
                </a>
              ))}
            </nav>
            <div className="pt-4 border-t border-gray-100">
              <a
                href={getWhatsAppUrl("event")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white bg-[#B88E2F]"
              >
                <PhoneCall className="w-4 h-4" />
                <span>WA Tim Event: {siteConfig.phoneEvent}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
