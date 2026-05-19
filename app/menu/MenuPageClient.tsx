"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MenuCard } from "@/components/ui/MenuCard";
import { Button } from "@/components/ui/Button";
import { menu, menuCategories, type MenuCategory } from "@/lib/data/menu";
import { cn } from "@/lib/utils";

type Filter = MenuCategory | "all";

const filters: { id: Filter; label: string; icon?: string }[] = [
  { id: "all", label: "Everything" },
  ...menuCategories.map((c) => ({ id: c.id as Filter, label: c.label, icon: c.icon })),
];

export function MenuPageClient() {
  const [active, setActive] = useState<Filter>("all");

  const items = useMemo(() => {
    if (active === "all") return menu;
    if (active === "popular") return menu.filter((m) => m.popular);
    return menu.filter((m) => m.category === active);
  }, [active]);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 lg:pt-48 pb-20 bg-cream-light overflow-hidden">
        <div
          aria-hidden
          className="absolute top-0 inset-x-0 h-[60vh] opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(201,149,58,0.25), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader
            eyebrow="The Menu"
            title={
              <>
                Every Plate,
                <br />
                <span className="text-gold-gradient">A Quiet Standing Ovation.</span>
              </>
            }
            description="From slow-dum biryanis to tandoor classics, our kitchen serves North Indian craft built on tradition — without compromise. ₹200 to ₹1,200 per person."
            align="center"
          />
        </div>
      </section>

      <section className="bg-cream pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Filter pills */}
          <div className="sticky top-20 z-30 -mt-8 mb-12">
            <div className="bg-cream-light/85 backdrop-blur-md border border-border-warm rounded-full p-2 shadow-[0_8px_24px_-12px_rgba(26,26,26,0.18)] flex flex-wrap items-center justify-center gap-1">
              {filters.map((f) => {
                const isActive = active === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setActive(f.id)}
                    className={cn(
                      "relative px-4 sm:px-5 py-2 text-sm font-medium rounded-full transition-all",
                      isActive
                        ? "text-cream-light"
                        : "text-charcoal/70 hover:text-charcoal"
                    )}
                  >
                    {f.icon && <span className="mr-1.5">{f.icon}</span>}
                    {f.label}
                    {isActive && (
                      <motion.span
                        layoutId="menu-page-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-charcoal"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {items.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="font-accent text-2xl text-charcoal/80 max-w-xl mx-auto">
              &ldquo;Read the menu twice. Order the second one too.&rdquo;
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/reserve" size="lg">
                Reserve a Table
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/#contact" variant="secondary" size="lg">
                Order Delivery
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
