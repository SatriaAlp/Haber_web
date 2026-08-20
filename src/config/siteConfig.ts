/**
 * Haber Cafe & Resto Site Configuration
 * Configurable via environment variables or defaults
 */

export const siteConfig = {
  name: "Haber Cafe & Resto",
  tagline: "Coffee • Food • Live Music",
  location: "Bandung, Jawa Barat",
  fullAddress: "Jl. R.E. Martadinata No. 123, Citarum, Bandung Wetan, Kota Bandung, Jawa Barat 40115",
  
  // Contacts & Socials (Dummy values)
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  googleMapsUrl: import.meta.env.VITE_GOOGLE_MAPS_URL || "https://maps.google.com/?q=Haber+Cafe+%26+Resto+Bandung",
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/habercaferesto",
  instagramHandle: "@habercaferesto",
  tiktokUrl: "https://tiktok.com/@habercaferesto",
  email: "halo@habercaferesto.com",

  // Hours
  openingHours: {
    weekdays: "10:00 - 22:00 WIB",
    weekends: "10:00 - 23:00 WIB",
    liveMusic: "Rabu - Minggu (Mulai 19:00 WIB)",
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
