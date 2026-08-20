import React, { useState, useEffect } from "react";
import { Menu, X, PhoneCall, Calendar, MapPin, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "../config/siteConfig";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Tentang", href: "#tentang" },
    { label: "Menu", href: "#menu" },
    { label: "Experience", href: "#experience" },
    { label: "Wedding", href: "#wedding" },
    { label: "Galeri", href: "#galeri" },
    { label: "Lokasi", href: "#lokasi" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md py-3.5 shadow-xl border-b border-[#B88E2F]/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E2F] rounded-sm"
          >
            <img 
              src="/logo.png" 
              alt="Haber Logo" 
              className="w-12 h-12 rounded-full border-2 border-[#B88E2F]/40 object-cover shadow-sm bg-white"
            />
            <div className="flex flex-col">
              <span className={`font-serif text-lg sm:text-xl font-bold tracking-wider group-hover:text-[#B88E2F] transition-colors ${isScrolled ? "text-[#1F2937]" : "text-white"}`}>
                HABER
              </span>
              <span className={`text-[10px] uppercase tracking-[0.25em] font-normal -mt-0.5 ${isScrolled ? "text-[#4B5563]" : "text-gray-300"}`}>
                Cafe & Resto
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[11px] font-semibold uppercase tracking-widest hover:text-[#B88E2F] transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E2F] rounded ${isScrolled ? "text-[#4B5563]" : "text-gray-200"}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button (Desktop) & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              id="nav-cta-desktop"
              href={getWhatsAppUrl("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-none text-[11px] font-bold uppercase tracking-widest text-white bg-[#B88E2F] hover:brightness-110 active:scale-98 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reservasi Sekarang</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2.5 rounded-xs hover:text-[#B88E2F] hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#B88E2F] transition-colors ${isScrolled ? "text-[#1F2937]" : "text-white"}`}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-white border-b border-[#B88E2F]/30 shadow-2xl px-6 py-6 transition-all duration-300 ease-in-out"
        >
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-gray-100 flex items-center justify-between text-[11px] text-[#4B5563]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B88E2F]" />
                Bandung, Jawa Barat
              </span>
              <span className="flex items-center gap-1.5 text-[#B88E2F]">
                <Sparkles className="w-3.5 h-3.5" />
                Live Music Ready
              </span>
            </div>

            <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  id={`mobile-nav-link-${link.label.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-semibold uppercase tracking-widest text-[#1F2937] hover:text-[#B88E2F] py-1.5 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#B88E2F] opacity-60">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
              <a
                id="mobile-nav-cta-whatsapp"
                href={getWhatsAppUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-none text-xs font-bold uppercase tracking-widest text-white bg-[#B88E2F] hover:brightness-110 transition-all shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Reservasi WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
