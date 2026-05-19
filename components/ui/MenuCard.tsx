"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import type { MenuItem } from "@/lib/data/menu";

interface Props {
  item: MenuItem;
  index?: number;
}

export function MenuCard({ item, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative bg-cream-light rounded-2xl overflow-hidden border border-border-warm/60 hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(26,26,26,0.25)] transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {item.popular && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold/95 backdrop-blur text-charcoal text-[10px] font-semibold tracking-widest uppercase shadow-md">
            <Flame className="w-3 h-3" />
            Popular
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-3 mb-2">
          <h3 className="font-accent text-2xl text-charcoal leading-tight">
            {item.name}
          </h3>
          <span className="font-mono text-sm text-gold whitespace-nowrap">
            ₹{item.price}
          </span>
        </div>
        <p className="text-sm text-muted leading-relaxed">{item.description}</p>
      </div>
    </motion.article>
  );
}
