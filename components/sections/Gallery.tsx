"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import {
  gallery,
  galleryCategories,
  type GalleryCategory,
} from "@/lib/data/gallery";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [active, setActive] = useState<GalleryCategory>("all");

  const items = useMemo(() => {
    if (active === "all") return gallery;
    return gallery.filter((g) => g.category === active);
  }, [active]);

  return (
    <section className="relative py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Gallery"
          title={
            <>
              A Feast for the Eyes
              <br />
              <span className="font-accent text-gold">Before the Palate.</span>
            </>
          }
          align="center"
        />

        {/* Filter pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {galleryCategories.map((cat) => {
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={cn(
                  "relative px-5 py-2 text-sm font-medium rounded-full border transition-all",
                  isActive
                    ? "bg-charcoal border-charcoal text-cream-light"
                    : "border-border-warm text-charcoal/70 hover:border-gold hover:text-charcoal"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[180px] lg:auto-rows-[220px]"
          >
            {items.map((img, i) => (
              <motion.figure
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-cream-light cursor-pointer",
                  img.span === "tall" && "row-span-2",
                  img.span === "wide" && "col-span-2"
                )}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/0 to-charcoal/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <figcaption className="absolute bottom-3 left-3 right-3 text-cream-light text-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {img.alt}
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-14 flex justify-center">
          <Button href={site.socials.googlePhotos} variant="secondary" size="md">
            See More on Google Photos
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
