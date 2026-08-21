import React, { useEffect } from "react";
import { motion } from "motion/react";
import {
  CalendarCheck, Users, Cake, Briefcase, Coffee, Music2,
  CheckCircle2, MessageCircle, Sparkles, MapPin, Clock,
  ChevronDown, Phone, Instagram, ArrowLeft,
} from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "../../config/siteConfig";
import { EventNavbar } from "./EventNavbar";

// ─── Data ──────────────────────────────────────────────────────────────────

const eventTypes = [
  {
    icon: <Users className="w-7 h-7" />,
    title: "Gathering & Arisan",
    desc: "Area privat semi-outdoor ideal untuk kumpul komunitas, arisan keluarga besar, atau reuni hangat.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=85&w=800&auto=format&fit=crop",
  },
  {
    icon: <Cake className="w-7 h-7" />,
    title: "Birthday Party",
    desc: "Rayakan ulang tahun tak terlupakan dengan dekorasi custom, kue spesial, dan paket makan malam eksklusif.",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=85&w=800&auto=format&fit=crop",
  },
  {
    icon: <Briefcase className="w-7 h-7" />,
    title: "Meeting & Seminar",
    desc: "Ruang meeting nyaman dengan proyektor, sound system, dan WiFi cepat untuk produktivitas maksimal.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=85&w=800&auto=format&fit=crop",
  },
  {
    icon: <Coffee className="w-7 h-7" />,
    title: "Coffee Break & Talkshow",
    desc: "Sesi networking santai dengan menu coffee break premium untuk komunitas, podcast live, atau talkshow.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=85&w=800&auto=format&fit=crop",
  },
  {
    icon: <Music2 className="w-7 h-7" />,
    title: "Live Music Event",
    desc: "Gelar event musik akustik atau band dengan panggung, sound system, dan lighting profesional.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=85&w=800&auto=format&fit=crop",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Corporate Event",
    desc: "Annual dinner, team building, launching produk, atau press conference dengan konsep profesional.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=85&w=800&auto=format&fit=crop",
  },
];

const packages = [
  {
    name: "Paket Gathering",
    capacity: "30–80 Pax",
    price: "Mulai Rp 3.500.000",
    color: "border-[#B88E2F]",
    badge: "Populer",
    features: [
      "Ruang privat semi-outdoor",
      "Paket makan siang / malam",
      "Sound system & mic",
      "Dekorasi basic",
      "WiFi",
      "Parkir luas",
    ],
  },
  {
    name: "Paket Meeting",
    capacity: "10–30 Pax",
    price: "Mulai Rp 1.500.000",
    color: "border-gray-200",
    badge: null,
    features: [
      "Ruang meeting indoor",
      "LCD proyektor & screen",
      "Coffee break & snack",
      "Sound system",
      "Whiteboard",
      "WiFi high-speed",
    ],
  },
  {
    name: "Paket Birthday",
    capacity: "30–150 Pax",
    price: "Mulai Rp 5.000.000",
    color: "border-gray-200",
    badge: null,
    features: [
      "Ruang indoor / garden",
      "Dekorasi tema custom",
      "Paket catering prasmanan",
      "Sound system & mic",
      "LED backdrop",
      "Tim event profesional",
    ],
  },
];

const facilities = [
  "Ruang Semi-Outdoor & Indoor Privat",
  "Kapasitas hingga 200 Pax",
  "Sound System & Mic Wireless",
  "LCD Proyektor & Screen",
  "Dekorasi Sesuai Tema",
  "Paket Katering Fleksibel",
  "WiFi High-Speed",
  "Area Parkir Luas",
  "Live Music On-Request",
  "Tim Event Profesional",
  "Ruang VIP & Ruang Rias",
  "Dokumentasi On-Request",
];

// ─── Main Page ──────────────────────────────────────────────────────────────

export const EventLandingPage: React.FC = () => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Haber Event | Gathering, Birthday & Meeting Bandung";
    window.scrollTo(0, 0);
    return () => { document.title = originalTitle; };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1F2937] flex flex-col font-sans selection:bg-[#B88E2F]/25 selection:text-[#18110E]">
      <EventNavbar />

      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section id="hero-event" className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-20 px-4 overflow-hidden bg-[#1F2937] text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=85&w=1920&auto=format&fit=crop"
              alt="Event Gathering Haber Cafe Bandung"
              className="w-full h-full object-cover brightness-[0.4] contrast-[1.1]"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937] via-[#1F2937]/50 to-transparent" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#B88E2F]/15 rounded-full blur-3xl pointer-events-none" />
          </div>

          <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center mt-10">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.3em] mb-6 bg-[#1F2937]/80 backdrop-blur-sm"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Private Event & Gathering • Haber Bandung</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.08]"
            >
              Event Spesial,<br />Kenangan Selamanya
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[#B88E2F] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-6"
            >
              <span>Gathering & Arisan</span>
              <span className="text-white/30">•</span>
              <span>Birthday Party</span>
              <span className="text-white/30">•</span>
              <span>Meeting & Seminar</span>
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
              Wujudkan acara impian kamu di Haber Cafe & Resto Bandung. Ruang luas, fasilitas lengkap, tim profesional, dan masakan lezat — semua dalam satu tempat.
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
                className="inline-flex items-center gap-2.5 px-9 py-4 text-xs font-bold uppercase tracking-widest text-white bg-[#B88E2F] hover:brightness-110 transition-all shadow-md"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Lihat Paket & Harga</span>
              </a>
              <a
                href={getWhatsAppUrl("event")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-9 py-4 text-xs font-bold uppercase tracking-widest text-white bg-white/5 hover:bg-white/10 border border-white/20 transition-all backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#B88E2F]" />
                <span>Konsultasi via WhatsApp</span>
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full max-w-3xl pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {["Kapasitas 200 Pax", "Tim Profesional", "Fasilitas Lengkap", "Lokasi Strategis"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#1F2937]/80 backdrop-blur-sm p-3 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#B88E2F] flex-shrink-0" />
                  <span className="text-[11px] text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            <a href="#event-types" onClick={(e) => { e.preventDefault(); document.querySelector("#event-types")?.scrollIntoView({ behavior: "smooth" }); }} className="mt-8 text-white/50 hover:text-[#B88E2F] transition-colors flex flex-col items-center gap-1 text-xs">
              <span className="tracking-widest uppercase text-[10px]">Explore</span>
              <ChevronDown className="w-4 h-4 animate-bounce text-[#B88E2F]" />
            </a>
          </div>
        </section>

        {/* ── EVENT TYPES ───────────────────────────────────────────────── */}
        <section id="event-types" className="py-20 sm:py-28 bg-[#F9FAFB] border-b border-gray-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B88E2F]/8 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#B88E2F]/15 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Jenis Event</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4">Semua Acara, Satu Tempat</h2>
              <p className="text-base text-[#4B5563] font-light leading-relaxed">
                Dari acara kecil yang intim hingga event korporat berskala besar — kami siap handle dari A sampai Z.
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
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a href={getWhatsAppUrl("event")} target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold uppercase tracking-widest text-[#B88E2F] hover:underline">
                        Tanya Info →
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FASILITAS ─────────────────────────────────────────────────── */}
        <section id="fasilitas" className="py-20 sm:py-28 bg-white border-b border-gray-200 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A5D4E]/8 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#B88E2F]/15 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Fasilitas Lengkap</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4 leading-[1.2]">
                  Semua yang Kamu Butuhkan Sudah Tersedia
                </h2>
                <p className="text-base text-[#4B5563] font-light leading-relaxed mb-8">
                  Kami menyediakan fasilitas lengkap agar acara kamu berjalan mulus. Tim kami siap membantu dari persiapan hingga beres-beres.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {facilities.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }} className="flex items-center gap-2.5 text-sm text-[#1F2937]">
                      <CheckCircle2 className="w-4 h-4 text-[#B88E2F] flex-shrink-0" />
                      <span className="font-light">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-sm text-[#6B7280] border-t border-gray-100 pt-6">
                  <MapPin className="w-4 h-4 text-[#B88E2F] flex-shrink-0" />
                  <span>{siteConfig.fullAddress}</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=85&w=900&auto=format&fit=crop" alt="Fasilitas Event Haber Cafe Bandung" className="w-full h-full object-cover" loading="lazy" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/50 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3">
                    <div className="bg-white/95 backdrop-blur-sm px-3 py-2.5 border border-[#B88E2F]/20">
                      <div className="flex items-center gap-1.5 text-[#B88E2F] mb-0.5">
                        <Users className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Kapasitas</span>
                      </div>
                      <p className="text-[#1F2937] font-serif text-lg font-bold">200 Pax</p>
                    </div>
                    <div className="bg-[#B88E2F] px-3 py-2.5">
                      <div className="flex items-center gap-1.5 text-white mb-0.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Jam Buka</span>
                      </div>
                      <p className="text-white font-serif text-sm font-bold">{siteConfig.openingHours.daily}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── PAKET ─────────────────────────────────────────────────────── */}
        <section id="paket" className="py-20 sm:py-28 bg-[#F9FAFB] border-b border-gray-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#B88E2F]/8 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="text-center max-w-xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#B88E2F]/15 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Paket & Harga</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4">Pilih Paket yang Sesuai</h2>
              <p className="text-base text-[#4B5563] font-light">Harga fleksibel dan bisa dikustomisasi sesuai kebutuhan acara kamu.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {packages.map((pkg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`relative bg-white border-2 ${pkg.color} hover:border-[#B88E2F] hover:shadow-xl transition-all duration-400 p-7 flex flex-col`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-[#B88E2F] text-white text-[10px] font-bold uppercase tracking-widest">
                      {pkg.badge}
                    </div>
                  )}
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1F2937] mb-1">{pkg.name}</h3>
                    <p className="text-xs text-[#B88E2F] font-bold uppercase tracking-widest mb-4">{pkg.capacity}</p>
                    <div className="text-2xl font-serif font-bold text-[#1F2937] mb-6">{pkg.price}</div>
                    <ul className="space-y-2.5 mb-8">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#4B5563]">
                          <CheckCircle2 className="w-4 h-4 text-[#B88E2F] flex-shrink-0" />
                          <span className="font-light">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={getWhatsAppUrl("event")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-[#1F2937] hover:bg-[#B88E2F] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Pesan Sekarang</span>
                  </a>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-sm text-[#9CA3AF]">
              * Harga dapat berubah. Hubungi tim kami untuk penawaran terbaik dan paket custom.
            </p>
          </div>
        </section>

        {/* ── GALERI ────────────────────────────────────────────────────── */}
        <section id="galeri-event" className="py-20 sm:py-24 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#B88E2F]/15 border border-[#B88E2F]/30 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Galeri Event</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2937]">Momen Berkesan di Haber</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=85&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=85&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=85&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=85&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=85&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=85&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=85&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=85&w=600&auto=format&fit=crop",
              ].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`relative overflow-hidden ${i === 0 || i === 5 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"} group`}
                >
                  <img src={src} alt={`Galeri event ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-[#B88E2F]/0 group-hover:bg-[#B88E2F]/20 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── KONTAK ────────────────────────────────────────────────────── */}
        <section id="kontak-event" className="relative py-20 sm:py-28 bg-[#1F2937] text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=85&w=1920&auto=format&fit=crop" alt="bg" className="w-full h-full object-cover brightness-[0.2]" loading="lazy" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F2937] via-[#1F2937]/90 to-transparent" />
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
                  Hubungi tim event kami sekarang. Konsultasi gratis, respons cepat, dan kami bantu rencanakan acara kamu dari awal.
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
                  <div className="flex items-center gap-2.5">
                    <Instagram className="w-4 h-4 text-[#B88E2F] flex-shrink-0" />
                    <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#B88E2F] transition-colors">{siteConfig.instagramHandle}</a>
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
