export interface MenuItem {
  id: string;
  name: string;
  category: "makanan_utama" | "nusantara" | "western" | "snack_dessert" | "coffee_beverage";
  categoryLabel: string;
  description: string;
  price: string;
  isFavorite?: boolean;
  image: string;
  alt: string;
  tags?: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "food" | "interior" | "event" | "wedding" | "music";
  categoryLabel: string;
  image: string;
  alt: string;
  span?: string;
}

export interface Amenity {
  iconName: string;
  title: string;
  description: string;
}
