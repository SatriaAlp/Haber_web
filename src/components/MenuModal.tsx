import React, { useState } from "react";
import { X, Utensils, Sparkles, MessageSquare } from "lucide-react";
import { allMenuItems } from "../data/menuData";
import { getWhatsAppUrl } from "../config/siteConfig";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  if (!isOpen) return null;

  const categories = [
    { id: "all", label: "Semua Menu" },
    { id: "nusantara", label: "Nusantara" },
    { id: "western", label: "Western & Grill" },
    { id: "snack_dessert", label: "Snack & Dessert" },
    { id: "coffee_beverage", label: "Coffee & Beverage" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? allMenuItems
      : allMenuItems.filter((item) => item.category === selectedCategory);

  return (
    <div
      id="menu-full-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#FAF7F2] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-[#C59B27]/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#2A2522] text-white border-b border-[#B88E2F]/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#B88E2F] text-white">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h3 id="menu-modal-title" className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
                Menu Lengkap Haber
              </h3>
              <p className="text-xs text-[#EDE5D8]/70 font-light">Pilihan hidangan terbaik untuk setiap selera</p>
            </div>
          </div>
          <button
            id="close-menu-modal-btn"
            type="button"
            onClick={onClose}
            className="p-2 text-[#EDE5D8]/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            aria-label="Tutup menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="px-6 py-3.5 bg-[#F9F5F0] border-b border-[#EDE5D8] flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${selectedCategory === cat.id
                ? "bg-[#2A2522] text-white shadow-xs"
                : "bg-white text-[#554740] hover:bg-[#2A2522] hover:text-white border border-[#EDE5D8]"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items List */}
        <div className="p-6 overflow-y-auto space-y-4 max-h-[60vh] bg-[#FDFCFB]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-3.5 p-3.5 bg-white border border-[#EDE5D8] hover:border-[#B88E2F] shadow-xs hover:shadow-md transition-all group"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-1 mb-1">
                      <h4 className="font-serif font-bold text-sm sm:text-base text-[#2A2522] truncate">
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-xs text-[#6B5A52] font-light line-clamp-2 leading-relaxed mb-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-[#F9F5F0]">
                    <span className="font-semibold text-xs sm:text-sm text-[#B88E2F]">
                      {item.price}
                    </span>
                    <a
                      href={getWhatsAppUrl("general", `Halo Haber, saya ingin memesan / menanyakan ketersediaan menu: ${item.name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold uppercase tracking-wider text-[#2A2522] hover:text-[#B88E2F] flex items-center gap-1 transition-colors"
                    >
                      <MessageSquare className="w-3 h-3 text-[#B88E2F]" />
                      <span>Pesan via WA</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#F9F5F0] border-t border-[#EDE5D8] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#73635B] font-light text-center sm:text-left">
            *Harga dapat berubah sewaktu-waktu. Seluruh sajian diolah higienis dengan bahan segar pilihan.
          </p>
          <a
            id="modal-wa-reserve-btn"
            href={getWhatsAppUrl("table")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white bg-[#B88E2F] hover:brightness-110 transition-all shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Reservasi Meja Sekarang</span>
          </a>
        </div>
      </div>
    </div>
  );
};
