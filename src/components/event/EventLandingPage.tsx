import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CalendarCheck, Users, Cake, Briefcase, Coffee, Music2,
  CheckCircle2, MessageCircle, Sparkles, MapPin, Clock,
  ChevronDown, Phone, Instagram, ArrowLeft, Download, GraduationCap, Building2, Gift
} from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "../../config/siteConfig";
import { EventNavbar } from "./EventNavbar";

// ─── Data ──────────────────────────────────────────────────────────────────

const eventTypes = [
  {
    icon: <Building2 className="w-7 h-7" />,
    title: "Corporate & Gathering",
    desc: "Annual dinner, rapat kerja, team building, launching produk, atau press conference dengan fasilitas lengkap.",
    image: "https://habercafeandresto.co.id/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-01-at-18.58.27-minimizer-.jpeg",
  },
  {
    icon: <Cake className="w-7 h-7" />,
    title: "Birthday Party",
    desc: "Ulang tahun anak, dewasa, atau sweet seventeen dengan pilihan dekorasi cantik dan menu lezat.",
    image: "https://habercafeandresto.co.id/wp-content/uploads/2026/05/bf-event-1.webp",
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: "Perpisahan Sekolah",
    desc: "Momen perpisahan berkesan untuk TK, SD, SMP, hingga SMA/SMK dengan bonus khusus sekolah.",
    image: "https://habercafeandresto.co.id/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-01-at-18.58.17-1-minimizer-.jpeg",
  },
  {
    icon: <Briefcase className="w-7 h-7" />,
    title: "Meeting & Seminar",
    desc: "Ruang VIP / Meeting Room eksklusif untuk 20-30 orang dengan proyektor dan sound system.",
    image: "https://habercafeandresto.co.id/wp-content/uploads/2026/06/Mewah-udah-kaya-dimana.jpeg",
  },
  {
    icon: <Music2 className="w-7 h-7" />,
    title: "Karaoke & Hiburan",
    desc: "Sesi kumpul komunitas dan arisan seru ditemani live music dan fasilitas karaoke gratis.",
    image: "https://habercafeandresto.co.id/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-02-at-19.08.53.jpeg",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Kapasitas Ekstra",
    desc: "Area indoor dan semi-outdoor luas yang fleksibel, dapat menampung hingga 600 tamu undangan.",
    image: "https://habercafeandresto.co.id/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-01-at-18.58.19-minimizer-.jpeg",
  },
];

type PackageCategory = "corporate" | "birthday" | "school";

const packageData: Record<PackageCategory, any> = {
  corporate: {
    title: "Corporate & Business Event",
    desc: "Solusi terbaik untuk setiap momen penting perusahaan Anda.",
    packages: [
      { name: "Paket Promo Hemat", price: "Rp 35.000", unit: "/ Pax", minOrder: "50 Pax", color: "border-gray-200", features: ["Nasi Putih", "Ayam Goreng / Bakar", "Tahu & Tempe", "Sambal"] },
      { name: "Paket Promo Favorit", price: "Rp 55.000", unit: "/ Pax", minOrder: "50 Pax", badge: "Populer", color: "border-[#B88E2F]", features: ["Nasi, Ayam Goreng/Bakar", "Lalapan, Tahu & Tempe", "Sambal, Es Teh Manis", "1 Snack Compliment"] },
      { name: "Paket Promo Premium", price: "Rp 75.000", unit: "/ Pax", minOrder: "50 Pax", color: "border-gray-200", features: ["Nasi, Ayam Goreng/Bakar", "Lalapan, Tahu & Tempe", "Sambal, Es Teh Manis", "5 Snack Compliment"] },
      { name: "Paket Catering", price: "Rp 25.000", unit: "/ Pax", minOrder: "100 Pax", color: "border-gray-200", features: ["Berbagai Pilihan Menu Lauk", "Cocok Untuk Rombongan Besar"] },
      { name: "Paket Arisan/Meeting", price: "Rp 700.000", unit: "/ Acara", minOrder: "Senin - Kamis", badge: "Promo", color: "border-blue-200 bg-blue-50/50", features: ["Hemat Rp 300.000!", "Ruang Meeting / VIP Private", "Free Karaoke & Proyektor", "Paket Makan Group"] },
    ],
    bonuses: [
      { title: "Cocok Untuk", items: ["Corporate Gathering", "Rapat Kerja (Raker)", "Team Building", "Training & Workshop", "Product Launching", "Press Conference"] }
    ],
    pdfLink: "https://habercafeandresto.co.id/wp-content/uploads/2026/06/proposal-penawaran-perusahaan-2.pdf"
  },
  birthday: {
    title: "Paket Birthday Party",
    desc: "Rayakan momen spesial ulang tahun dengan dekorasi custom dan pilihan paket fleksibel.",
    packages: [
      { name: "Paket Silver", price: "Rp 45.000", unit: "/ Pax", minOrder: "30 Pax", color: "border-gray-200", features: ["Nasi Putih", "Ayam Goreng / Bakar", "Tahu & Tempe", "Sambal & Lalapan", "Es Teh Manis"] },
      { name: "Paket Gold", price: "Rp 55.000", unit: "/ Pax", minOrder: "30 Pax", badge: "Best Seller", color: "border-[#B88E2F]", features: ["Nasi Putih", "Ayam Goreng / Bakar", "Tahu & Tempe", "Sambal & Lalapan", "Es Teh Manis", "1 Snack Box (Pastel/Risol/dll)"] },
      { name: "Paket Platinum", price: "Rp 75.000", unit: "/ Pax", minOrder: "30 Pax", color: "border-gray-200", features: ["Nasi Putih", "Ayam Goreng / Bakar", "Tahu & Tempe", "Sambal & Lalapan", "Es Teh Manis", "3 Snack Pilihan"] },
    ],
    bonuses: [
      { title: "Bonus Khusus & Fasilitas", items: ["Waktu Acara 3 Jam", "Free Karaoke", "Free Sound System", "Free MC Internal", "Free Mix Fruit (min 50 Pax)", "Free Area Panggung/VIP"] }
    ],
    pdfLink: "https://habercafeandresto.co.id/wp-content/uploads/2026/06/PROPOSAL-BIRTHDAY-HABER.pdf"
  },
  school: {
    title: "Paket Perpisahan Sekolah",
    desc: "Tempat terbaik untuk momen perpisahan sekolah yang berkesan (TK, SD, SMP, SMA/SMK).",
    packages: [
       { name: "Paket Hemat", price: "Rp 35.000", unit: "/ Pax", minOrder: "50 Pax", color: "border-gray-200", features: ["Nasi + Ayam", "Es Teh Manis", "Snack"] },
       { name: "Paket Favorit", price: "Rp 55.000", unit: "/ Pax", minOrder: "50 Pax", badge: "Paling Diminati", color: "border-[#B88E2F]", features: ["Nasi + Ayam Bakar/Goreng", "Lalapan & Sambal", "Es Teh Manis", "Snack Box"] },
       { name: "Paket Premium", price: "Rp 75.000", unit: "/ Pax", minOrder: "50 Pax", color: "border-gray-200", features: ["Nasi & Ayam Bakar Premium", "Lalapan Lengkap", "Buah Potong & Snack Box", "Minuman Pilihan"] },
    ],
    bonuses: [
      { title: "Bonus Khusus Sekolah", items: ["Gratis Penggunaan Area Acara", "Gratis Sound System", "Diskon Hingga 15% (>100 Pax)", "Free Dokumentasi Foto (S&K Berlaku)", "Voucher Makan untuk Guru & Panitia"] }
    ],
    pdfLink: "https://habercafeandresto.co.id/wp-content/uploads/2026/06/penawaran-acara_compressed.pdf"
  }
};

const facilities = [
  "Kapasitas Besar hingga 600 Orang",
  "Area Indoor & Semi Outdoor Luas",
  "Ruang VIP / Meeting Room",
  "Area Panggung & Sound System",
  "Karaoke & Live Music",
  "Dekorasi Acara Custom",
  "Projector & Screen TV",
  "Tim Event Support Profesional",
  "Area Parkir Kendaraan Luas",
  "Akses Mudah di Bandung Timur",
];

// ─── Main Page ──────────────────────────────────────────────────────────────

export const EventLandingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PackageCategory>("corporate");

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Haber Event | Corporate, Birthday & Perpisahan Sekolah";
    window.scrollTo(0, 0);
    return () => { document.title = originalTitle; };
  }, []);

  const renderPackages = (category: PackageCategory) => {
    const data = packageData[category];
    return (
      <motion.div
        key={category}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-center mb-10">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2937] mb-3">{data.title}</h3>
          <p className="text-[#4B5563] text-sm max-w-2xl mx-auto">{data.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-center">
          {data.packages.map((pkg: any, idx: number) => (
            <div
              key={idx}
              className={`relative bg-white border-2 ${pkg.color} hover:border-[#B88E2F] hover:shadow-xl transition-all duration-400 p-7 flex flex-col`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-[#B88E2F] text-white text-[10px] font-bold uppercase tracking-widest">
                  {pkg.badge}
                </div>
              )}
              <div>
                <h4 className="font-serif text-xl font-bold text-[#1F2937] mb-1">{pkg.name}</h4>
                <div className="flex items-center gap-1.5 mb-4">
                  <Users className="w-3.5 h-3.5 text-[#B88E2F]" />
                  <p className="text-xs text-[#B88E2F] font-bold uppercase tracking-widest">Min. {pkg.minOrder}</p>
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-serif font-bold text-[#1F2937]">{pkg.price}</span>
                  <span className="text-sm font-medium text-gray-500">{pkg.unit}</span>
                </div>
                <ul className="space-y-2.5 mb-8">
                  {pkg.features.map((f: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#4B5563]">
                      <CheckCircle2 className="w-4 h-4 text-[#B88E2F] flex-shrink-0 mt-0.5" />
                      <span className="font-light leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={getWhatsAppUrl("event")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-[#1F2937] bg-gray-100 hover:bg-[#B88E2F] hover:text-white transition-colors border border-gray-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pesan Sekarang</span>
              </a>
            </div>
          ))}
        </div>

        {data.bonuses.length > 0 && (
          <div className="bg-[#B88E2F]/10 border border-[#B88E2F]/20 p-6 md:p-8 rounded-lg max-w-4xl mx-auto">
            {data.bonuses.map((bonus: any, idx: number) => (
              <div key={idx}>
                <h4 className="text-[#B88E2F] font-bold uppercase tracking-widest text-sm mb-4 text-center flex items-center justify-center gap-2">
                  <Gift className="w-4 h-4" />
                  {bonus.title}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {bonus.items.map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#1F2937]">
                      <Sparkles className="w-3.5 h-3.5 text-[#B88E2F] flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#1F2937] flex flex-col font-sans selection:bg-[#B88E2F]/25 selection:text-[#18110E]">
      <EventNavbar />

      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section id="hero-event" className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-20 px-4 overflow-hidden bg-[#1F2937] text-white">
          <div className="absolute inset-0 z-0 bg-[#141414]">
            {/* Clean dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1c] via-[#141414] to-[#0a0a0a]" />
            {/* Subtle elegant gold glow in the center */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B88E2F]/10 rounded-full blur-[100px] pointer-events-none" />
          </div>

          <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center mt-10">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.3em] mb-6 bg-[#1F2937]/80 backdrop-blur-sm"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Venue Event & Gathering • Haber Bandung</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.08]"
            >
              Momen Berharga,<br />Di Tempat Istimewa
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[#B88E2F] text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase mb-6"
            >
              <span>Corporate Event</span>
              <span className="text-white/30">•</span>
              <span>Birthday Party</span>
              <span className="text-white/30">•</span>
              <span>Perpisahan Sekolah</span>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-24 sm:w-32 h-[1.5px] bg-[#B88E2F] mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl text-sm sm:text-base text-white/85 font-light leading-relaxed mb-10 px-4 text-center"
            >
              Wujudkan acara impian Anda di Haber Cafe & Resto Bandung. Ruang luas berarsitektur bambu estetik, kapasitas hingga 600 orang, fasilitas lengkap, dan masakan Nusantara terbaik.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-12"
            >
              <a
                href="#paket"
                onClick={(e) => { e.preventDefault(); document.querySelector("#paket")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center justify-center gap-2.5 px-9 py-4 text-xs font-bold uppercase tracking-widest text-white bg-[#B88E2F] hover:brightness-110 transition-all shadow-md min-w-[240px]"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Lihat Paket & Harga</span>
              </a>
              <a
                href="#download-proposal"
                onClick={(e) => { e.preventDefault(); document.querySelector("#download-proposal")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center justify-center gap-2.5 px-9 py-4 text-xs font-bold uppercase tracking-widest text-white bg-white/5 hover:bg-white/10 border border-white/20 transition-all backdrop-blur-sm min-w-[240px]"
              >
                <Download className="w-4 h-4 text-[#B88E2F]" />
                <span>Download Proposal</span>
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full max-w-3xl pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {["Kapasitas 600 Pax", "Tim Profesional", "Fasilitas Lengkap", "Lokasi Strategis"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#1F2937]/80 backdrop-blur-sm p-3 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#B88E2F] flex-shrink-0" />
                  <span className="text-[11px] text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── EVENT TYPES ───────────────────────────────────────────────── */}
        <section id="event-types" className="py-20 sm:py-28 bg-[#F9FAFB] border-b border-gray-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B88E2F]/8 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#B88E2F]/15 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Jenis Acara</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4">Venue Untuk Berbagai Kebutuhan</h2>
              <p className="text-base text-[#4B5563] font-light leading-relaxed">
                Dari acara sekolah, pesta ulang tahun, hingga acara korporat besar — Haber Cafe siap memberikan pengalaman terbaik.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventTypes.map((type, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className="group bg-white border border-gray-200 hover:border-[#B88E2F] hover:shadow-xl transition-all duration-400 overflow-hidden"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={type.image} alt={type.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-11 h-11 flex items-center justify-center bg-[#B88E2F] text-white">
                      {type.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-[#1F2937] mb-2 group-hover:text-[#B88E2F] transition-colors">{type.title}</h3>
                    <p className="text-sm text-[#6B7280] font-light leading-relaxed">{type.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PAKET (TABBED) ────────────────────────────────────────────── */}
        <section id="paket" className="py-20 sm:py-28 bg-white border-b border-gray-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#B88E2F]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="text-center max-w-xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#B88E2F]/15 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-5">
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Paket & Harga Lengkap</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4">Pilih Paket Sesuai Acara</h2>
              <p className="text-base text-[#4B5563] font-light">Berbagai pilihan paket menarik dengan harga kompetitif dan fasilitas lengkap.</p>
            </motion.div>

            {/* TABS HEADER */}
            <div className="flex flex-wrap justify-center gap-2 mb-14 border-b border-gray-200 pb-4">
              {[
                { id: "corporate", label: "Corporate & Gathering", icon: <Building2 className="w-4 h-4" /> },
                { id: "birthday", label: "Birthday Party", icon: <Cake className="w-4 h-4" /> },
                { id: "school", label: "Perpisahan Sekolah", icon: <GraduationCap className="w-4 h-4" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as PackageCategory)}
                  className={`flex items-center gap-2 px-5 py-3 text-sm font-bold uppercase tracking-wider transition-all rounded-full ${
                    activeTab === tab.id
                      ? "bg-[#1F2937] text-white shadow-md"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TABS CONTENT */}
            <AnimatePresence mode="wait">
              {renderPackages(activeTab)}
            </AnimatePresence>

          </div>
        </section>

        {/* ── FASILITAS ─────────────────────────────────────────────────── */}
        <section id="fasilitas" className="py-20 sm:py-28 bg-[#F9FAFB] border-b border-gray-200 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A5D4E]/8 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#B88E2F]/15 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Lebih Dari Sekadar Tempat</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4 leading-[1.2]">
                  Mengapa Memilih Haber Cafe & Resto?
                </h2>
                <p className="text-base text-[#4B5563] font-light leading-relaxed mb-8">
                  Haber Cafe & Resto hadir sebagai solusi venue terpadu yang menggabungkan kenyamanan, fasilitas lengkap, kuliner berkualitas, dan pelayanan profesional dalam satu lokasi yang representatif.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {facilities.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }} className="flex items-center gap-2.5 text-sm text-[#1F2937]">
                      <CheckCircle2 className="w-4 h-4 text-[#B88E2F] flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src="https://habercafeandresto.co.id/wp-content/uploads/2026/06/Mewah-udah-kaya-dimana.jpeg" alt="Fasilitas Event Haber Cafe Bandung" className="w-full h-full object-cover" loading="lazy" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/50 to-transparent" />
                  
                  <div className="absolute inset-0 border-4 border-white/20 m-4 pointer-events-none" />

                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                    <div className="bg-white/95 backdrop-blur-sm px-4 py-3 border border-[#B88E2F]/20">
                      <div className="flex items-center gap-1.5 text-[#B88E2F] mb-1">
                        <Users className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Kapasitas</span>
                      </div>
                      <p className="text-[#1F2937] font-serif text-xl font-bold">Hingga 600 Pax</p>
                    </div>
                    <div className="bg-[#B88E2F] px-4 py-3">
                      <div className="flex items-center gap-1.5 text-white mb-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Lokasi</span>
                      </div>
                      <p className="text-white font-serif text-sm font-bold">Bandung Timur</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── DOWNLOAD PROPOSAL SECTION ─────────────────────────────────── */}
        <section id="download-proposal" className="py-20 sm:py-24 bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2937] mb-6">Unduh Proposal Event Resmi</h2>
              <p className="text-base text-[#4B5563] font-light leading-relaxed max-w-2xl mx-auto mb-10">
                Dapatkan rincian informasi lengkap mengenai menu, rundown, denah lokasi, serta syarat dan ketentuan reservasi event dengan mengunduh PDF proposal kami.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
                <a href={packageData.corporate.pdfLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 border-2 border-gray-200 hover:border-[#B88E2F] hover:bg-gray-50 transition-all group">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Download className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#1F2937] mb-1">Proposal Corporate</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">PDF File</p>
                </a>
                
                <a href={packageData.birthday.pdfLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 border-2 border-gray-200 hover:border-[#B88E2F] hover:bg-gray-50 transition-all group">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Download className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#1F2937] mb-1">Proposal Birthday</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">PDF File</p>
                </a>
                
                <a href={packageData.school.pdfLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 border-2 border-gray-200 hover:border-[#B88E2F] hover:bg-gray-50 transition-all group">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Download className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#1F2937] mb-1">Proposal Sekolah</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">PDF File</p>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── KONTAK ────────────────────────────────────────────────────── */}
        <section id="kontak-event" className="relative py-20 sm:py-28 bg-[#1F2937] text-white overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[#141414]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-[#141414] to-[#1c1c1c]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B88E2F]/10 rounded-full blur-[100px] pointer-events-none" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 border border-[#B88E2F]/40 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-6">
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Hubungi Kami</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4 leading-[1.15]">
                  Siap Wujudkan<br />Event Impianmu?
                </h2>
                <p className="text-base text-white/80 font-light leading-relaxed mb-8">
                  Hubungi tim event kami sekarang. Konsultasi gratis, respons cepat, dan kami bantu rencanakan acara Anda dari awal.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <a href={getWhatsAppUrl("event")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#1F2937] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] hover:brightness-110 transition-all shadow-xl">
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Tim Event</span>
                  </a>
                  <a href={`tel:${siteConfig.phoneEvent}`} className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all">
                    <Phone className="w-4 h-4 text-[#B88E2F]" />
                    <span>{siteConfig.phoneEvent}</span>
                  </a>
                </div>

                <div className="flex flex-col gap-3 text-sm text-white/70">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#B88E2F] flex-shrink-0" />
                    <span>{siteConfig.fullAddress}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#B88E2F] flex-shrink-0" />
                    <span>Buka setiap hari {siteConfig.openingHours.daily}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#111827] text-white/60 py-8 px-4 text-center text-xs border-t border-white/10">
        <div className="flex items-center justify-center gap-3 mb-3">
          <img src="/logo.png" alt="Haber Logo" className="w-8 h-8 rounded-full border border-[#B88E2F]/30 object-cover" />
          <span className="font-serif text-white font-semibold tracking-wider">Haber Event</span>
        </div>
        <p>© 2026 Haber Cafe & Resto Bandung. All rights reserved.</p>
        <a href="/" className="inline-flex items-center gap-1 mt-2 text-[#B88E2F] hover:underline">
          <ArrowLeft className="w-3 h-3" /> Kembali ke Halaman Utama
        </a>
      </footer>

      {/* Floating WhatsApp */}
      <aside className="fixed bottom-6 right-6 z-50 group" aria-label="Booking Event via WhatsApp">
        <a href={getWhatsAppUrl("event")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 group-hover:scale-105">
          <MessageCircle className="w-5 h-5" />
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase font-bold tracking-wider text-white/90">Booking Event</span>
            <span className="text-xs font-bold">Tim Haber Event</span>
          </div>
        </a>
      </aside>
    </div>
  );
};
