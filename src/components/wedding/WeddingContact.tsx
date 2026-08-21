import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  Sparkles, 
  Calendar, 
  Users, 
  CheckCircle2,
  Clock,
  Heart
} from "lucide-react";
import { weddingBrandConfig, getElmourWhatsAppUrl, weddingPackages } from "../../data/weddingData";

export const WeddingContact: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [weddingDate, setWeddingDate] = useState("");
  const [guests, setGuests] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(weddingPackages[1].title);
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo Mas Igun (${weddingBrandConfig.brandName}),\n\nSaya ingin konsultasi wedding:\n- Nama: ${name || "Calon Pengantin"}\n- No. Kontak: ${phone || "-"}\n- Rencana Tanggal: ${weddingDate || "-"}\n- Estimasi Tamu: ${guests || "-"}\n- Pilihan Paket: ${selectedPackage}\n- Catatan: ${notes || "Mohon informasi ketersediaan jadwal dan pricelist lengkap."}`;
    
    const url = `https://wa.me/${weddingBrandConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="kontak" className="py-20 sm:py-28 bg-[#2A2522] text-white relative overflow-hidden border-y border-[#B88E2F]/20">
      {/* Background Ambience matching EventWedding section */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B88E2F]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#2A2522]/80 backdrop-blur-md border border-[#B88E2F]/50 text-[#B88E2F] text-[11px] font-bold uppercase tracking-[0.25em] mb-6 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-[#B88E2F]" />
            <span>Mari Diskusi</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.18]">
            Wujudkan Hari Pernikahan Impian Anda
          </h2>
          <p className="text-base sm:text-lg text-[#EDE5D8]/90 font-light leading-relaxed">
            Terima kasih telah mempertimbangkan HABER Elmour sebagai Wedding Organizer Anda. Kami sangat bersemangat untuk menjadi bagian dari hari istimewa Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#201C1A] border border-[#B88E2F]/40 p-8 sm:p-10 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-12 h-12 mb-6 bg-black/40 border border-[#B88E2F] flex items-center justify-center text-[#B88E2F]">
                <MessageSquare className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase tracking-[0.25em] text-[#B88E2F] font-bold block mb-2">
                Kontak PIC Wedding Planner
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                Igun Prabu
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE5D8]/80 font-light leading-relaxed mb-8">
                Konsultasikan konsep pernikahan Anda kapan pun. Kami siap membantu mulai dari survei lokasi, penyusunan anggaran, hingga eksekusi hari H.
              </p>

              <div className="space-y-5 border-t border-white/10 pt-6">
                {/* Phone / WA */}
                <a
                  href={getElmourWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group text-gray-300 hover:text-white"
                >
                  <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 group-hover:border-[#B88E2F] flex items-center justify-center transition-colors">
                    <PhoneCall className="w-4 h-4 text-[#B88E2F]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 block">WhatsApp / Telepon</span>
                    <span className="font-semibold text-sm sm:text-base text-white group-hover:text-[#B88E2F] transition-colors">
                      {weddingBrandConfig.contact.whatsappDisplay} (Igun Prabu)
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${weddingBrandConfig.contact.email}`}
                  className="flex items-center gap-4 group text-gray-300 hover:text-white"
                >
                  <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 group-hover:border-[#B88E2F] flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4 text-[#B88E2F]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 block">Email Resmi</span>
                    <span className="font-semibold text-sm sm:text-base text-white group-hover:text-[#B88E2F] transition-colors">
                      {weddingBrandConfig.contact.email}
                    </span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#B88E2F]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 block">Kantor & Venue</span>
                    <span className="font-medium text-xs sm:text-sm text-white">
                      Haber Cafe & Resto Bandung, Jawa Barat
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-[11px] text-[#EDE5D8]/70 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B88E2F]" />
              <span>{weddingBrandConfig.parentCompany}</span>
            </div>
          </motion.div>

          {/* Right Column: Quick Booking / Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#201C1A] border border-white/10 p-8 sm:p-10 shadow-xl"
          >
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B88E2F] font-bold block mb-1">
                Formulir Konsultasi Cepat
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Rencanakan Pernikahan Bersama Kami
              </h3>
              <p className="text-xs text-gray-300 font-light mt-1">
                Isi form di bawah untuk langsung terhubung ke WhatsApp Mas Igun Prabu dengan ringkasan rencana Anda.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-1.5">
                    Nama Calon Pengantin *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Chika & David"
                    className="w-full bg-black/40 border border-white/20 focus:border-[#B88E2F] px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-1.5">
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0812-xxxx-xxxx"
                    className="w-full bg-black/40 border border-white/20 focus:border-[#B88E2F] px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-1.5">
                    Estimasi Tanggal Pernikahan
                  </label>
                  <input
                    type="text"
                    value={weddingDate}
                    onChange={(e) => setWeddingDate(e.target.value)}
                    placeholder="Bulan / Tahun (misal: Okt 2026)"
                    className="w-full bg-black/40 border border-white/20 focus:border-[#B88E2F] px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-1.5">
                    Estimasi Jumlah Tamu
                  </label>
                  <input
                    type="text"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    placeholder="Contoh: 500 Tamu"
                    className="w-full bg-black/40 border border-white/20 focus:border-[#B88E2F] px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-1.5">
                  Paket yang Diminati
                </label>
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="w-full bg-[#181A16] border border-white/20 focus:border-[#B88E2F] px-4 py-3 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                >
                  {weddingPackages.map((pkg) => (
                    <option key={pkg.id} value={pkg.title} className="bg-[#181A16] text-white">
                      {pkg.title} ({pkg.price})
                    </option>
                  ))}
                  <option value="Custom Package Request" className="bg-[#181A16] text-white">
                    Custom Package (Sesuaikan Anggaran & Kebutuhan)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-1.5">
                  Catatan atau Konsep Impian Anda
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ceritakan preferensi adat, tema warna, atau pertanyaan yang ingin didiskusikan..."
                  className="w-full bg-black/40 border border-white/20 focus:border-[#B88E2F] px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-[#B88E2F] hover:brightness-110 active:scale-98 transition-all shadow-xl cursor-pointer mt-2"
              >
                <Send className="w-4 h-4 text-white" />
                <span>KIRIM & DISKUSI VIA WHATSAPP</span>
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
