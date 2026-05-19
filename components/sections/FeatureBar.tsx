"use client";

import { motion } from "framer-motion";
import { CarFront, Phone, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { site } from "@/lib/data/site";

const items = [
  { Icon: UtensilsCrossed, label: "Dine-In Experience" },
  { Icon: CarFront, label: "Drive-Through" },
  { Icon: ShoppingBag, label: "No-Contact Delivery" },
  { Icon: Phone, label: site.phone, href: `tel:${site.phoneRaw}` },
];

export function FeatureBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-cream-light border-y border-border-warm"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ul className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border-warm/60">
          {items.map((item, i) => {
            const inner = (
              <div className="flex items-center gap-4 px-4 py-6 lg:py-7">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gold/10 text-gold shrink-0">
                  <item.Icon className="w-5 h-5" strokeWidth={1.5} />
                </span>
                <span className="text-sm font-medium text-charcoal">
                  {item.label}
                </span>
              </div>
            );
            return (
              <li key={i} className="first:border-l-0">
                {item.href ? (
                  <a
                    href={item.href}
                    className="block hover:bg-cream transition-colors"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.section>
  );
}
