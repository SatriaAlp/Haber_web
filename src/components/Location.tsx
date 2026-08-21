import React from "react";
import { motion } from "motion/react";
import { MapPin, Clock, ExternalLink, Wifi, Car, Music, Sparkles, Building2 } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const Location: React.FC = () => {
  const amenities = [
    { icon: <Wifi className="w-4 h-4" />, name: "High Speed WiFi" },
    { icon: <Car className="w-4 h-4" />, name: "Area Parkir Luas" },
    { icon: <Music className="w-4 h-4" />, name: "Panggung Live Music" },
    { icon: <Building2 className="w-4 h-4" />, name: "VIP Room & Musholla" },
  ];

  return (
    <section id="lokasi" className="py-16 sm:py-20 bg-white relative overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Location details & Opening Hours */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#4A5D4E]/10 text-[#4A5D4E] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>Kunjungi Kami</span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-3">
                {siteConfig.name}
              </h2>
              <p className="font-serif text-base text-[#B88E2F] font-bold tracking-wider mb-6 uppercase">
                {siteConfig.location}
              </p>

              <p className="text-base text-[#4B5563] font-light leading-relaxed mb-8">
                Terletak di kawasan strategis Bandung dengan akses mudah, udara sejuk, dan suasana tenang yang menyenangkan untuk berkumpul bersama orang-orang terkasih.
              </p>

              {/* Opening Hours Box */}
              <div className="p-6 bg-gray-50 border border-gray-200 mb-8 w-full">
                <div className="flex items-center gap-2.5 mb-4 text-[#1F2937] font-serif font-bold text-sm uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-[#B88E2F]" />
                  <span>Jam Operasional</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-[#4B5563] font-light">
                  <div className="flex justify-between py-1.5 border-b border-gray-200">
                    <span>Senin - Jumat (Weekday)</span>
                    <span className="font-medium text-[#1F2937]">{siteConfig.openingHours.weekdays}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-200">
                    <span>Sabtu - Minggu (Weekend)</span>
                    <span className="font-medium text-[#1F2937]">{siteConfig.openingHours.weekends}</span>
                  </div>
                  <div className="flex justify-between py-1.5 text-[#B88E2F]">
                    <span className="font-semibold">Live Music Session</span>
                    <span className="font-semibold">{siteConfig.openingHours.liveMusic}</span>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="grid grid-cols-2 gap-3 mb-8 w-full">
                {amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#4B5563] bg-gray-50 border border-gray-200 px-3.5 py-2.5">
                    <span className="text-[#B88E2F]">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </div>
                ))}
              </div>

              {/* Maps CTA Button */}
              <a
                id="location-cta-maps"
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-[#1F2937] hover:bg-[#B88E2F] active:scale-98 transition-all shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E2F]"
              >
                <MapPin className="w-4 h-4 text-white" />
                <span>LIHAT LOKASI DI MAPS</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/70" />
              </a>

            </motion.div>
          </div>

          {/* Right Column: Visual Map / Ambience Card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-[#2A2522]"
            >
              <img
                src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1000&auto=format&fit=crop"
                alt="Lokasi dan area outdoor Haber Cafe & Resto Bandung"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 bg-[#B88E2F] text-white text-[10px] font-bold uppercase tracking-widest mb-2 inline-block">
                  Bandung Destination
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1">
                  Haber Cafe & Resto Bandung
                </h3>
                <p className="text-xs text-[#EDE5D8]/80 font-light mb-4">
                  Nikmati suasana sejuk dan pemandangan asri bersama sahabat dan keluarga tercinta.
                </p>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#B88E2F] hover:underline font-bold uppercase tracking-wider"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
