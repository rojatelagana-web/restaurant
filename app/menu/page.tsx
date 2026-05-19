import type { Metadata } from "next";
import { MenuPageClient } from "./MenuPageClient";

export const metadata: Metadata = {
  title: "Menu — Authentic North Indian Classics",
  description:
    "Explore the full Celebrations Restaurant menu — Chicken Dum Biryani, tandoor specialities, vegetarian classics, Indo-Chinese starters and signature desserts. ₹200–₹1,200.",
};

export default function MenuPage() {
  return <MenuPageClient />;
}
