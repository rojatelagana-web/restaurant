"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MenuCard } from "@/components/ui/MenuCard";
import { Button } from "@/components/ui/Button";
import { menu, menuCategories, type MenuCategory } from "@/lib/data/menu";
import { cn } from "@/lib/utils";

export function MenuHighlights() {
  const [active, setActive] = useState<MenuCategory>("popular");

  const items = useMemo(() => {
    if (active === "popular") return menu.filter((m) => m.popular).slice(0, 6);
    return menu.filter((m) => m.category === active).slice(0, 6);
  }, [active]);

  return (
    <section id="menu" className="relative py-24 lg:py-36 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Our Kitchen"
          title={
            <>
              Crafted With Craft.
              <br />
              <span className="font-accent text-gold">Served With Soul.</span>
            </>
          }
          description="A taste of what awaits — from house-favourites to slow-dum biryanis, every dish is built on decades of North Indian craft."
          align="center"
        />

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {menuCategories.map((cat) => {
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={cn(
                  "relative px-4 sm:px-5 py-2.5 text-sm font-medium rounded-full transition-all",
                  isActive
                    ? "bg-charcoal text-cream-light"
                    : "text-charcoal/70 hover:text-charcoal"
                )}
              >
                <span className="mr-1.5">{cat.icon}</span>
                {cat.label}
                {isActive && (
                  <motion.span
                    layoutId="menu-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-charcoal"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </motion.div>

        {/* CTAs */}
        <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/menu" size="lg">
            Explore Full Menu
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href="/reserve" variant="secondary" size="lg">
            Order Online
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
