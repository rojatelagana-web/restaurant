export type MenuCategory =
  | "popular"
  | "non-veg"
  | "veg"
  | "soups"
  | "desserts";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  popular?: boolean;
  image: string;
}

export const menuCategories: { id: MenuCategory; label: string; icon: string }[] = [
  { id: "popular", label: "Most Loved", icon: "🔥" },
  { id: "non-veg", label: "Non-Veg Mains", icon: "🍗" },
  { id: "veg", label: "Vegetarian", icon: "🥗" },
  { id: "soups", label: "Soups & Starters", icon: "🍜" },
  { id: "desserts", label: "Desserts & More", icon: "🍨" },
];

export const menu: MenuItem[] = [
  {
    id: "chicken-fry-biryani",
    name: "Chicken Fry Biryani",
    description:
      "Aromatic basmati layered with crispy fried chicken, slow dum-cooked over coals.",
    price: 320,
    category: "popular",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "butter-naan",
    name: "Butter Naan",
    description:
      "Pillowy soft, kissed with butter, fresh from our coal-fired tandoor.",
    price: 60,
    category: "veg",
    image:
      "https://images.unsplash.com/photo-1633945274309-2c16c97f8f50?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "chicken-tikka",
    name: "Chicken Tikka",
    description:
      "Marinated overnight in yogurt and spice, charred to smoky perfection.",
    price: 380,
    category: "popular",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mutton-keema-biryani",
    name: "Mutton Keema Biryani",
    description:
      "Rich, deeply spiced minced mutton layered into long-grain basmati — a house legend.",
    price: 420,
    category: "non-veg",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "manchow-soup",
    name: "Manchow Soup",
    description:
      "Indo-Chinese classic with hand-cut vegetables and a house-made fried noodle crunch.",
    price: 180,
    category: "soups",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "chicken-lollypop",
    name: "Chicken Lollypop",
    description:
      "Crispy frenched drumsticks tossed in our sweet-spicy sticky glaze.",
    price: 280,
    category: "popular",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    description:
      "Velvety tomato gravy enriched with cream, hand-cubed fresh cottage cheese.",
    price: 290,
    category: "veg",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "crispy-chilli-potato",
    name: "Crispy Chilli Potato",
    description:
      "Golden potato batons tossed in a fiery Indo-Chinese chilli garlic glaze.",
    price: 220,
    category: "veg",
    image:
      "https://images.unsplash.com/photo-1606491048802-8342506d6471?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "african-delight",
    name: "African Delight Ice Cream",
    description:
      "Our signature dessert — layered chocolate, nut praline, and a secret cream. Worth the wait.",
    price: 240,
    category: "desserts",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gongura-mutton",
    name: "Gongura Mutton",
    description:
      "Andhra soul meets North Indian craft — sorrel leaves, slow-braised mutton, deep flavour.",
    price: 440,
    category: "non-veg",
    image:
      "https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "veg-fried-rice",
    name: "Veg Fried Rice",
    description:
      "Wok-tossed long-grain rice, sweet corn, fresh vegetables — perfect for sharing.",
    price: 210,
    category: "veg",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "chicken-dum-biryani",
    name: "Chicken Dum Biryani",
    description:
      "The Vizag favourite — fragrant basmati, tender chicken, slow-sealed under dough.",
    price: 350,
    category: "non-veg",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1631452180814-d6c5e4d0d1e0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "apricot-delight",
    name: "Apricot Delight",
    description:
      "Caramelised apricots, vanilla custard, sponge — what dessert dreams are made of.",
    price: 220,
    category: "desserts",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "tomato-shorba",
    name: "Tomato Shorba",
    description:
      "Slow-simmered tomato-and-spice broth tempered with cumin and curry leaf.",
    price: 160,
    category: "soups",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "dal-makhani",
    name: "Dal Makhani",
    description:
      "Black urad lentils simmered overnight, finished with butter and cream.",
    price: 260,
    category: "veg",
    image:
      "https://images.unsplash.com/photo-1626777553635-25e58e6c5b9d?auto=format&fit=crop&w=1200&q=80",
  },
];

export const popularMenu = menu.filter((m) => m.popular);
