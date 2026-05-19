export type GalleryCategory = "all" | "food" | "ambiance" | "celebrations" | "starters";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
  span?: "tall" | "wide" | "normal";
}

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "ambiance", label: "Ambiance" },
  { id: "celebrations", label: "Celebrations" },
  { id: "starters", label: "Starters" },
];

export const gallery: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80",
    alt: "Paneer Butter Masala in copper bowl",
    category: "food",
    span: "tall",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    alt: "Warm restaurant interior with golden lighting",
    category: "ambiance",
    span: "wide",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=80",
    alt: "Chicken Tikka skewers",
    category: "starters",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=80",
    alt: "Chicken Lollypop appetizer",
    category: "starters",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    alt: "Elegant dining setup at Celebrations",
    category: "ambiance",
    span: "tall",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80",
    alt: "Birthday celebration table",
    category: "celebrations",
    span: "wide",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80",
    alt: "Mutton Biryani plated",
    category: "food",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    alt: "African Delight Ice Cream",
    category: "food",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=900&q=80",
    alt: "Family celebration dinner",
    category: "celebrations",
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1606491048802-8342506d6471?auto=format&fit=crop&w=900&q=80",
    alt: "Crispy Chilli Potato starter",
    category: "starters",
    span: "tall",
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80",
    alt: "Restaurant ambiance with warm lights",
    category: "ambiance",
  },
  {
    id: "g12",
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80",
    alt: "Anniversary dinner table",
    category: "celebrations",
  },
];
