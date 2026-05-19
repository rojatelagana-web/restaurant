"use client";

import { motion } from "framer-motion";
import { Sparkles, ChefHat, Truck, Wallet } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const features = [
  {
    Icon: Sparkles,
    title: "Premium Ambiance",
    body: "Thoughtfully designed interiors built for celebrations — intimate enough for two, grand enough for thirty.",
  },
  {
    Icon: ChefHat,
    title: "Authentic North Indian Kitchen",
    body: "Every recipe rooted in tradition. Every dish executed with precision. No shortcuts. No compromises.",
  },
  {
    Icon: Truck,
    title: "Three Ways to Enjoy",
    body: "Dine-in for the full experience. Drive-through for convenience. No-contact delivery for when home is the destination.",
  },
  {
    Icon: Wallet,
    title: "Accessible Excellence",
    body: "₹200 to ₹1,200 — great food shouldn't require a special-occasion budget. Everyone deserves to celebrate.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-36 bg-charcoal-deep bg-grain overflow-hidden">
      {/* Decorative gold radial */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(201,149,58,0.6) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Why We're Different"
          title={
            <>
              Why 6,653 People
              <br />
              <span className="text-gold-gradient">Keep Coming Back.</span>
            </>
          }
          align="center"
          light
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group relative bg-white/[0.03] backdrop-blur border border-white/10 rounded-2xl p-7 hover:border-gold/50 hover:-translate-y-2 hover:bg-white/[0.05] hover:shadow-[0_30px_60px_-20px_rgba(201,149,58,0.4)] transition-all duration-500"
            >
              <div className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold/15 text-gold mb-6">
                <f.Icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl text-cream-light leading-tight">
                {f.title}
              </h3>
              <p className="mt-3 text-sm text-cream-light/60 leading-relaxed">
                {f.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
