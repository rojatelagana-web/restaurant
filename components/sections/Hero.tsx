"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Clock, Star } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/data/site";

const headlineWords = [
  { text: "Every", celebrate: false },
  { text: "Meal", celebrate: false },
  { text: "Deserves", celebrate: false },
  { text: "to", celebrate: false },
  { text: "Be", celebrate: false },
  { text: "a", celebrate: false },
  { text: "Celebration.", celebrate: true },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-cream-light"
    >
      {/* Mobile background image */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 lg:hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1633945274405-b6c8a47f6d1d?auto=format&fit=crop&w=1600&q=80"
          alt="Celebrations Restaurant signature biryani"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-cream-light via-cream-light/85 to-cream-light/30"
        />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 lg:pt-28 pb-20 lg:pb-0 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Left — Content */}
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Visakhapatnam&rsquo;s Most Celebrated Restaurant
          </motion.p>

          <h1 className="heading-display mt-6 text-charcoal">
            <motion.span
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.2 },
                },
              }}
              className="flex flex-wrap gap-x-4 gap-y-1"
            >
              {headlineWords.map((w, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className={w.celebrate ? "gold-underline text-gold" : ""}
                >
                  {w.text}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 text-lg lg:text-xl text-muted leading-relaxed max-w-xl"
          >
            Authentic North Indian flavours, crafted for moments that matter.
            Dine in, take away, or get it delivered — your celebration starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-7 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cream border border-border-warm"
          >
            <Star className="w-4 h-4 fill-gold text-gold" />
            <span className="font-mono text-sm font-medium text-charcoal">4.5</span>
            <span className="w-px h-4 bg-border-warm" />
            <span className="text-sm text-charcoal/70">6,653 Reviews</span>
            <span className="w-px h-4 bg-border-warm" />
            <span className="text-sm text-charcoal/70">Top Rated in Vizag</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button href="/reserve" size="lg">
              Reserve a Table
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/menu" variant="secondary" size="lg">
              View Our Menu
            </Button>
          </motion.div>
        </div>

        {/* Right — Image (desktop only) */}
        <div className="relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(26,26,26,0.35)]"
          >
            <motion.div style={{ y: imageY }} className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1633945274405-b6c8a47f6d1d?auto=format&fit=crop&w=1200&q=85"
                alt="Celebrations Restaurant signature biryani"
                fill
                priority
                sizes="50vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
          </motion.div>

          {/* Floating frosted glass card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute bottom-8 -left-6 lg:-left-10 bg-cream-light/85 backdrop-blur-xl px-6 py-4 rounded-2xl border border-cream-light/60 shadow-[0_20px_40px_-15px_rgba(26,26,26,0.3)]"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider">
                  {site.hoursShort}
                </p>
                <p className="font-mono text-sm font-medium text-charcoal">
                  {site.priceRange}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating rating badge top-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6, type: "spring" }}
            className="absolute -top-4 -right-4 lg:-right-8 w-24 h-24 rounded-full bg-gold flex flex-col items-center justify-center shadow-[0_15px_30px_-8px_rgba(201,149,58,0.6)]"
          >
            <div className="flex items-center gap-0.5">
              <Star className="w-3.5 h-3.5 fill-charcoal text-charcoal" />
              <span className="font-display text-3xl text-charcoal leading-none">4.5</span>
            </div>
            <span className="text-[10px] text-charcoal/80 mt-1 uppercase tracking-wider">
              Google
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-charcoal/40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-charcoal/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
