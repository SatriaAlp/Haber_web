import React, { useState, useEffect } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";

export const WeddingNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Layanan", href: "#layanan" },
    { label: "Paket & Harga", href: "#paket" },
    { label: "Galeri", href: "#galeri-wedding" },
    { label: "Vendor", href: "#vendor" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Kontak", href: "#kontak" },
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
      id="wedding-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-[#B88E2F]/20"
          : "bg-[#2A2522]/80 backdrop-blur-md py-4 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Button Haber Utama + Brand Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              id="wedding-back-to-main"
              href="/"
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wide whitespace-nowrap rounded-full transition-all border ${
                isScrolled
                  ? "text-gray-700 hover:text-[#B88E2F] bg-gray-100 hover:bg-gray-200 border-gray-300"
                  : "text-gray-200 hover:text-white bg-white/10 hover:bg-white/20 border-white/20 backdrop-blur-sm"
              }`}
              title="Kembali ke Halaman Utama Haber Cafe & Resto"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#B88E2F]" />
              <span>Haber Utama</span>
            </a>

            <div className="h-5 w-[1px] bg-white/20 hidden sm:block"></div>

            <a
              id="wedding-nav-brand"
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="group flex items-center gap-2.5 focus:outline-none"
            >
              <img 
                src="/logo.png" 
                alt="Haber Logo" 
                className="w-9 h-9 rounded-full border border-[#B88E2F]/50 object-cover shadow-sm bg-white"
              />
              <span className={`font-serif text-lg sm:text-xl font-bold tracking-wider group-hover:text-[#B88E2F] transition-colors ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}>
                HABER <span className="text-[#B88E2F] italic font-serif">Elmour</span>
              </span>
            </a>
          </div>

          {/* Right/Center: Navigation Links */}
          <nav id="wedding-desktop-nav" className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Wedding Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`wedding-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[12px] font-semibold uppercase tracking-widest hover:text-[#B88E2F] transition-colors py-1 relative focus:outline-none ${
                  isScrolled ? "text-gray-700" : "text-gray-200"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            id="wedding-mobile-toggle"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 hover:text-[#B88E2F] focus:outline-none transition-colors ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
            aria-label="Buka Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="wedding-mobile-drawer"
          className="lg:hidden bg-[#2A2522] border-b border-[#B88E2F]/30 shadow-2xl px-6 py-5 transition-all duration-300 ease-in-out"
        >
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-white/10 flex items-center justify-between text-xs text-gray-300">
              <a href="/" className="text-gray-300 hover:text-[#B88E2F] flex items-center gap-1.5 font-medium">
                <ArrowLeft className="w-3.5 h-3.5 text-[#B88E2F]" />
                Ke Haber Utama
              </a>
            </div>

            <nav className="flex flex-col space-y-3" aria-label="Mobile Wedding Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  id={`wedding-mob-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs font-semibold uppercase tracking-widest text-gray-200 hover:text-[#B88E2F] py-1.5 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#B88E2F]">→</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

