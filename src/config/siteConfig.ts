/**
 * Haber Cafe & Resto Site Configuration
 * Configurable via environment variables or defaults
 */

export const siteConfig = {
  name: "Haber Cafe & Resto",
  tagline: "Kalau rempahnya pilihan, rasanya pasti beda.",
  taglineShort: "Kuliner • Event • Live Music",
  location: "Bandung, Jawa Barat",
  fullAddress: "Jl. Raya Cipadung No. 455, Cibiru, Kota Bandung, Jawa Barat",
  websiteUrl: "https://habercafeandresto.co.id",

  // Contacts (data real dari website)
  phoneRestoCafe: "0881024552134",
  phoneWedding: "085318025699",
  phoneEvent: "089655717503",
  phoneKerjasama: "082113508372",

  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "6282113508372",
  whatsappDisplay: "+62 821-1350-8372",
  whatsappEvent: "6289655717503",
  whatsappEventDisplay: "+62 896-5571-7503",

  googleMapsUrl: import.meta.env.VITE_GOOGLE_MAPS_URL || "https://maps.app.goo.gl/9viSDF8jvGsNoezx9",
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/haber_cafeandresto",
  instagramHandle: "@haber_cafeandresto",
  tiktokUrl: "https://tiktok.com/@haber.cafe.and.re",
  tiktokHandle: "@haber.cafe.and.re",
  email: "info@habercafeandresto.co.id",

  // Hours (data real dari website)
  openingHours: {
    daily: "09:00 - 23:00 WIB",
    weekdays: "09:00 - 23:00 WIB",
    weekends: "09:00 - 23:00 WIB",
    liveMusic: "Setiap Hari (Mulai 19:00 WIB)",
  },

  // WhatsApp Messages
  messages: {
    general: "Halo Haber Cafe & Resto, saya ingin melakukan reservasi. Mohon informasi ketersediaan dan detailnya.",
    table: "Halo Haber Cafe & Resto, saya ingin reservasi meja untuk santap bersama. Mohon info ketersediaan slot tanggal & jam.",
    event: "Halo Haber Cafe & Resto, saya ingin konsultasi mengenai penyelenggaraan Event / Gathering di Haber. Mohon info paket dan penawarannya.",
    wedding: "Halo Haber Cafe & Resto, saya tertarik dengan venue Wedding & Paket Pernikahan di Haber Cafe & Resto. Mohon info pricelist dan konsultasi jadwal survei lokasi.",
  },
};

/**
 * Helper to construct WhatsApp click-to-chat links
 */
export function getWhatsAppUrl(
  type: "general" | "table" | "event" | "wedding" = "general",
  customText?: string
): string {
  const number = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  const text = customText || siteConfig.messages[type] || siteConfig.messages.general;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
