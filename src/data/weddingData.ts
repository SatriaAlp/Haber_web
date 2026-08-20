export interface WeddingValueItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
}

export interface WeddingPackagePhase {
  phaseTitle: string;
  items: string[];
}

export interface WeddingPackage {
  id: string;
  title: string;
  tagline: string;
  price: string;
  priceNumeric: number;
  capacity: string;
  badge?: string;
  isPopular?: boolean;
  colorScheme: "emerald" | "gold" | "rose";
  description: string;
  phases: WeddingPackagePhase[];
  honeymoonDetails?: {
    type: "domestik" | "internasional";
    title: string;
    destinations: string[];
    facilities: string[];
    duration?: string;
  };
  bonusItem?: string;
}

export interface WeddingTestimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  weddingDate: string;
  avatar: string;
  venue: string;
}

export interface WeddingGalleryItem {
  id: string;
  title: string;
  category: "pelaminan" | "table" | "akad" | "entrance" | "lighting";
  categoryLabel: string;
  image: string;
  description: string;
}

export interface VendorCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  examples: string[];
}

export const weddingBrandConfig = {
  brandName: "HABER Elmour",
  subBrand: "Elmour Wedding Planner",
  parentCompany: "PT. HABER GRUP INTERNASIONAL",
  tagline: "Dari Lamaran Hingga Bulan Madu, Semua Kami Wujudkan Dalam Satu Sentuhan Elegan.",
  subtitle: "Kemewahan yang Terjangkau • Elegant & Glamour 2026",
  contact: {
    picName: "Igun Prabu",
    whatsappNumber: "6282113508372",
    whatsappDisplay: "0821 1350 8372",
    email: "hello@elmourdeco.com",
    address: "Bandung, Jawa Barat, Indonesia",
  },
  year: "2026",
};

export function getElmourWhatsAppUrl(packageName?: string, customNote?: string): string {
  const number = weddingBrandConfig.contact.whatsappNumber;
  let message = `Halo Mas Igun (${weddingBrandConfig.brandName}), saya tertarik untuk berkonsultasi mengenai Wedding Planner.`;
  if (packageName) {
    message = `Halo Mas Igun (${weddingBrandConfig.brandName}), saya sangat tertarik dengan paket "${packageName}". Mohon informasi ketersediaan tanggal, detail pricelist, dan jadwal survei / diskusi.`;
  }
  if (customNote) {
    message += ` Catatan: ${customNote}`;
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const weddingValues: WeddingValueItem[] = [
  {
    id: "one-stop",
    title: "One Stop Wedding Solution",
    description: "Layanan terintegrasi dari tahap perencanaan tunangan, pre-wedding, upacara adat, hingga resepsi dan bulan madu.",
    icon: "Sparkles",
    highlight: true,
  },
  {
    id: "custom-decor",
    title: "Dekorasi Custom Sesuai Impian",
    description: "Desain visual pelaminan, lighting, dan table setting yang di-custom secara eksklusif mengikuti konsep idaman pengantin.",
    icon: "Palette",
    highlight: true,
  },
  {
    id: "pro-wo",
    title: "Wedding Organizer Profesional",
    description: "Didukung tim WO berpengalaman (20 - 50 crew berdedikasi) dengan koordinasi waktu presisi tinggi pada hari H.",
    icon: "Users",
  },
  {
    id: "curated-vendors",
    title: "Vendor Terkurasi Premium",
    description: "Jaringan vendor terpercaya mulai dari MUA ternama, fotografer cinematic, katering higienis lezat, hingga hiburan musik berkelas.",
    icon: "ShieldCheck",
  },
  {
    id: "cinematic-drone",
    title: "Dokumentasi Cinematic & Drone",
    description: "Liputan multi-kamera, drone shooting 4K, video teaser 5 menit, live streaming broadcast, dan album wedding eksklusif.",
    icon: "Camera",
  },
  {
    id: "honeymoon",
    title: "Paket Honeymoon Eksklusif",
    description: "Pilihan destinasi bulan madu mewah domestik (Bali, Labuan Bajo, Lombok) hingga internasional (Jepang, Eropa, Turki, Swiss, Dubai).",
    icon: "Plane",
    highlight: true,
  },
  {
    id: "culture-modern",
    title: "Ahli Acara Adat & Modern",
    description: "Fasih mengelola prosesi adat Sunda, Jawa, Minang, Betawi, Melayu dengan konsultan budaya, maupun Modern International Wedding.",
    icon: "Crown",
  },
  {
    id: "unlimited-consult",
    title: "Konsultasi Unlimited Sampai Hari H",
    description: "Pendampingan tanpa batas sesi, diskusi fleksibel, budgeting transparan, serta checklist persiapan intensif.",
    icon: "MessageSquareHeart",
    highlight: true,
  },
];

export const weddingPackages: WeddingPackage[] = [
  {
    id: "paket-dekorasi-35jt",
    title: "Paket Dekorasi Glamour",
    tagline: "Sentuhan Kemewahan Estetik untuk Momen Bersejarah Anda",
    price: "Rp 35.000.000",
    priceNumeric: 35000000,
    capacity: "Fleksibel (Indoor / Outdoor)",
    badge: "Galery Karya Best Value",
    colorScheme: "emerald",
    description: "Solusi dekorasi pelaminan modern bertema Elegant & Glamour dengan ornamen bunga segar, crystal chandelier, dan lighting artistik.",
    phases: [
      {
        phaseTitle: "Rincian Dekorasi Utama",
        items: [
          "Pelaminan Modern Glamour (Lebar hingga 10-12 meter)",
          "Fresh Flower Composition & Botanical Backdrop",
          "Mini Gallery Photobooth + Welcome Gate Mewah",
          "Table Setting VIP & Meja Akad Eksklusif",
          "Pencahayaan Stage / Ambience Lighting Artistik",
          "Standing Flower Jalan & Karpet Lorong Masuk",
        ],
      },
      {
        phaseTitle: "Keunggulan Layanan",
        items: [
          "Desain 3D Moodboard & Konsultasi Konsep",
          "Tim Pemasangan & Pembongkaran Profesional",
          "Material Berkualitas Tinggi & Bebas Kerusakan",
        ],
      },
    ],
  },
  {
    id: "paket-emas-250jt",
    title: "Paket Wedding Emas",
    tagline: "Luxury Traditional & Modern Wedding",
    price: "Rp 250.000.000",
    priceNumeric: 250000000,
    capacity: "300 – 800 Tamu",
    badge: "Paling Diminati ⭐",
    isPopular: true,
    colorScheme: "gold",
    description: "Paket lengkap all-in-one dari tunangan hingga bulan madu domestik dengan layanan kelas menengah atas dan bonus mobil Alphard pengantin.",
    phases: [
      {
        phaseTitle: "1. Tunangan Premium",
        items: [
          "Dekorasi Tunangan Premium & Floral Backdrop",
          "Catering Family Gathering Khusus",
          "Dokumentasi Foto & Video Lengkap",
          "Live Acoustic Music",
        ],
      },
      {
        phaseTitle: "2. Pre-Wedding Eksklusif",
        items: [
          "2 Lokasi Foto Pilihan",
          "MUA Professional & Wardrobe 4 Set",
          "Drone Shooting & Video Cinematic 5 Menit",
          "Cetak Canvas & Mini Gallery Stand",
        ],
      },
      {
        phaseTitle: "3. Siraman & Pengajian",
        items: [
          "Dekorasi Adat Lengkap & Perlengkapan Siraman",
          "Tim Protokol Acara Tradisional",
          "Dokumentasi Multi-Kamera",
        ],
      },
      {
        phaseTitle: "4. Akad Nikah",
        items: [
          "Dekorasi Akad Premium",
          "Live Streaming Broadcast & Drone Shoot",
          "Master of Ceremony (MC) & Qori",
        ],
      },
      {
        phaseTitle: "5. Resepsi Mewah",
        items: [
          "Pelaminan Luxury Custom",
          "Catering Lezat 800 Pax (Menu Pilihan)",
          "Entertainment Band & Sound System 10.000W",
          "Wedding Organizer 20 Crew Berdedikasi",
          "Lighting Show & Megatron / Videotron Panggung",
          "Photobooth Unlimited & VIP Lounge Area",
          "300 Pcs Souvenir Premium",
          "Custom Wedding Website & E-Invitation Interaktif",
        ],
      },
    ],
    honeymoonDetails: {
      type: "domestik",
      title: "Honeymoon Domestik Mewah",
      destinations: ["Bali (4H3M)", "Labuan Bajo (4H3M)", "Lombok (4H3M)"],
      facilities: [
        "Hotel Bintang 5 Pilihan",
        "Romantic Private Candlelight Dinner",
        "Couple Relaxation Spa",
        "Dokumentasi Foto Honeymoon",
      ],
      duration: "4 Hari 3 Malam",
    },
    bonusItem: "🎁 BONUS: Mobil Pengantin Toyota Alphard + Driver & Dekorasi Bunga",
  },
  {
    id: "paket-royal-390jt",
    title: "Paket Wedding Royal Platinum",
    tagline: "The Ultimate Luxury Wedding Experience",
    price: "Rp 390.000.000",
    priceNumeric: 390000000,
    capacity: "500 – 2.000 Tamu",
    badge: "Ultra Luxury Signature 👑",
    colorScheme: "emerald",
    description: "Mahakarya pernikahan impian berskala megah menyasar pasangan profesional, pengusaha, dan keluarga besar dengan pre-wedding & honeymoon mancanegara.",
    phases: [
      {
        phaseTitle: "Fase 1: Engagement Ceremony",
        items: [
          "Private Venue Reservation",
          "Luxury Floral Decoration",
          "Fine Dining Family Gathering",
          "Entertainment & Professional Documentation",
        ],
      },
      {
        phaseTitle: "Fase 2: Pre-Wedding International",
        items: [
          "Pilihan Lokasi: Jepang (Kyoto & Tokyo), Korea Selatan, Turki (Cappadocia), Paris, Swiss Alps, atau Dubai",
          "Tiket Pesawat PP & Hotel Bintang 5",
          "Private Photographer & Drone Cinematic",
          "Wedding Film Teaser & Wardrobe Styling",
        ],
      },
      {
        phaseTitle: "Fase 3: Siraman & Traditional Ceremony",
        items: [
          "Dekorasi Adat Mewah Berkelas Keraton/Modern",
          "Tim Wedding Cultural Consultant Spesialis Adat",
          "Live Music Tradisional (Gamelan / Kecapi Suling)",
          "Dokumentasi Multi-Kamera 4K",
        ],
      },
      {
        phaseTitle: "Fase 4: Ijab Qabul / Akad",
        items: [
          "Dekorasi Signature Luxury",
          "Live Streaming Broadcast Internasional",
          "Multi Camera Production & Private Family Lounge",
        ],
      },
      {
        phaseTitle: "Fase 5: Grand Reception",
        items: [
          "Luxury Ballroom / Resort Setup",
          "Dekorasi Premium Custom Signature Design",
          "Catering Eksklusif 2.000 Pax",
          "Entertainment Artis Nasional & Orkestra/Band",
          "Giant Videotron & Spectacular Indoor Fireworks Show",
          "Luxury Bridal Entry & Special Effect Lighting",
          "Wedding Organizer 50 Crew Profesional",
          "Dedicated Security & Valet Parking Service",
        ],
      },
    ],
    honeymoonDetails: {
      type: "internasional",
      title: "Honeymoon International Luxury",
      destinations: [
        "Paket Platinum Asia (Jepang, Korea, Maldives, Bali Private Resort - 7H6M)",
        "Paket Diamond Europe (Swiss Alps, Paris, Venice, Amsterdam - 10H9M)",
      ],
      facilities: [
        "Akomodasi Resort & Hotel Mewah Bintang 5",
        "Private Chauffeur & Itinerary Eksklusif",
        "Romantic Luxury Dining Experience",
        "Dokumentasi Cinematic Honeymoon",
      ],
      duration: "7 - 10 Hari",
    },
    bonusItem: "🎁 BONUS: Mobil Pengantin Premium Luxury + Full VVIP Valet & Security Service",
  },
];

export const weddingServiceBreakdown = {
  preWedding: {
    title: "Layanan Pra-Pernikahan",
    subtitle: "Persiapan Matang Tanpa Stres",
    description: "Kami mendampingi Anda melewati setiap tahapan perencanaan awal secara sistematis.",
    items: [
      {
        title: "Pemilihan Lokasi (Venue Hunting)",
        desc: "Rekomendasi ballroom, resto, villa, atau garden venue terbaik di Bandung dan sekitarnya yang sesuai dengan kapasitas dan selera Anda.",
      },
      {
        title: "Pengembangan Tema & Konsep",
        desc: "Perancangan moodboard visual warna, dekorasi, busana, hingga konsep lighting yang mencerminkan identitas kepribadian Anda.",
      },
      {
        title: "Pengelolaan Anggaran Transparan",
        desc: "Penyusunan alokasi biaya yang terperinci tanpa biaya siluman, memaksimalkan setiap rupiah untuk kualitas terbaik.",
      },
      {
        title: "Kurasi & Koordinasi Vendor",
        desc: "Penghubung dengan vendor katering, MUA, desainer gaun, fotografer, souvenir, hingga sound system terpercaya.",
      },
    ],
  },
  weddingDay: {
    title: "Layanan Hari Pernikahan (Hari H)",
    subtitle: "Eksekusi Acara Sempurna & Lancar",
    description: "Fokuslah menikmati momen bahagia Anda, biarkan tim profesional kami mengawal seluruh jalannya acara.",
    items: [
      {
        title: "Pengelolaan Acara (Rundown Precision)",
        desc: "Pengawasan alur prosesi dari detik ke detik agar tepat waktu dan berjalan dengan khidmat serta meriah.",
      },
      {
        title: "Supervisi & Pengaturan Dekorasi",
        desc: "Pemeriksaan detail visual pelaminan, lighting, penataan meja VIP, hingga kebersihan area perjamuan.",
      },
      {
        title: "Koordinasi Tamu & VIP Hospitality",
        desc: "Penyambutan tamu undangan, pengawalan keluarga inti dan VIP, serta alur penerimaan kado/souvenir.",
      },
      {
        title: "Pengaturan Jadwal & Tanggap Darurat",
        desc: "Tim standby yang siap mengatasi segala dinamika teknis dan tantangan tak terduga dengan cepat dan tenang.",
      },
    ],
  },
  philosophy: {
    heading: "Kustomisasi dan Personalisasi",
    tagline: "Kemewahan yang Terjangkau • Elegant & Glamour",
    quote: "Tujuan kami adalah menjadikan pernikahan Elegan dan Glamour impian Anda menjadi kenyataan.",
    body: "Kami percaya bahwa setiap pernikahan harus menjadi pengalaman unik dan tak terlupakan. Pernikahan Anda adalah cerminan sejati dari kepribadian dan kisah cinta Anda. Melalui konsultasi mendalam, kami menyesuaikan setiap elemen mulai dari dekorasi dan tema hingga menu dan alunan hiburan musik.",
  },
  budgeting: {
    heading: "Pengelolaan Anggaran yang Efektif",
    body: "Kami mengerti pentingnya pengelolaan anggaran pernikahan Anda secara cermat. Tim kami akan bekerja sama untuk membuat rancangan biaya transparan dan mengoptimalkan anggaran tanpa mengorbankan kualitas, memastikan Anda mendapatkan nilai kemewahan maksimal dari setiap investasi Anda.",
  },
};

export const weddingVendorCategories: VendorCategory[] = [
  {
    id: "photo-video",
    title: "Fotografi & Videografi",
    description: "Dokumentasi cinematic 4K, drone aerial, teaser video, dan album foto eksklusif.",
    icon: "Camera",
    examples: ["Cinematic Teaser", "Drone 4K", "Same-Day Edit Video", "Luxury Photo Album"],
  },
  {
    id: "decoration-florist",
    title: "Dekorasi & Florist",
    description: "Desain panggung pelaminan megah, rangkaian bunga segar impor, crystal chandeliers, dan lighting.",
    icon: "Flower2",
    examples: ["Fresh Flower Arrangements", "Custom Backdrop 3D", "Lighting Architecture", "Photobooth Setup"],
  },
  {
    id: "catering",
    title: "Katering & Kuliner",
    description: "Pilihan buffet lezat, live cooking stalls, fine dining menu, dan tester makanan bersama keluarga.",
    icon: "Utensils",
    examples: ["Buffet Nusantara & Western", "Live Cooking Stall", "Family Food Testing", "VIP Fine Dining Service"],
  },
  {
    id: "entertainment",
    title: "Musik & Entertainment",
    description: "Master of Ceremony (MC) kawakan, live acoustic, jazz band, orkestra, hingga penampilan artis nasional.",
    icon: "Music",
    examples: ["MC Profesional", "Live Band / Chamber Orchestra", "Artis Nasional", "Sound & Lighting Show"],
  },
  {
    id: "mua-wardrobe",
    title: "MUA & Busana Pengantin",
    description: "Tata rias pengantin flawless tahan lama serta busana adat nusantara dan gaun pengantin internasional.",
    icon: "Sparkles",
    examples: ["MUA Top Tier", "Busana Adat Tradisional", "International Wedding Gown", "Family Wardrobe"],
  },
  {
    id: "invitation-tech",
    title: "Undangan Digital & Souvenir",
    description: "Website pernikahan interaktif dengan RSVP online, QR code check-in tamu, dan souvenir mewah.",
    icon: "Smartphone",
    examples: ["Custom Wedding Website", "E-Invitation & WhatsApp RSVP", "QR Code Guest Scan", "Premium Souvenir"],
  },
];

export const weddingGalleryItems: WeddingGalleryItem[] = [
  {
    id: "gal-1",
    title: "Kemegahan Pelaminan White Floral Crystal",
    category: "pelaminan",
    categoryLabel: "Pelaminan",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=85&w=1000&auto=format&fit=crop",
    description: "Kombinasi ribuan bunga mawar putih segar dan chandelier kristal gantung yang memancarkan aura sakral nan mewah.",
  },
  {
    id: "gal-2",
    title: "Royal Banquet Table Setting",
    category: "table",
    categoryLabel: "Meja Perjamuan",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=85&w=1000&auto=format&fit=crop",
    description: "Penataan meja panjang bergaya Eropa dengan lilin aromaterapi temaram dan rangkaian bunga sentral yang memukau.",
  },
  {
    id: "gal-3",
    title: "Suasana Hangat Resto Bambu Haber",
    category: "entrance",
    categoryLabel: "Venue Haber Resto",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=85&w=1000&auto=format&fit=crop",
    description: "Dekorasi pernikahan bernuansa alam kayu dan bambu dengan sentuhan modern di Haber Cafe & Resto.",
  },
  {
    id: "gal-4",
    title: "Akad Nikah Outdoor Romantic Floral Arch",
    category: "akad",
    categoryLabel: "Akad & Pemberkatan",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=85&w=1000&auto=format&fit=crop",
    description: "Lengkungan bunga berbentuk kubah romantis di area semi-outdoor dengan latar pemandangan asri.",
  },
  {
    id: "gal-5",
    title: "Grand Stage Lighting & Classical Architecture",
    category: "lighting",
    categoryLabel: "Lighting & Megatron",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=85&w=1000&auto=format&fit=crop",
    description: "Pencahayaan dramatis dan panggung bertingkat megah untuk resepsi berkapasitas besar.",
  },
  {
    id: "gal-6",
    title: "Intimate Dinner Celebration",
    category: "table",
    categoryLabel: "Meja Perjamuan",
    image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?q=85&w=1000&auto=format&fit=crop",
    description: "Dekorasi intimate dinner eksklusif untuk keluarga dan sahabat dekat pengantin.",
  },
];

export const weddingTestimonials: WeddingTestimonial[] = [
  {
    id: "testi-1",
    quote: "Bekerja dengan Elmour adalah sebuah kepuasan. Mereka benar-benar menghidupkan visi kami dan menciptakan pernikahan yang melebihi harapan kami dan seluruh keluarga besar.",
    author: "Chika Dilla",
    role: "Pengantin Bahagia (Paket Emas)",
    weddingDate: "Pernikahan Adat Sunda Modern",
    venue: "Grand Ballroom Bandung",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "testi-2",
    quote: "Tim Elmour mengurus setiap detail dengan sangat presisi, memungkinkan kami untuk bersantai dan benar-benar menikmati hari istimewa kami. Sungguh sebuah pengalaman yang magis!",
    author: "David Winata",
    role: "Pengantin Bahagia (Paket Royal)",
    weddingDate: "International Wedding Reception",
    venue: "Resort & Garden Venue",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "testi-3",
    quote: "Pengelolaan anggaran dari Haber Elmour sangat transparan. Hasil dekorasi dan koordinasi vendornya luar biasa mewah namun biayanya sangat terukur dan masuk akal.",
    author: "Rian & Anindya",
    role: "Pengantin Bahagia (Paket 250 Juta)",
    weddingDate: "Tradisional Minang & Modern",
    venue: "Haber Resto & Event Hall",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
  },
];
